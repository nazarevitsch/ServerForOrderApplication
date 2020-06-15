const {Client} = require('pg');
const client = new Client(
    {
    // connectionString: process.env.DATABASE_URL
        host: '127.0.0.1',
        port: 5432,
        database: 'OrderApplicationDB',
        user: 'postgres',
        password: 'Nazar1997'
});

client.connect()
    .then(()=> {
        console.log("Connection to DB is working...");})
    .catch(e => console.log(e));

module.exports = client;
