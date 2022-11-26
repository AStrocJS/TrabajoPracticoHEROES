const express = require('express');
const app = express(); 
const path = require ("path")
const port = 3030  
app.use(express.static('public'))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`)) 

//         RUTAS  
app.get('/', (req, res) => res.sendFile(path.join(__dirname,"views","index.html" )))
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname,"views","babbage.html" )))
app.get('/bernel-lee', (req, res) => res.sendFile(path.join(__dirname,"views","bernel-lee.html" )))
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname,"views","clarke.html" )))
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, "views", "hamilton.html")))
app.get('/lovelace', (req, res) => res.sendFile(path.join(__dirname, "views", "lovelace.html")))
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, "views", "turing.html")))
app.get('*', (req, res) => res.sendFile(path.join(__dirname,"views","404.html" )))
