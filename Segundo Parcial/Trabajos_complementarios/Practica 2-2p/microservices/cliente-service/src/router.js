const express = require("express");
const cors = require('cors');
const app = express();

const Cliente = require('./models/Cliente');


app.use(express.json());
app.use(cors());

// Ruta para obtener los datos del cliente
app.get("/api/v2/cliente", async (req,res)=>{
    const cliente = await Cliente.find();
    return res.send(cliente);
})

app.post("/api/v2/cliente", async (req,res)=>{
    const { id , nombre , apellido , identificacion  } =  req.body;
    
    const cliente = new Cliente({ id , nombre , apellido , identificacion });

    await cliente.save()
  
    res.status(201).json(cliente);
})

app.put("/api/v2/cliente/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const actualizarcliente =  await Cliente.findByIdAndUpdate(id,data )
    res.json(actualizarcliente);
})

app.delete("/api/v2/cliente/:id", async (req,res)=>{
    const {id} = req.params;
    await Cliente.findByIdAndDelete(id)
    res.json(`Cliente eliminado`);
})

module.exports= app;