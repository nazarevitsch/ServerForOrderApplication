const Koa = require('koa');
const {routes} = require('./App/routes.js');

const server = new Koa();

server.use(routes);

server.listen(8099, () =>{
    console.log("Server started on port 8090...")
});
