const sellsDAO = require('../models/sellsDAO')
const bcrypt = require("bcrypt");
const jwt = require('../utils/GenerateJWT');

const getAllVentas = (req, res) =>  {
    sellsDAO.getAllVentas(data =>{
            try{
                if(!data) throw new Err("no hay productos")

                res.send({
                    status:true,
                    data: data
                })

            }catch(Err){
                res.send({
                    status:false,
                    message:"no existen productos"
                })

            }
        }
    )
}

module.exports = {
    getAllVentas
}