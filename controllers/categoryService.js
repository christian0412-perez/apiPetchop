const categoryDAO = require('../models/categoryDAO')

const getAllCategories = (req,res) => {
    categoryDAO.getAllCategories((data) =>{
        try {
            if (!data) throw new Err("Catálogo vacío")

            res.send({
                status: true,
                data: data
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Catálogo vacío'
            })
        }
    })
};

module.exports = {
    getAllCategories,
}