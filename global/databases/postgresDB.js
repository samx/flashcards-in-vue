const config = require('../config');
const pgp = require('pg-promise')();
let { hostName, port, username, password, database } = config.postgres;

const cn = `postgres://${username}:${password}@${hostName}:${port}/${database}`;
console.log(cn);

const db = pgp({
    host: hostName,
    port,
    database,
    user: username,
    password,
    idleTimeoutMillis: (3.6 * 1000000) * 12,
    connect(e) {
        const cp = e.client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }
});
module.exports = db;