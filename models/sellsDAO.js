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
    }

}