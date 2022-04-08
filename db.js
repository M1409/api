const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'dbUwU',
    password:'senha123',
    port:5432,
})

module.exports = pool