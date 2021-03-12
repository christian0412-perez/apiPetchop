const bd = require('../configMysql');

module.exports = {
    findByClientName : (productName, callback) => {
        let sql = 'SELECT * FROM citas WHERE nombreCliente=?'
        bd.query(sql,productName, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0]) //Enviar el primer registro de la consulta
            else
                callback(null)
        })
    },

    getAllDates:(callback)=>{
        let sql = 'SELECT * FROM citas'
        bd.query(sql,(err,data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    deleteDate:(productName,callback)=>{
        let sql = 'DELETE FROM citas WHERE Nombre=?'
        bd.query(sql, productName,(err,data) => {
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },

    insertDate : (product, okCallback, failCallback) => {
        let sql = 'INSERT INTO citas SET ?'
        bd.query(sql, product, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    }
}