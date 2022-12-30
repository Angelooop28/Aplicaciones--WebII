const { model, Schema } = require('mongoose');

const ConceptoSchema = Schema(   {
    id:{
        type: String,
        required: [ true, 'El id del concepto debe ser requerido'],
       
    },
    descripcion:{
        type: String,
        required: [ true, 'El concepto tiene que tener una descripcion '],
       
    },
}
);

module.exports = model('Concepto', ConceptoSchema );