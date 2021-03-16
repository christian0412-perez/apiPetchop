const userDAO = require('../models/usersDAO')
const bcrypt = require("bcrypt");
const jwt = require('../utils/GenerateJWT');

const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username , (data) =>{
        try {
            if (!data) throw new Err("Usuario disponible")

            res.send({
                status: true,
                message: 'Usuario ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Usuario disponible'
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

const login = (req,res) => {
    let username = req.body.username
    let password = req.body.password
    userDAO.findByUsername(username, (data) => {
        if (data) {
            console.log('Data =>',data)
            if (bcrypt.compareSync(password, data.password)){
                res.send({
                    status: true,
                    message: 'Contraseña correcta',
                    token: jwt.generateToken(data),

                })
            } else {
                res.send({
                    status: false,
                    message: 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message: 'La cuenta de usuario no existe'
            })
        }
    })
}
const signup = (req, res) => {
    console.log('Signup => in')

        const user = {

            idRol: req.body.idRol,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        userDAO.insertUser(user, (data) => {
            res.send({
                status: true,
                message: 'Usuario creado exitosamente',
                token: jwt.generateToken(data)
            })
        }, err => {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear la cuenta de usuario',
                errorMessage: err
            })
        })
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
    deleteUser,
    login
}