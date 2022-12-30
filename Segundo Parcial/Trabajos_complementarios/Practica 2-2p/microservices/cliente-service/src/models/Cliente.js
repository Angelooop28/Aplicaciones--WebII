const { model, Schema } = require('mongoose');

const ClienteSchema = Schema(   {
    id:{
        type: String,
        required: [ true, 'El id del cliente debe ser requerido'],
       
    },
    nombre:{
        type: String,
        required: [ true, 'El nombre del cliente debe ser requerido'],
    },
    apellido:{
        type: String,
        required: [ true, 'El apellido del cliente debe ser requerido'],
    },
    identificacion :{
        type: String,
        required: [ true, 'El identificacion del cliente debe ser requerido'],
    },
}
);

module.exports = model('Cliente', ClienteSchema );
