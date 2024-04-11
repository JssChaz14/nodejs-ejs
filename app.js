const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));

app.listen(3300, () => {
    console.log('corriendo')
})