// Arreglo utilizando for of para el tema gastos diarios

const ConceptoCliente = [
    {Id: '001', Producto: 'Teclado Mecánico...', Precio: '59.99', Descripcion: 'Resistencia y Precisión'},
    {Id: '002', Producto: 'Cable Hdmi...', Precio: '10.00' , Descripcion: 'Conexión Digital'},
    {Id: '003', Producto: 'Audifonos...', Precio: '19.99', Descripcion: 'Inalambrico'},
    {Id: '004', Producto: 'Microfono...', Precio: '59.99', Descripcion: 'Cargable e Inalambrico'},
    {Id: '005', Producto: 'Monitor...', Precio: '210.00', Descripcion: '24 Pulgadas 8k'},
    ];
    for (const concli of ConceptoCliente) {
        console.log(concli);
      }
