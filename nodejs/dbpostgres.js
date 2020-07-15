//pool genera una coneccion por cada consulta
const { Pool } = require('pg');
const BD = {
    user: 'postgres',
    password: 'kevin1183',
    host: 'localhost',
    database: 'prueba'
}
const pool = new Pool(BD)

module.exports = new Pool(BD);