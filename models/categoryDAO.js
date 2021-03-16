const bd = require('../configMysql');

module.exports = {
    findByCategoryName: (categoryName, callback) => {
        let sql = 'SELECT * FROM categorias WHERE nombre=?'
        bd.query(sql, categoryName, (err, data) => {
            if (err) throw err

            if (data.length > 0)
                callback(data[0]) //Enviar el primer registro de la consulta
            else
                callback(null)
        })
    },

    getAllCategories: (callback) => {
        let sql = 'SELECT * FROM categorias'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
}