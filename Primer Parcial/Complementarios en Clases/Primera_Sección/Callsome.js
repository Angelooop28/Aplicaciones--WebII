// Ejercicio donde podemos exportar alguna variable para mostrar en el lado del servidor
// Este script se encuentra  desestructurado para una mejor lógica

const { salute , functionToCall, variable }  = require('./callFunctionsOut');
const functions= require('./callFunctionsOut')



// let saluteResult= salute('John')

let saludateResult= functions.salute('Prueba de nombre')


console.log(saludateResult)
console.log(functionToCall( variable ,7,"sum")) ;