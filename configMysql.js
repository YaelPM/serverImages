const mysql = require('mysql');

const config = {
    host : 'localhost',
    user : 'user.nodejs',
    database: 'programacionweb1',
    password: 'nodejs',
};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conn;