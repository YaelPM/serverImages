const bd = require('../configMysql')

module.exports = {
    insertProduct : (product, callback) => {
        let sql = 'INSERT INTO productos SET ?'
        console.log(product);
        bd.query(sql, product, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },
    updateProduct : (product, idProduct, callback) => {
        let sql = 'UPDATE productos SET ? WHERE idProducto = ?'
        bd.query(sql, [product, idProduct], (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },
    deleteProduct : (id, callback) => {
        let sql = 'DELETE FROM productos WHERE idProducto = ?'
        bd.query(sql, id, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },
    getAllProducts : (callback) => {
        let sql = 'SELECT * FROM productos'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    }
}
