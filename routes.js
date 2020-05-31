const Router = require('koa-router');
const fs = require('fs');
const Queries = require('./queries.js');
const menuParser = require('./createMenu.js');
const mailSender = require('./mailSender.js');
const createPassword = require('./randomPassword.js');
const filterParser = require('./filtersParser.js')

const router = new Router();

router
    .get('/', async (ctx, next) => {
        console.log(ctx.request.headers);
        if (ctx.request.headers.filters === '') {
            ctx.response.body = await Queries.getAllRestaurnats();
        } else {
            let filters = await filterParser.parseFilter(ctx.request.headers.filters);
            let restaurants = await Queries.getAllRestaurnats();
            ctx.response.body = await filterParser.choiceRestaurants(restaurants, filters);
        }
    })
    .get('/signIn', async (ctx, next) => {
        let a = await Queries.getUserByEmailPassword(ctx.request.headers.login, ctx.request.headers.pass);
        if (a.ok) {
            ctx.response.body = "Y";
        } else {
            ctx.response.body = "N";
        }
    })
    .get('/signUp', async (ctx, next) => {
        let a = await Queries.userAlreadyExist(ctx.request.headers.login, ctx.request.headers.phone);
        console.log(a);
        if (a.ok) {
            ctx.response.body = "N";
        } else {
            Queries.addUser(ctx.request.headers.login, ctx.request.headers.pass, ctx.request.headers.name, ctx.request.headers.phone);
            ctx.response.body = "Y";
        }
    })
    .get('/img', async (ctx, next) => {
        const src = fs.createReadStream('./images/' + ctx.request.headers.name);
        ctx.response.set("content-type");
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
    })
    .get('/ForgotPass1', async (ctx, next) => {
        let b = await Queries.searchUserByEmail(ctx.request.headers.login);
        if (b.ok) {
            let code = Math.floor(Math.random() * 899999) + 100000;
            let a = await Queries.forgotPassword1(ctx.request.headers.login, code);
            await mailSender.sendMailForForgotPasswordWithCode(ctx.request.headers.login, code);
            ctx.response.body = "Y";
        } else {
            ctx.response.body = "N";
        }
    })
    .get('/ForgotPass2', async (ctx, next) => {
        let answer = await Queries.forgotPassword2(ctx.request.headers.login, ctx.request.headers.code);
        if (answer.ok){
            let pass = createPassword.createRandomPassword(10);
            await Queries.deleteFromForgotPassword(ctx.request.headers.login);
            let b = await Queries.updatePasswordForUser(ctx.request.headers.login, pass);
            mailSender.sendMailForForgotPasswordWithPassword(ctx.request.headers.login, pass);
            if (b.ok) ctx.response.body = "Y";
        }
    }).get('/categories', async (ctx, next) => {
        let b = await Queries.getAllCategories();
        ctx.response.body = b;
    });


exports.routes = router.routes();
