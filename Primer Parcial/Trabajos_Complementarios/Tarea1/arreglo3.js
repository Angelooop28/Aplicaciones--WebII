// Arreglo utilizando for of para el tema gastos diarios

const GastoCliente = [
    {Id: '001', Idcliente: 'C1', Idconcepto: 'Teclado Mecanico', Fecha: '27/09/2022', Hora: '14:00pm', Valor:'59.99'},
    {Id: '002', Idcliente: 'C2', Idconcepto: 'Cable Hdmi' , Fecha: '28/09/2022', Hora: '09:30am', Valor:'10.00'},
    {Id: '003', Idcliente: 'C3', Idconcepto: 'Audifonos', Fecha: '29/09/2022', Hora: '08:00am', Valor:'19.99'},
    {Id: '004', Idcliente: 'C4', Idconcepto: 'Microfono', Fecha: '30/09/2022', Hora: '16:00pm', Valor:'59.99'},
    {Id: '005', Idcliente: 'C5', Idconcepto: 'Monitor', Fecha: '31/09/2022', Hora: '18:00pm', Valor:'210.00'},
    ];
    for (const gasto of GastoCliente) {
        console.log(gasto);
      }