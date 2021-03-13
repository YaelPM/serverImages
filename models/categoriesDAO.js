const bd = require('../configMysql')

module.exports = {
    insertCategories: (product, callback) => {
        let sql = 'INSERT INTO categorias SET ?'
        console.log(product);
        bd.query(sql, product, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },

    deleteCategories : (id, callback) => {
        let sql = 'DELETE FROM categorias WHERE idcategorias = ?'
        bd.query(sql, id, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },

    getAllCategories : (callback) => {
        let sql = 'SELECT * FROM categories'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    }



}