const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')

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
                message: 'Usuario incorrecto'
            })
        }
    })
}
const passwordValidate = (req, res) => {
    userDAO.findByPassword(req.params.password, (data) =>{
        try {
            if (!data) throw new Err("Contraseña incorrecta")

            res.send({
                status: true,
                message: 'Contraseña correcta'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Contraseña incorrecta'
            })
        }
    })
}
const signup = (req, res) => {
    const user = {
        idRol : req.body.idRol,
        nombre: req.body.nombre,
        apellido : req.body.apellido,
        login : req.body.login,
        password : bcrypt.hashSync(req.body.password,10)
    }

    userDAO.insertUser(user, (data) => {
        console.log('data ==> ',data)
        if (data && data.affectedRows === 1) {
            res.send({
                status: true,
                message: 'Usuario creado exitosamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al crear la cuenta de usuario'
            })
        }
    })
}
module.exports = {
    usernameValidate,
    signup,
    passwordValidate
}