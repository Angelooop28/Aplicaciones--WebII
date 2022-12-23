const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  4000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//servicio REST para clientes 

let clientes = [];

app.get('/', (req,res)=>{
    res.status(200).send(
        clientes
    )
})

app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    let result = clientes.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"id no encontrado"
    });
})

app.post('/', (req,res)=>{
    const {body} = req;
    clientes.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})


app.put('/', (req,res)=>{
    const {id, nombre, apellido, identificacion} = req.body;
    
    let cliente =  clientes.filter(p=> p.id === id)[0] || {}
 
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.identificacion = identificacion;

    res.status(200).send(
        {
            
            message:"dato modificado correctamente",
            response: cliente
        }
    )

})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    clientes = clientes.filter(p => p.id !== id);
    res.status(200).send({
        response:"El cliente fue eliminado exitosamente"
    })
})


// Servicio REST para concepto
let conceptos = [];

app.get('/', (req,res)=>{
    res.status(200).send(
        conceptos
    )
})

app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    let result = conceptos.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"id no encontrado"
    });
})

app.post('/', (req,res)=>{
    const {body} = req;
    conceptos.push(body);
    res.status(200).send({
        message:"concepto insertado correctamente",
        response: body
    })
})


app.put('/', (req,res)=>{
    const {id, producto, precio, descripcion} = req.body;
    
    let concepto =  conceptos.filter(p=> p.id === id)[0] || {}
 
    concepto.producto = producto;
    concepto.precio = precio;
    concepto.descripcion = descripcion;

    res.status(200).send(
        {
            
            message:"concepto modificado correctamente",
            response: concepto
        }
    )

})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    conceptos = conceptos.filter(p => p.id !== id);
    res.status(200).send({
        response:"El concepto fue eliminado exitosamente"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})
