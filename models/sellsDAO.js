const bd = require('../configMysql');

module.exports = {

    getAllVentas:(callback)=>{
        let sql = 'SELECT * FROM ventas'
        bd.query(sql,(err,data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    truncTable : (trunc, okCallback, failCallback) => {
        let sql = `TRUNCATE  ${trunc}`
        bd.query(sql, product, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },

    deleteSell:(idVenta,callback)=>{
        let sql = 'DELETE FROM ventas WHERE idVenta=?'
        bd.query(sql,idVenta, (err, data) => {
            console.log("err =>",err)
            console.log("data =>",data)
            try {
                if (err) throw new Err('Error en la eliminación')
                return callback(data)
            }
            catch (Err) {
                return callback(null)
            }
        })
    },

}