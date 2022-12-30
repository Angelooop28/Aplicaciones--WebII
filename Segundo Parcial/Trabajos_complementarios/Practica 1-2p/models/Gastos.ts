//importamos moongose como parte de la base de datos que se va a usar

//Importamos Gasto de la carpeta de interfaces
import mongoose,{Mongoose} from "mongoose";
import { Schema, model } from "mongoose";
import { gasto } from "../";
import { GASTO } from "../interfaces";

const GastoSchema: mongoose.
Schema = new Schema<GASTO>({
    id:{
        type: String,
        required: [true, `El id es obligatorio`],
        unique: true
    },
    idcliente: {
        type: String,
        required:[true, `El id del cliente es obligatorio para ver el historial de gasto`],
        unique: true
    },
    idconcepto: {
        type: String,
        required: [true, `Debe existir un concepto del gasto`],
        unique: true
    },
    caracteristicas:{
        type: String,
        required:[true, `Las caracterisiticas es obligatoria para ver que informacion tiene ese cliente`],
        unique: true
    },
    valortotal: {
        type: Number,
        default: true,
        required: true,
    }
});
const Gasto: mongoose.Model<GASTO> = model<GASTO>
('Gasto', GastoSchema);

export{
    Gasto
}
