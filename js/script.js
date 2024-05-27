//String, Boolean y funciones nativas
alert("Está ingresando a la sección Alumnos")
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
console.log("Bienvenid@", nombreCompleto);
let confirmarIngreso = confirm("¿Quiere que el sitio lo redireccione a la sección de Log In?")

// Number y concatenación
let añoActual = prompt("Ingrese año actual");
let añoDeNacimiento = prompt("Ingrese su año de nacimiento");
let edad = añoActual - añoDeNacimiento;


//Aritmética - prueba con cursos y valores
let curso1 = 1000;
let curso2 = 1500;
let curso3 = 2000;

let alumnos2 = 2;
let alumnos4 = 4;
let alumnos6 = 6;

let ingresoCurso1 = curso1 * alumnos2;
let ingresoCurso2 = curso2 * alumnos4;
let ingresoCurso3 = curso3 * alumnos6;

let descuento4alumnos = 500
let descuento6alumnos = 1000

let curso2Total = ingresoCurso2 - descuento4alumnos;
let curso3Total = ingresoCurso3 - descuento6alumnos;

let ganaciaTotal = ingresoCurso1 + curso2Total + curso3Total;
let cantidadProfes = 3;
let gananciaProfe = gananciaTotal / cantidadProfes;

