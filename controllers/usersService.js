const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')
const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, (data) =>{

        try {
            if (!data) throw new Err("error en usuario")

            res.send({
                status: true,
                message: 'Usuario correcto'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'error en usuario'
            })
        }
    })
}
const getAllUsers = (req, res)=>{
    userDAO.getAllUsers(data =>{
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
const signup = (req, res)=>{
    const user ={
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username,
        password: bcrypt.hash(req.body.password,10)
    }
    userDAO.insertUser(user, (data) =>{
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
const deleteUser = (req, res)=>{
    userDAO.deleteUser(req.params.username, (data) =>{
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
    usernameValidate,
    getAllUsers,
    signup,
    deleteUser
}