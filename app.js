
const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, './public')
app.use(expres.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})