// SE CREA ENTIDAD GASTO   (TIPO TRANSACCIONAL) 
export interface GASTO{
    id: {type: String ,required: true},
    idcliente: {type: String ,required: true},
    idconcepto: {type: String ,required: true},
    caracteristicas: String,
    valortotal: Number,
}