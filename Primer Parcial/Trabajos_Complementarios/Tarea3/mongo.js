// una vez instalada la libreria de mongodb procedemos hacer la conexion
// npm install mongoose
// conexion con mongoose
const  mongoose = require('mongose');
const conexion = "mongodb+srv://Edward:<password>@cluster0.nlizucf.mongodb.net/?retryWrites=true&w=majority";

 //creación de la función async para el manejo de datos
const pedirGastos = async () => {
    const estadoConexion = await mongoose.connect(conexion); 
//creación del modelo para cliente
    const cliente = mongoose.model("cliente", { 
        id: String,
        nombre: String,
        apellido: String,
        identificacion: String
    });

    //creación del modelo para concepto
    //concepto contendra una refrencia con cliente.
    const concepto = mongoose.model("concepto", {
        idcliente: {
            type: mongoose.Types.ObjectId,
            ref: "cliente"
        },
        producto: String,
        precio: String,
        descripcion: String
    });
    //creación del modelo servicios
    const servicios = mongoose.model("servicios", {
        nombre: String
    });
    //creación del modelo gasto
    const gasto = mongoose.model("gasto", {
        id: String,
        caracteristica: String,
        fecha: String,
        hora: String,
        valor: Number,
        servicios: [{
            servicio: {//creación de un atributo que almacenará todos los gastos de un cliente, con su respectiva relaciones
                type: mongoose.Schema.Types.ObjectId,
                ref: "servicios"
            }
        }]
    });
    const pago = mongoose.model("pago", {//creación del modelo
        idcliente: {
            type: mongoose.Types.ObjectId, 
            ref: "cliente"
        },
        idconcepto: {
            type: mongoose.Types.ObjectId,
            ref: "concepto"
        },
        idgasto: {
            type: mongoose.Types.ObjectId,
            ref: "gasto"
        },
        fecha: String,
        
        estado: Boolean
    });
    const newclient = new cliente({//prueba. crendo una colección en cliente
        id: "1",
        nombre: "Edward",
        apellido: "Espinoza",
        identificacion: "1314683010"
    });
    const newconcep = new concepto({ //Crear atributos para concepto
        idcliente:newclient._id ,
        producto: "Laptop msi",
        precio: "2000",
        descripcion: "negro mate",
    });
    
    const saveconcepto = await newconcep.save();
    const savecliente = await newclient.save();
    console.log(await cliente.find()); 
    console.log(await concepto.find()) 

}
pedirGastos()