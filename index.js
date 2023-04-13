const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Max Martinez Saavedra')
})


app.get('/clientes', (req, res) =>{
    res.send('cliente1, cliente2')
})

app.get('/productos', (req, res) => {
    res.sendFile('./productos.html')
})


const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log('SASasaS')
})