class Gasto{
    constructor(titulo, descripcion, monto){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.monto = parseInt(monto);
    }    
}

let primerIngreso= true;
let nombreIngresado;
let passwordIngresado;
let ListaGastos;
let total = 0;
let mayorGasto = new Gasto();
let dolarblue;

function eventos(){
    document.getElementById("agregar").addEventListener("click", agregar);
    document.getElementById("finalizar").addEventListener("click", finalizar);
}

function recuperarLista(){
    ListaGastos = JSON.parse(localStorage.getItem("Gastos"));
    if ( ListaGastos == null){
        ListaGastos = [];
    }
}

function agregar(){
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let monto = document.getElementById("monto").value;
    if(titulo != "" || descripcion != "" || monto != ""){
    let nuevoGasto = new Gasto(titulo, descripcion, monto);
    ListaGastos.push(nuevoGasto);
    limpiar();
    Swal.fire({
        title: 'Gasto Ingresado',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    else{
        Swal.fire({
            title: 'Dato Invalido',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
}

function guardarListaEnLocalStorage(nombre, lista) {
    localStorage.setItem(nombre, JSON.stringify(lista));
}

function limpiar(){
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}

function listar(){
    ListaGastos.forEach ((g) =>{
        document.getElementById("listita").innerHTML += '<tr><td>' + g.titulo + '</td><td>' + g.descripcion + '</td><td>' + g.monto + '</td></tr>';
    })
}

function llamarApiDolar(){
    fetch('https://api.bluelytics.com.ar/v2/latest',{
    method: "GET",
    headers: {'Content-type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Request-Method': 'GET'}})
    .then(response => response.json())
    .catch(err => console.log('Solicitud Fallida', err));
}

async function getDolar(data = {}){
    const response = await fetch('https://api.bluelytics.com.ar/v2/latest',{
        mehtod: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            "Content-Type": "application/json"}   
    });
    
    dolarblue = response.json();
}

function finalizar(){
    guardarListaEnLocalStorage("Gastos", ListaGastos);
    const gastosGuardados = JSON.parse(localStorage.getItem("gastos"));
    
        if (ListaGastos.length > 0){
        document.getElementById("botones").style.display = "none";
        document.getElementById("resultados").style.display = "";
    
        sumar();
        encontrarMayorGasto();
        document.getElementById("gastosTotales").textContent = total;
        document.getElementById("mayorGasto").textContent = "El mayor gasto es " + mayorGasto.titulo + "- " + mayorGasto.descripcion + ", el monto es de: " + mayorGasto.monto;
        }
        else {
            alert("Ningun gasto fue ingresado");
        }
        listar();
    }

function sumar(){
    ListaGastos.forEach((gasto) => total += gasto.monto);
    }

function encontrarMayorGasto(){
    mayorGasto.monto = 0;
    ListaGastos.forEach ((gasto) => {
        if(gasto.monto > mayorGasto.monto)
        { mayorGasto.monto = gasto.monto;
        mayorGasto.titulo = gasto.titulo;
        mayorGasto.descripcion = gasto.descripcion}
    });
}  

document.getElementById("resultados").style.display = "none";

eventos();
recuperarLista();
getDolar();



