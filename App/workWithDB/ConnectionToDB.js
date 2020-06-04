const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect()
    .then(()=> {
        console.log("Connection to DB is working...");})
    .catch(e => console.log(e));

module.exports = client;
