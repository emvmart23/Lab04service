const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Max Martinez Saavedra')
})


app.get('/clientes', (req, res) =>{
    res.send('cliente1','cliente2','cliente3')
})

app.get('/productos', (req, res) => {
    res.sendFile('producto1','producto2','producto3')
})


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});