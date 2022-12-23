const { response, json, request } = require('express');
const Nota = require('../models/cliente');



const gets = async (req, res= response)=>{
        const cliente =await  cliente.find();
        return res.json({cliente})
}


const getCliente = async (req=request, res= response)=>{
    const {id} = req.params
    const Cliente =  await Cliente.findById(id)
    res.json(Cliente);
}

const createCliente = async(req=request,res=response)=>{
    const { Cliente,  detalle } =  req.body;
    
    const Clientesave = new cliente({ Cliente,  detalle})

    await Clientesave.save()
  
    res.status(201).json(Clientesave);
}
const updateCliente = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedCliente =  await Cliente.findByIdAndUpdate(id,data )
    res.json(updatedCliente);
}
const deleteCliente =  async (req, res= response)=>{
    const {id} = req.params;
    await Cliente.findByIdAndDelete(id)
    res.json(`Se ha eliminado la información del cliente`);
}

 module.exports ={
    getCliente, 
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
 }