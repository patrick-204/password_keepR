const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const Client = pg.Client;

const config = {
    host:     process.env.OURDBHOST,
    user:     process.env.OURDBUSER,
    password: process.env.OURDBPASS,
    database: process.env.OURDBNAME,
    port:     process.env.OURDBPORT
};
const client = new Client(config);

client.connect();

module.exports = client;