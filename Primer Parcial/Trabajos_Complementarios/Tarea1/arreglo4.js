const Cliente=[
    {
        id: 001,
        Nombre: "Edward",
        Apellido: "Espinoza",
        Identificacion: "1314683010"
    },
    {
        id: 002,
        Nombre: "Mike",
        Apellido: "Bello",
        Identificacion: "1316984310"
    },
    {
        id: 003,
        Nombre: "Karla",
        Apellido: "Mero",
        Identificacion: "1309856423"
    },
    {
        id: 004,
        Nombre: "Valeska",
        Apellido: "Solorzano",
        Identificacion: "130239087"
    },
    {
        id: 005,
        Nombre: "Nicole",
        Apellido: "Holguin",
        Identificacion: "1985642300"
    },
]
const Concepto=[
    {
        Id: 001,
        Producto: "Teclado Mecánico", 
        Precio: "59.99", 
        Descripcion: "Resistencia y Precisión"
    },
    {
        Id: 002, 
        Producto: "Cable Hdmi", 
        Precio: "10.00",
        Descripcion: "Conexión Digital"
    },
    {
        Id: 003, 
        Producto: "Audifonos", 
        Precio: "19.99", 
        Descripcion: "Inalambrico"
    },
    {
        Id: 004, 
        Producto: "Microfono", 
        Precio: "59.99",
        Descripcion: "Cargable e Inalambrico"
    },
    {
        Id: 005, 
        Producto: "Monitor", 
        Precio: "210.00", 
        Descripcion: "24 Pulgadas 8k"
    },
]
const Gasto=[
    {
        Id: 001,
        Idcliente: "C1", 
        Idconcepto: "Teclado Mecanico",
        Fecha: "27/09/2022", 
        Hora: "14:00pm", 
        Valor: "59.99"
    },
    {
        Id: 002, 
        Idcliente: "C2",
        Idconcepto: "Cable Hdmi", 
        Fecha: "28/09/2022", 
        Hora: "09:30am", 
        Valor:"10.00"
    },
    {
        Id: 003, 
        Idcliente: "C3", 
        Idconcepto: "Audifonos", 
        Fecha: "29/09/2022", 
        Hora: "08:00am", 
        Valor:"19.99"
    },
    {
        Id: 004, 
        Idcliente: "C4", 
        Idconcepto: "Microfono", 
        Fecha: "30/09/2022", 
        Hora: "16:00pm", 
        Valor:"59.99"
    },
    {
        Id: 005, 
        Idcliente: "C5", 
        Idconcepto: "Monitor", 
        Fecha: "31/09/2022", 
        Hora: "18:00pm", 
        Valor:"210.00"
    },
]


for (const iterator of Cliente) {
    conceptoAux= Concepto.find(ele=> ele.id===iterator.Idconcepto)
    console.log(`Cliente ${iterator.Nombre}  Concepto: ${conceptoAux.Id} `);
}