const mongoose = require("mongoose");

const gastoScchema = mongoose.Schema({
    idcliente: {type: String, required: true},
    idConcepto : {type:String, required: true},
    caracteristicas: {type: String},
    fecha : {type: String},
    hora : {type: Number},
    valortotal : {type: Number}
})

module.exports = mongoose.model('Gasto', gastoScchema);
