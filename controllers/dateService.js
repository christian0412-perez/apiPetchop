const productDAO = require('../models/datesDAO')


const getAllDates = (req, res)=>{
    productDAO.getAllProducts(data =>{
            try{
                if(!data) throw new Err("no hay citas")
                res.send({
                    status:true,
                    data: data
                })

            }catch(Err){
                res.send({
                    status:false,
                    message:"no existen citas"
                })

            }
        }
    )
}

const insertDates = (req, res) => {

    const product = {

        nombreCliente : req.body.nombreCliente,
        hora : req.body.hora,
        fecha : req.body.fecha,
        asunto : req.body.asunto

    }

    productDAO.insertDate(product, (data) => {
        res.send({
            status: true,
            message: 'cita registrada exitosamente',

        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear la cita',
            errorMessage: err
        })
    })
}

const deleteProduct = (req, res)=>{
    productDAO.deleteDate(req.params.nombre, (data) =>{
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
    getAllDates,
    insertDates
}