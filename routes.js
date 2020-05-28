const Router = require('koa-router');
const Queries = require('./queries.js');
const fs = require('fs');
const menuParser = require('./createMenu.js');
const mailSender = require('./mailSender.js');

const router = new Router();

router
    .get('/', async (ctx, next) => {
        ctx.response.body = await Queries.getAllRestaurnats();
    })
    .get('/signIn', async (ctx, next) => {
        let a = await Queries.getUserByEmailPassword(ctx.request.headers.login, ctx.request.headers.pass);
        if (!a.ok) {
            ctx.response.body = "N";
        } else {
            ctx.response.body = "Y";
        }
    })
    .get('/signUp', async (ctx, next) => {
        let a = await Queries.userAlreadyExist(ctx.request.headers.login);
        if (a.ok) {
            ctx.response.body = "N";
        } else {
            ctx.response.body = "Y";
            Queries.addUser(ctx.request.headers.login, ctx.request.headers.pass, ctx.request.headers.name, ctx.request.headers.phone);
        }
    })
    .get('/img', async (ctx, next) => {
        const src = fs.createReadStream('./images/' + ctx.request.headers.name);
        ctx.response.set("content-type");
        // console.log(ctx.request.headers);
        ctx.body = src;
    })
    .get('/item', async (ctx, next) =>{
        let a = await Queries.getMenu(ctx.request.headers.id);
        let menu = await menuParser.createMenu(a.data);
        let images = await Queries.getAllImages(ctx.request.headers.id);
        let restaurant = await Queries.getRestaurantByIdWithDescription(ctx.request.headers.id);
        console.log(restaurant)
        ctx.response.body = [{
            id: restaurant.data[0].id,
            name: restaurant.data[0].name,
            location: restaurant.data[0].location,
            mainImage: restaurant.data[0].main_image,
            description: restaurant.data[0].description,
            images: images.data,
            menu: menu
        }]
        console.log(ctx.response.body);
    })
    .get('/ForgotPass1', async (ctx, next) => {
        let code = Math.floor(Math.random() * 899999) + 100000;
        let a = await Queries.forgotPassword1(ctx.request.headers.login, code);
        mailSender.sendMailForForgotPassword(ctx.request.headers.login, code);
    });




// if (req.url == "/ForgotPass1") {
//         res.statusCode = 200;
//         code = Math.floor(Math.random() * 899999) + 100000;
//         console.log(code);
//         res.end("Y");
//     }
//     if (req.url == "/ForgotPass2") {
//         res.statusCode = 200;
//         if (Number(req.headers.code) === code) {
//             res.end("Y");
//         } else res.end("N");
//     }

exports.routes = router.routes();
