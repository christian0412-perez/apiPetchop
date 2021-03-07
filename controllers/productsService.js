const productDAO = require('../models/productsDAO')
const bcrypt = require("bcrypt");
const jwt = require('../utils/GenerateJWT');

const getAllProducts = (req, res)=>{
    productDAO.getAllProducts(data =>{
            try{
                if(!data) throw new Err("no hay usuarios")
                res.send({
                    status:false, body: data
                })
            }catch(Err){
                res.send({
                    status:false, message:"no existen usuarios"
                })

            }
        }
    )
}

const insertProduct = (req, res) => {

    const product = {

        nombre : req.body.nombre,
        precio : req.body.precio,
        cantidad : req.body.cantidad

    }

    productDAO.insertProduct(product, (data) => {
        res.send({
            status: true,
            message: 'Usuario creado exitosamente',

        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear la cuenta de usuario',
            errorMessage: err
        })
    })
}

const deleteProduct = (req, res)=>{
    productDAO.deleteUser(req.params.nombre, (data) =>{
            console.log(data)
            if(data && data.affectedRows == 1){
                res.send({
                    status: true, message: 'usuario creado exitosamente'
                })
            }else{
                res.send({
                    status: false, message:'ha ocurrido un error al crear el usuario'
                })
            }
        }
    )
}


module.exports = {
    getAllProducts,
    insertProduct
}