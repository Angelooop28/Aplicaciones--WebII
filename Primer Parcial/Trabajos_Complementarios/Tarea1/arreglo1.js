// Arreglo utilizando for each en el tema gasto diarios

const RegistroCliente = [
    {Id: '001', Nombre: 'Edward...', Apellido: 'Espinoza', Identificacion: '1314683010'},
    {Id: '002', Nombre: 'Mike...', Apellido: 'Bello' , Identificacion: '1316984310'},
    {Id: '003', Nombre: 'Karla...', Apellido: 'Mero', Identificacion: '1309856423'},
    {Id: '004', Nombre: 'Valeska....', Apellido: 'Solorzano', Identificacion: '130239087'},
    {Id: '005', Nombre: 'Nicole....', Apellido: 'Holguin', Identificacion: '1985642300'},
    ];
    console.log("--- Método FOR ---")
    for (const recli of RegistroCliente) {
        console.log(recli);
      }

    console.log("\n--- Método FOR EACH ---")
    RegistroCliente.forEach(recli => console.log(recli));

    console.log("\n--- Método DO WHILE ---")
    let x = 0;
    do{
        console.log(RegistroCliente[x])
        x++;
    }while(x < RegistroCliente.length);

    console.log("\n--- Método WHILE ---")
    let y = 0;
    while (y<RegistroCliente.length){
        console.log(RegistroCliente[y]);
        y++;
    }
    