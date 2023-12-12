// Comentario de una línea

/* 
Este es un 
comentario multlínea
*/

//var mensaje = "Hola Mundo....desde un archivo externo!!!";

//alert(mensaje);

//console.log(mensaje);

var dato = prompt("Ingrese un texto");

console.log(dato.length);

/*
VARIABLES

// var/let/const nombre_variable
var edad; // declaración de variable
edad = 20; // asignando un valor a la variable

let nombre = "Laura";
let apellido = "Perez";
let listadoClientes;
let asistencias_estudiantes;

var palabra = 'esta es una "malapalabra" ';

nombre = 30;
*/

// CONDICIONALES

let a = 10;
let b = 20;

if (a >= b) {
  //console.log("La condición es Verdadera")
} else {
  if (a == b) {
    // instrucción
  } else {
    // otra instrucción
  }
  alert("Es Falso");
}

/*
Operadores de comparación:

> Mayor
< Menor
>= Mayor o igual
<= Menor o igual
== Igual
!= Distinto


OPERADORES LÓGICOS

!  ----> NOT (Niega la conficiñon)
&& ----> AND (Es TRUE cuando ambas condiciones son Verdaderas)
|| ----> OR (Es TRUE cuando alguna de las condiciones es Verdadera )


*/

if (true || (false && true)) {
  console.log("Ejercicio muy bueno que propuso Uriel");
}

if (a == 10) {
  console.log("Es 10");
} else {
  console.log("No es 10");
}

// OPERADOR TERNARIO  (condicion)?true:false;

let msj = a == 10 ? "es 10" : null;

console.log(a == 10 ? "es 10" : "No es 10");
