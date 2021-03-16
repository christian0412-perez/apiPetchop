const productDAO = require('../models/productsDAO')

const productValidate = (req, res) => {
    productDAO.findByProductName(req.params.productName , (data) =>{
        try {
            if (!data) throw new Err("nombre disponible")

            res.send({
                status: true,
                message: 'nombre ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'nombre disponible'
            })
        }
    })
}

const getAllProducts = (req, res) =>  {
    productDAO.getAllProducts(data =>{
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

const getAllCategory = (req, res) => {
    productDAO.findByCategory(req.params.categoria , (data) =>{
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

const getAllPet = (req, res) => {
    productDAO.findByPet(req.params.tipoMascota , (data) =>{
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

const getAllAboutDogs = (req, res) => {
    productDAO.findByDogs(req.params.categoria, (data) =>{
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

const getAllAboutCats = (req, res) => {
    productDAO.findByCats(req.params.categoria, (data) =>{
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

const getAllAboutOthers = (req, res) => {
    productDAO.findByOthers(req.params.categoria, (data) =>{
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

const insertProduct = (req, res) => {

    const product = {
        idCategoria : req.body.idCategoria,
        nameProduct : req.body.nameProduct,
        price : req.body.price,
        quantity : req.body.quantity,
        petType : req.body.petType
    }

    productDAO.insertProduct(product, (data) => {
        res.send({
            status: true,
            message: 'producto registrado exitosamente',

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
    productValidate,
    getAllProducts,
    insertProduct,
    getAllCategory,
    getAllPet,
    getAllAboutDogs,
    getAllAboutCats,
    getAllAboutOthers
}