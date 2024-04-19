const express = require('express');
const router = express.Router();

const connection = require('../config/db');

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

});

router.get('/contacto', function(req, res, next) {
    res.render('./../views/user/users')
    ñ
});

router.get('/hi', function(req, res, next) {
    res.render('../views/user/add')

});

module.exports = router;