function saludar() {
    console.log("¡Bienvenidxs a Adopta un michi!");
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
    console.log("¡Bienvenidxs a Adopta un michi!");
}

password()

let passwordIngresado = prompt("Ingrese Password")
alert("El Password ingresado es " + passwordIngresado)

function registro () {
    console.log("Te registraste correctamente");
}

registro()

let registroCorrecto =alert("Te registraste correctamente")

function info (){
    console.log("Estos son tus datos de Usuario");
}

info()

let infoDeUsuario =alert("Tus dastos para el ID son" + " " + "Nombre de usuario:" + " " + nombreIngresado + " " + "Password:" + " " + passwordIngresado)