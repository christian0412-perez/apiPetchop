const mysql = require('mysql');
const config = {
    host : 'localhost',
    user : 'user.nodejs',
    database: 'estancia',
    password: 'Vaca234s',
};
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexion exitosa');
});
module.exports = conn;