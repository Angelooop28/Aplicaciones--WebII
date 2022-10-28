const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

let clientes = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        clientes
    )
})
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
    // req.params.identification
    let result = clientes.filter(p => p.identification === identification);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el cliente con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
    // req.body.name
    // req.body.address
    students.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {identification, name, course} = req.body;

    
    let clientes =  clientes.filter(p=> p.identification === identification)[0] || {}
    
    // console.log(clientes)

    cliente.name = name;
    cliente.lastname = lastname;

    res.cliente(200).send(
        {
            message:"dato modificado correctamente",
            response: clientes
        }
    )

})
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    clientes = clientes.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el cliente con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:3000`)
})

// http://localhost:3000/prueba/20/clientes/indivitual&identification=1234521222
// http://localhost:3000/   GET , POST, PATCH,  PUT, DELETE