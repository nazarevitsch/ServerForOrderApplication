const Koa = require('koa');
const {routes} = require('./routes.js');

const server = new Koa();

server.use(routes);

server.listen(8090, () =>{
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
//     if (req.url == "/") {
//         client.query(query.selectAllRestaurants, (err, resp) => {
//             if (err){
//                 throw err;
//             }
//             const answer = JSON.stringify(resp.rows);
//             res.end(answer);
//         });
//     }
//     if (req.url.includes("/index1.jpg")){
//         fs.readFile("C:\\Users\\nazar\\OneDrive\\Документы\\JS Projects\\telegrambot\\index1.jpg", function (error, data) {
//             if (error) {
//                 response.statusCode = 404;
//                 res.end("Resourse not found!");
//             } else {
//                 res.statusCode = 200;
//                 res.end(data);
//             }
//         });
//     }
//     if (req.url.includes("/index2.jpg")){
//         fs.readFile("C:\\Users\\nazar\\OneDrive\\Документы\\JS Projects\\telegrambot\\index2.jpg", function (error, data) {
//             if (error) {
//                 response.statusCode = 404;
//                 res.end("Resourse not found!");
//             } else {
//                 res.statusCode = 200;
//                 res.end(data);
//             }
//         });
//     }
//     if (req.url == "/img"){
//         fs.readFile("C:\\Users\\nazar\\OneDrive\\Документы\\JS Projects\\telegrambot\\mb.jpg", function (error, data) {
//             if (error) {
//                 response.statusCode = 404;
//                 res.end("Resourse not found!");
//             } else {
//                 res.statusCode = 200;
//                 res.end(data);
//             }
//         });
//     }
//     if (req.url == "/item"){
//         fs.readFile("C:\\Users\\nazar\\OneDrive\\Документы\\JS Projects\\telegrambot\\item.json", function (error, data) {
//             if (error) {
//                 response.statusCode = 404;
//                 res.end("Resourse not found!");
//             } else {
//                 res.statusCode = 200;
//                 res.end(data);
//             }
//         });
//     }
//     if (req.url == "/signIn") {
//         client.query(query.searchUserByEmailPassword(req.headers.login, req.headers.pass), (err, resp) => {
//             if (err){
//                 throw err;
//             }
//             res.statusCode = 200;
//             if (Number(resp.rowCount) === 1){
//                 res.end("Y");
//             }
//             else {
//                 res.end("N");
//             }
//         });
//     }
//     if (req.url == "/signUp") {
//         res.statusCode = 200;
//         queries.userAlreadyExist(req.headers.login, req.headers.phone)
//             .then((t) => {if (!t) {
//                 client.query(query.addUser(req.headers.phone, req.headers.pass, req.headers.login, req.headers.name), (err, resp) => {
//                     if (err) {
//                         throw err;
//                     }
//                     res.end("Y");
//                 });
//             } else {
//                 res.end("N");
//             }})
//     }
//     if (req.url == "/ForgotPass1") {
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
// });
//
// server.listen(port, ()=>{
//     console.log("Server start...");
// });
