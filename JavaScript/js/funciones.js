//Funciones en JavaScript

//FUNCIONES POR DECLARACIÓN
function nombre_appelido(nombre, apellido = "Perez") {
  //codigo de la funcion
  let nombre_completo = nombre + " " + apellido;
  return; //undefined
}

//Ejecutar o instanciar
nombre_appelido("Emiliano");

nombre_appelido("Laura", "Robledo");

//FUNCIONES POR EXPRESIÓN
let miFuncion = function suma() {
  let a = 10;
  let b = 20;
  return a + b;
};

miFuncion();

/* 
Arrow functions

() => {} 
*/

//Ejemplo
const saludo = () => {
  return "Hola Mundo";
};

//Si tiene una línea en el cuerpo de la función, puedo NO poner el return ni las { }
const saludo2 = () => "hola mundo";

// Si tengo 1 solo parametro, puedo obviar los paréntesis
const saludo3 = (texto) => texto + " hola mundo";

//Pasamos parámetros
const funcion = (a, b, c) => a + b + c;

// JS Vainilla = JS Puro

/* Diferencias entre VAR, LET y CONST */

//Ambitos de VAR
var msj = "hola mundo";

function miFuncion() {
  var hola = "hola";
}
console.log(hola); // error: hola is not defined

// ---------------
var saludar = "hola";
var flag = 4;

if (flag > 3) {
  var saludar = "Hola de nuevo";
}

console.log(saludar); // "Hola de nuevo"

//LET (ámbito de Bloque)
let saludar = "Hola";
let flag = 4;

if (flag > 3) {
  let hola = "Hola de nuevo";
  console.log(hola); // "Hola de nuevo"
}
console.log(hola); // hola is not defined

//LET puede modificarse, pero no volver a declararse

//Esto está OK
let saludar = "Hola";
saludar = "Hola de nuevo";

//Esto devuelve un ERROR
let saludar = "Hola";
let saludar = "Hola de nuevo"; // error: Identifier 'saludar' has already been declared

//Esto esta OK
let saludar = "Hola";

if (true) {
  let saludar = "Hola de nuevo";
  console.log(saludar); // "Hola de nuevo"
}

console.log(saludar); // "dice Hola"

//CONST (ámbito de bloque)

// Las variables declaradas con const mantienen valores constantes.
// const no puede modificarse ni volver a declararse

//Esto muestra un ERROR
const saludar = "Hola";
saludar = "Hola de nuevo"; // error: Assignment to constant variable.

//Esto muestra un ERROR
const saludar = "Hola";
const saludar = "Hola de nuevo"; // error: Identifier 'saludar' has already been declared
