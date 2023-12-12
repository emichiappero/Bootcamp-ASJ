//Nombre de etiqueta
let parrafos = document.getElementsByTagName("p");

parrafos[0]; //lorem
parrafos[1]; //Hola

//Name
let elem = document.getElementsByName("edad"); //devuelve colección de objetos

alert(elem[0].value); //obtenemos lo ingresado por el usuario

//ID
let elem2 = document.getElementById("boton");

//Class
let elem3 = document.getElementsByClassName("mensaje");

//QuerySelector
let elem4 = document.querySelector(".mensaje");

// clases = .
// id = #

let enlace = document.getElementById("link");
console.log(enlace.href);
enlace.style.margin;

let img = document.getElementsByTagName("img");
img[0].style.border;

let p1 = document.getElementById("parrafo1");
alert(p1.className);

//Selecciono el elemento
let btn_submit = document.getElementById("enviar");

//EventListener = Escuchador de eventos
btn_submit.addEventListener("click", function () {
  //Obtengo el "value" ingresado por el usuario en elemento con ID=txt
  let a = document.getElementById("txt").value;
  console.log(a);
});
