const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')
const jwt = require('../utils/GenerateJWT')

const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.login, (data) =>{
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
const login = (req,res) => {
    let login = req.body.login
    let password = req.body.password
    userDAO.findByUsername(login, (data) => {
        if (data) {
            if (bcrypt.compareSync(password, data.password)){
                if(data.idRol===1){
                    res.send({
                        status: true,
                        message: 'Contraseña correcta',
                        token: jwt.generateToken(data)
                    })
                }else {
                    res.send({
                        status: true,
                        message: 'Contraseña correcta',
                    })
                }

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
    if (req.user) {
        const user = {
            idRol : req.body.idRol,
            nombre: req.body.nombre,
            apellido : req.body.apellido,
            login : req.body.login,
            password : bcrypt.hashSync(req.body.password,10)
        }

        userDAO.insertUser(user, (data) => {
            res.send({
                status: true,
                message: 'Usuario creado exitosamente'
            })
        }, err => {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al crear la cuenta de usuario',
                errorMessage: err
            })
        })
    }
    else {
    res.send({
        status:false,
        message: 'Este servicio requiere el uso de un Token válido, contactar al administrador',
        error: '100. Falta token'
    })
    }
}
module.exports = {
    usernameValidate,
    signup,
    login
}