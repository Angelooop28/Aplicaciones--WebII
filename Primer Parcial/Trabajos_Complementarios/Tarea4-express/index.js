// npm init --y
// npm i express
// npm i cors
// npm i nodemon -D




const path = require("path");

const express = require("express");
const cors =  require("cors");

const PUERTO = 8080;
//sdfsdf

const urlIndex = path.join(__dirname,"./cliente.html")
const urlAbout = path.join(__dirname,"./concepto.html")
const urlError = path.join(__dirname,"./gasto.html")

 
const server =  express();

server.use(cors()).use(express.json())


server.get('/', functionIndex )

server.get('/about', (req,res)=>{
    res.status(200).sendFile(urlConcepto);
    // res.status(200).send({
    //     response:"Muestro mis entidades!!!!!!"
    // })
})
server.get('/test',(req,res)=>{
    res.status(200).json({
        'message':'Problem with application web!!!!!!!!!'
    })
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlGasto);
})



function functionCliente (req, res){
    res.status(200).sendFile(urlCliente);
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:8080}`);
})
