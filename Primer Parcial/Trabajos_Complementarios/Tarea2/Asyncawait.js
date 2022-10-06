const clientes=[
    {
        id: 1,
        nombre: "Edward",
        apellido: "Espinoza",
        identificacion: "1314683010",
        idconcepto: 1
    },
    {
        id: 2,
        nombre: "Mike",
        apellido: "Bello",
        identificacion: "1316984310",
        idconcepto: 2
    },
    {
        id: 3,
        nombre: "Karla",
        apellido: "Mero",
        identificacion: "1309856423",
        idconcepto: 3
    },
    {
        id: 4,
        nombre: "Valeska",
        apellido: "Solorzano",
        identificacion: "130239087",
        idconcepto: 4
    },
    {
        id: 5,
        nombre: "Nicole",
        apellido: "Holguin",
        identificacion: "1985642300",
        idconcepto: 5
    },
]
const conceptos=[
    {
        id: 1,
        producto: "Teclado Mecánico", 
        precio: "59.99", 
        descripcion: "Resistencia y Precisión"
    },
    {
        id: 2, 
        producto: "Cable Hdmi", 
        precio: "10.00",
        descripcion: "Conexión Digital"
    },
    {
        id: 3, 
        producto: "Audifonos", 
        precio: "19.99", 
        descripcion: "Inalambrico"
    },
    {
        id: 4, 
        producto: "Microfono", 
        precio: "59.99",
        descripcion: "Cargable e Inalambrico"
    },
    {
        id: 5, 
        producto: "Monitor", 
        precio: "210.00", 
        descripcion: "24 Pulgadas 8k"
    },
]

const gasto=[
    {
        id: 1,
        idcliente: "C1", 
        caracteristicas: "Teclado Mecanico",
        fecha: "27/09/2022", 
        hora: "14:00pm", 
        valor: "59.99"
    },
    {
        id: 2, 
        idcliente: "C2",
        caracteristicas: "Cable Hdmi", 
        fecha: "28/09/2022", 
        hora: "09:30am", 
        valor:"10.00"
    },
    {
        id: 3, 
        idcliente: "C3", 
        caracteristicas: "Audifonos", 
        fecha: "29/09/2022", 
        hora: "08:00am", 
        valor:"19.99"
    },
    {
        id: 4, 
        idcliente: "C4", 
        caracteristicas: "Microfono", 
        fecha: "30/09/2022", 
        hora: "16:00pm", 
        valor:"59.99"
    },
    {
        id: 5, 
        idcliente: "C5", 
        caracteristicas: "Monitor", 
        fecha: "31/09/2022", 
        hora: "18:00pm", 
        valor:"210.00"
    },
]

async function findclienteForId(id){
    const cliente = clientes.find((cliente)=> cliente.id===id );
    if (!cliente)
    {
        const error =  new Error();
        error.message="el cliente no esta registrado";
        throw error;
    }
    return cliente;

}

async function findconceptoForId(id){
    const concepto =  conceptos.find((concepto)=>{
        return concepto.id===id;
    });
    if (!concepto)
    {
        const error = new Error();
        error.message="No encontramos el producto";
        throw error;
    }
    return concepto;
}
(async ()=>{
    try
    {
        const cliente  =   await findclienteForId(1);
        const concepto =   await  findconceptoForId(cliente.idconcepto);
        cliente.concepto = concepto;
        console.log(cliente)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();