const mysql = require('mysql');
const config = {
    host : 'localhost',
    user : 'users.nodejs',
    database: 'webpage',
    password: 'G7v3R2001',
};
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexion exitosa');
});
module.exports = conn;