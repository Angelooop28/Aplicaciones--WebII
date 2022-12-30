
import{Gasto} from '../models'
import {GASTO} from '../interfaces'
import{Request,Response}from 'express'
import { gasto } from './index'

//Definir funciones
const Obtener_gasto=async(req:Request,res:Response)=>{
    //mas liviano await Producto.find().lean()
    const {limite='10',desde='0'}=req.query
    const query={estado:true};
    const [total,gasto]:[Number,GASTO[]]=await  Promise.all([
    Gasto.countDocuments(query),
    Gasto.find(query) 
    .skip(Number(desde))
    .limit(Number(limite))
    ])
    
    res.json({
        total,
        gasto
})
}
const Obtener_Gasto=async(req:Request,res:Response)=>{
    const{id}=req.params
    const producto:gasto|null=await Gasto.findById(id);
    res.json(producto)
}

const Crear_Gasto=async(req:Request,res:Response)=>{
    const{estado,...body}=req.body as gasto;
    const existeProducto=await Gasto.findOne({idcliente:body.idcliente})
    if(existeProducto){
        return res.status(400).json({
            message:`El producto ${body.nombre} ya existe!`
        });
    }
    const producto=new Gasto(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
//Se exporta las funciones que se creó
export{
    Obtener_gasto,
    Obtener_Gasto,
    Crear_Gasto
}