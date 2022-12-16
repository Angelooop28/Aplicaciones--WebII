"use strict";
//importamos moongose como parte de la base de datos que se va a usar
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gasto = void 0;
const mongoose_1 = require("mongoose");
const GastoSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, `El id es obligatorio`],
        unique: true
    },
    idcliente: {
        type: String,
        required: [true, `El id del cliente es obligatorio para ver el historial de gasto`],
        unique: true
    },
    idconcepto: {
        type: String,
        required: [true, `Debe existir un concepto del gasto`],
        unique: true
    },
    caracteristicas: {
        type: String,
        required: [true, `Las caracterisiticas es obligatoria para ver que informacion tiene ese cliente`],
        unique: true
    },
    valortotal: {
        type: Number,
        default: true,
        required: true,
    }
});
const Gasto = (0, mongoose_1.model)('Gasto', GastoSchema);
exports.Gasto = Gasto;
