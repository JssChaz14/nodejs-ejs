const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo_ejs'
});


connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Conectado')
})

module.exports = connection;