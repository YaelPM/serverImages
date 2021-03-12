const jwt = require('jsonwebtoken')
const configurationServer = require('../ConfigServer')

const generateToken = (user) => {
    let userToken = {
        idUser: user.idUser,
        idRol: user.idRol,
        name: user.nombre
    }
    const {secret} = configurationServer.jwt;

    return jwt.sign(userToken,secret,{ expiresIn: 60 * 60 })
}

module.exports = {
    generateToken
}