const { response } = require('express');
const { Gasto } = require('../models')


const getgasto= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, Gasto ] = await Promise.all([
        Gasto.countDocuments(query),
        Gasto.find(query)
        .populate('category','name status')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      products
    })
    
}
const getGasto= async (req, res =  response)=>{
    const {id} = req.params
    const gasto=  await Gasto.findById(id).populate('category');
    res.json(gasto);
}
const createGasto= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existGasto =  await Gasto.findOne({name: body.name})

    if (existGasto)
    {
        return res.status(400).json({
            msg:`El gasto ${ existeGasto.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const gasto = new Gasto(data);

    const newgasto =  await gasto.save();
    res.status(201).json(newgasto);
}
const updateGasto= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedGasto =  await Gasto.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedGasto);
}
const deleteGasto= async (req, res = response)=>{
    const {id} = req.params;
    const deletedGasto =  await Product.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedGasto);
}

module.exports = {
    getgasto,
    getGasto,
    createGasto,
    updateGasto,
    deleteGasto
};