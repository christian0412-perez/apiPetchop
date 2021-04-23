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

const truncTable = (req, res) => {
    console.log('Signup => in')
    const truncc = {
        truncc : req.body.truncc
    }

    sellsDAO.truncTable(truncc, (data) => {
        res.send({
            status: true,
            message: 'tabla limpiada',

        })
    }, err => {
        res.send({
            status:false,
            message: 'tabla no limpiada',
            errorMessage: err
        })
    })
}

const deleteSell = (req, res)=>{
    sellsDAO.deleteSell(req.params.idVenta, (data) =>{
            try {
                if (!data) throw new Err("Hubo un error en el proceso")
                if (data.affectedRows === 0) throw new Err(`Falló la eliminación del idVenta: ${req.params.idVenta}`)
                res.send({
                    status: true,
                    message: `Eliminación de idVenta: ${req.params.idVenta} fue exitosa`
                })
            }
            catch (Err) {
                res.send({
                    status: false,
                    message: '<La eliminacion fracaso'
                })
            }
        }
    )
}

module.exports = {
    getAllVentas,
    truncTable,
    deleteSell
}