function saludar() {
    console.log("¡Bienvenidxs al Simulador de gastos mensuales!");
}

saludar()

let primerIngreso= true;
let nombreIngresado;

do{
    if (primerIngreso)
    {
        nombreIngresado = prompt("Ingrese ID");
        primerIngreso = false;
    }
    else
    {
        alert("El ID debe contener el carácter '@'. Por favor, ingréselo nuevamente.");
        nombreIngresado = prompt("Ingrese ID");
    }
}
while(!nombreIngresado.includes("@"));


function password() {
    console.log("¡Bienvenidxs al Simulador de gastos mensuales!");
}

password()

let passwordIngresado = prompt("Ingrese Password")


function registro () {
    console.log("Te registraste correctamente");
}

registro()

let registroCorrecto =alert("Te registraste correctamente")

function info (){
    console.log("Estos son tus datos de Usuario");
}

info()

let infoDeUsuario =alert("Tus datos son" + " " + "Nombre de usuario:" + " " + nombreIngresado + " " + "Password:" + " " + passwordIngresado)


function calculateBudget() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(income) || isNaN(expenses)) {
        alert("Ingresa números válidos para los ingresos y los gastos.");
        return;
    }

    const budget = income - expenses;
    const resultElement = document.getElementById("result");

    if (budget >= 0) {
        resultElement.textContent = `Tu presupuesto mensual es positivo: $${budget.toFixed(2)}`;
    } else {
        resultElement.textContent = `Tu presupuesto mensual es negativo: $${budget.toFixed(2)}`;
    }
}
