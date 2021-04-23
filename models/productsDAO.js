const bd = require('../configMysql');

module.exports = {
    findByProductName : (nameProduct, callback) => {
        let sql = 'SELECT * FROM productos WHERE nameProduct=?'
        bd.query(sql,nameProduct, (err, data) => {
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

    findByPet:(petType, callback)=>{
        let sql = 'SELECT * FROM productos WHERE petType=?'
        bd.query(sql, petType, (err,data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    findByCategory:(categoria, callback)=>{
        let sql = 'SELECT * FROM productos WHERE idCategory=?'
        bd.query(sql, categoria, (err,data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    findByDogs:(idCategory, callback)=>{
        let sql = 'SELECT * FROM productos WHERE petType="perros" and idCategory=?'
        bd.query(sql, idCategory, (err,data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    findByCats:(categoria, callback)=>{
        let sql = 'SELECT * FROM productos WHERE petType="gatos" and idCategory=?'
        bd.query(sql, categoria, (err,data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    findByOthers:(categoria, callback)=>{
        let sql = 'SELECT * FROM productos WHERE petType="otros" and idCategory=?'
        bd.query(sql, categoria, (err,data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    deleteProduct:(idProducto,callback)=>{
        let sql = 'DELETE FROM productos WHERE idProducto=?'
        bd.query(sql,idProducto, (err, data) => {
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

    insertProduct : (product, okCallback, failCallback) => {
        let sql = 'INSERT INTO productos SET ?'
        bd.query(sql, product, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },

    insertProductSell : (product, okCallback, failCallback) => {
        let sql = 'INSERT INTO ventas SET ?'
        bd.query(sql, product, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },

    updateProducto : (quantity, idProducto, okCallback, failCallback) => {
        let sql = 'UPDATE productos SET quantity = ? WHERE idProducto = ?'
        bd.query(sql, quantity, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    }
}