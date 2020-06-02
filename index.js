const Koa = require('koa');
const {routes} = require('./App/routes.js');

const server = new Koa();
var port = process.env.PORT || 5000;

server.use(routes);

server.listen(port, () =>{
    console.log("Server started on port ", port, "...")
});
