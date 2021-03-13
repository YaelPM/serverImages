const mysql = require('mysql');

const config = {
    host : 'localhost',
    user : 'user.nodejs',
    database: 'bd_zonagamer',
    password: 'mayitofirst01',
};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) throw err;
    console.log('*Conexión establecida*');
});

module.exports = conn;