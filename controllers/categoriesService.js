const getCategories = (req, res) =>{
        categoriesService.getAllCategories((data) => {
        res.send({
            status: true,
            message: 'Categoria',
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
const addCategories = (req, res) =>{
    console.log("add ok")
    const product = {
        idCategoria : req.body.idCategoria,
        nombre: req.body.nombre,
        descripcion : req.body.descripcion
    }
    categoriesDAO.insertCategories(categorie, (data) => {
        res.send({
            status: true,
            message: 'categoria creado exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear la categoria',
            errorMessage: err
        })
    })
}
const deleteCategories = (req, res) => {
    categoriesDAO.deleteCategorie(req.params.idCategoria, (data) =>{
        try {
            if (!data) throw new Err("La categoria no existe")

            res.send({
                status: true,
                message: 'La categoria ha sido eliminado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Ha ocurrido un problema al tratar de eliminar la categoria'
            })
        }
    })
}
module.exports = {
    addCategories,
    deleteCategories,
    getCategories
}