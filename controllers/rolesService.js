const rolesDAO = require('../models/rolesDAO')

const getRoles = (req, res) =>{
    console.log("entro a getRoles")
    rolesDAO.getAllRoles((data) => {
        res.send({
            status: true,
            message: 'Roles',
            datos: data
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al ver los roles',
            errorMessage: err
        })
    })
}
const addRol = (req, res) =>{
    console.log("entro a addRol")
    const rolbd = {
        rol : req.body.rol,
        descripcion: req.body.descripcion
    }
    rolesDAO.insertRol(rolbd, (data) => {
        res.send({
            status: true,
            message: 'Rol creado exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear el rol',
            errorMessage: err
        })
    })
}
const deleteRol = (req, res) => {
    rolesDAO.deleteRol(req.params.idRol, (data) =>{
        try {
            if (!data) throw new Err("Usuario disponible")

            res.send({
                status: true,
                message: 'Rol eliminado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Rol incorrecto'
            })
        }
    })
}
module.exports = {
    addRol,
    deleteRol,
    getRoles
}