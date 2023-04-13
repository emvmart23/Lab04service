const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Max Martinez Saavedra')
})

app.get('/clientes', (req, res) =>{
    res.send('')
})

app.get('/productos', (req, res) => {
    res.send('')
})


http.createServer(function (req, res) {
    res.write('Hello World!'); // Write a response
    res.end(); // End the response
}).listen(3000, function() {
    console.log("server start at port 3000"); // The server object listens on port 3000
});