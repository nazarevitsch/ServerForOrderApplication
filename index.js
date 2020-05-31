const Koa = require('koa');
const {routes} = require('./routes.js');

const server = new Koa();

server.use(routes);

server.listen(8099, () =>{
    console.log("Server started on port 8090...")
});


// const client = require('./ConnectionToDB.js');
// const query = require('./queryToDB.js');
// const queries = require('./queries.js');
//
// const http  = require('http');
// const fs = require('fs');
// const port = 8090;
// let counter = 0;
// let code = 0;
//
// const server = http.createServer( (req, res) => {
//     console.log("PIDER ", req.url, " Count: ", counter++);
//     if (req.url == "/create_order") {
//         res.statusCode = 200;
//         res.end("OK");
//     }