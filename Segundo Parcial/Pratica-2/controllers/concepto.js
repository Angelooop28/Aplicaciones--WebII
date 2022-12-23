const { response, json, request } = require('express');
const Nota = require('../models/concepto');



const gets = async (req, res= response)=>{
        const concepto =await  concepto.find();
        return res.json({concepto})
}


const getConcepto = async (req=request, res= response)=>{
    const {id} = req.params
    const Concepto =  await Concepto.findById(id)
    res.json(Concepto);
}

const createConcepto = async(req=request,res=response)=>{
    const { Concepto,  detalle } =  req.body;
    
    const Conceptosave = new concepto({ Concepto,  detalle})

    await Conceptosave.save()
  
    res.status(201).json(Conceptosave);
}
const updateConcepto = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedConcepto =  await Concepto.findByIdAndUpdate(id,data )
    res.json(updatedConcepto);
}
const deleteConcepto =  async (req, res= response)=>{
    const {id} = req.params;
    await Concepto.findByIdAndDelete(id)
    res.json(`Se ha eliminado los datos del concepto`);
}

 module.exports ={
    getConcepto, 
    getConcepto,
    createConcepto,
    updateConcepto,
    deleteConcepto
 }