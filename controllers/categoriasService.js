const categoriesDAO = require('../models/categoriasDAO')

const getCategories = (req, res) =>{
    console.log("entro a getCategorias")
    categoriesDAO.getAllCategories((data) => {
        res.send({
            status: true,
            message: 'Extraction sucessfull',
            datos: data
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al ver las categorias',
            errorMessage: err
        })
    })
}
const addCategory = (require, res) =>{
    console.log("entro a addCategoria")
    const category = {
        name: require.body.name,
        description: require.body.description

    }
    categoriesDAO.insertCategories(category, (data) => {
        res.send({
            status: true,
            message: 'Categoria creada exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear la categoria',
            errorMessage: err
        })
    })
}
const deleteCategory = (req, res) => {
    categoriesDAO.deleteCategories(req.params.idCategoria, (data) =>{
        try {
            if (!data) throw new Err("Usuario disponible")

            res.send({
                status: true,
                message: 'Categoria eliminada'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Categoria incorrecta'
            })
        }
    })
}
module.exports = {
    addCategory,
    deleteCategory,
    getCategories
}