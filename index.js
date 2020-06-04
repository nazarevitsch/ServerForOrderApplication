const Koa = require('koa');
const {routes} = require('./App/routes.js');

const server = new Koa();
const port = process.env.PORT || 5000;

server.use(routes);

server.listen(port, () =>{
    console.log("Server started on port ", port, "...")
});

exports.app = server.listen(8976);
