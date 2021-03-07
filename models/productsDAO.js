const bd = require('../configMysql');

module.exports = {
    findByProductName : (productName, callback) => {
        let sql = 'SELECT * FROM productos WHERE nombre=?'
        bd.query(sql,productName, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0]) //Enviar el primer registro de la consulta
            else
                callback(null)
        })
    },
    getAllProducts:(callback)=>{
        let sql = 'SELECT * FROM productos'
        bd.query(sql,(err,data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    deleteProduct:(productName,callback)=>{
        let sql = 'DELETE FROM productos WHERE Nombre=?'
        bd.query(sql, productName,(err,data) => {
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },

    insertProduct : (product, okCallback, failCallback) => {
        let sql = 'INSERT INTO productos SET ?'
        bd.query(sql, product, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    }
}