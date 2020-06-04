const Router = require('koa-router');
const fs = require('fs');
const Queries = require('./workWithDB/queries.js');
const filterParser = require('./routes/filtersParser.js');
const Authorization = require('./routes/authorization.js');
const CreateItem = require('./routes/createItemOfRestaurant.js');
const Orders = require('./routes/orders.js');

const router = new Router();

router
    .get('/', async (ctx, next) => {
        ctx.response.body = "Hallo!";
    })
    .get('/restaurants', async (ctx, next) => {
        ctx.response.body = await filterParser.getRestaurants(ctx.request.headers.filters);
    })
    .get('/signIn', async (ctx, next) => {
        ctx.response.body = await Authorization.signIn(ctx.request.headers.login, ctx.request.headers.pass);

    })
    .get('/signUp', async (ctx, next) => {
        ctx.response.body = await Authorization.signUp(ctx.request.headers.login, ctx.request.headers.pass, ctx.request.headers.phone, ctx.request.headers.name);
    })
    .get('/img', async (ctx, next) => {
        const src = fs.createReadStream('./images/' + ctx.request.headers.name);
        ctx.response.set("content-type");
        ctx.body = src;
    })
    .get('/item', async (ctx, next) => {
        ctx.response.body = await CreateItem.getItem(ctx.request.headers.id);
    })
    .get('/ForgotPass1', async (ctx, next) => {
        ctx.response.body = await Authorization.ForgotPassword1(ctx.request.headers.login);
    })
    .get('/ForgotPass2', async (ctx, next) => {
        ctx.response.body = await Authorization.ForgotPassword2(ctx.request.headers.login, ctx.request.headers.code);
    })
    .get('/categories', async (ctx, next) => {
        ctx.response.body = await Queries.getAllCategories();
    })
    .get('/create_order', async (ctx, next) => {
        ctx.response.body = await Orders.createOrder(ctx.request.headers.email, ctx.request.headers.id, ctx.request.headers.date, ctx.request.headers.peopleamount)
    })
    .get('/user_orders', async (ctx, next) => {
        console.log(ctx.request.headers)
        ctx.response.body = await Orders.getUserOrders(ctx.request.headers.email);
});


exports.routes = router.routes();
