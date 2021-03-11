const productsDAO = require('../models/productsDAO')

const getProduct = (req, res) =>{
    productsDAO.getAllProducts((data) => {
        res.send({
            status: true,
            message: 'Product',
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
const addProduct = (req, res) =>{
    console.log("add ok")
    const product = {
        idCategoria : req.body.idCategoria,
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen
    }
    productsDAO.insertProduct(product, (data) => {
        res.send({
            status: true,
            message: 'producto creado exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear el producto',
            errorMessage: err
        })
    })
}
const deleteProduct = (req, res) => {
    productsDAO.deleteProduct(req.params.idRol, (data) =>{
        try {
            if (!data) throw new Err("El Producto no existe")

            res.send({
                status: true,
                message: 'El Producto ha sido eliminado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Ha ocurrido un problema al tratar de eliminar el Producto'
            })
        }
    })
}
const updateProduct = (req, res) =>{

    const product = {
        idCategoria : req.body.idCategoria,
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen
    }
    const id= req.body.idProducto

    productsDAO.updateProduct(product, id, (data) => {
        res.send({
            status: true,
            message: 'producto actualizado exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al actualizar producto',
            errorMessage: err
        })
    })
}
module.exports = {
    addProduct,
    deleteProduct,
    getProduct,
    updateProduct
}