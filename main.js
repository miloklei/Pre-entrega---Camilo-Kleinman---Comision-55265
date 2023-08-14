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
let ListaGastos = [];
let total = 0;
let mayorGasto = new Gasto();


function saludar() {
    console.log("¡Bienvenidxs al Simulador de gastos mensuales!");
}

function agregar(titulo, descripcion, monto){
    if(titulo != "" || descripcion != "" || monto != "" ){
    let nuevoGasto = new Gasto(titulo, descripcion, monto);
    ListaGastos.push(nuevoGasto);
    limpiar();
    alert("Gasto ingresado.");
    }
    else{
        alert("Dato invalido")
    }
}

function guardarGastosEnLocalStorage() {
    localStorage.setItem("gastos", JSON.stringify(ListaGastos));
}

function limpiar(){
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = parseInt(0);
}

function finalizar(){
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


saludar()
pedirUsuario();
password()
info();





