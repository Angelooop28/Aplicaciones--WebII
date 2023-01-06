import './style.css'
import axios from 'axios'
import { IResGasto, Gasto } from './interfaces/IGasto';
const httpAxios =  axios.create({
  baseURL:'http://localhost:4000/v1/gasto/api'
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="id">id</label><input id="id"/>
<label for ="idcliente">idcliente</label><input id="iscliente"/>
<label for ="idconcepto">idconcepto</label><input id="idconcepto"/>
<label for ="caracteristica">caracteristica</label><input id="caracteristica"/>
<label for ="valortotal">valortotal</label><input id="valortotal"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!
const idcliente = document.querySelector<HTMLInputElement>('#idcliente')!
const idconcepto = document.querySelector<HTMLInputElement>('#idconcepto')!
const caracteristica = document.querySelector<HTMLInputElement>('#caracteristica')!
const valortotal = document.querySelector<HTMLInputElement>('#valortotal')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  id.value=""
  idcliente.value=""
  idconcepto.value=""
  caracteristica.value=""
  valortotal.value=""
})
query.addEventListener('click', async ()=>{
  const respgastos:IResGasto 
  =  await (await httpAxios.get<IResGasto>('gasto')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { gasto } = respgastos;
    console.log(respgastos)

    for (const product of gasto)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${product.id}" >${product.idcliente}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${product.caracteristica}`
      const celda3= row.insertCell()
      celda3.innerHTML=`${product.valortotal}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const Gasto:Gasto 
          =  await (await httpAxios.get<Gasto>(`gasto/${idx}`)).data;
          idcliente.value= Gasto.idcliente;          
          idconcepto.value= Gasto.idconcepto;  
          caracteristica.value= Gasto.caracteristica;  
          id.value= Gasto.id!;  
           
      })
    })

  
  

})
save.addEventListener('click',async ()=>{
  const data:Gasto = {
    idcliente:idcliente.value,
    idconcepto:  idconcepto.value,
    caracteristica: caracteristica.value,
    valortotal: valortotal.value,
    id: id.value,
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Gasto = await (await httpAxios.put<Gasto>(`Gasto/${id.value}`, data)).data
    console.log(resp)
    console.log(`las caracteristicas ${resp.idcliente} fueron modificadas con éxito`);
    
    return;
  }
  try {
    const resp: Gasto=  await (await httpAxios.post<Gasto>(`gasto`, data)).data
    console.log(`El gasto del cliente${resp.idcliente} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})