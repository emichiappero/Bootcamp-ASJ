let productos = [
  { nombre: "Producto 1", precio: 1234, imagen: "imagen.png" },
  { nombre: "Producto 2", precio: 3445, imagen: "imagen2.png" },
];

let btn_save = document.getElementById("guardar");
let btn_get = document.getElementById("recuperar");

let div = document.getElementById("div_datos");

let mis_productos;

btn_save.addEventListener("click", () => {
  localStorage.setItem("carrito", JSON.stringify(productos));
});

btn_get.addEventListener("click", () => {
  mis_productos = JSON.parse(localStorage.getItem("carrito")); //recupero los datos guardados en localStorage y lo convierto a objeto

  let listado = document.createElement("ul");
  for (let i = 0; i < mis_productos.length; i++) {
    //console.log(mis_productos[i]);
    let li = document.createElement("li"); //Creo un elemento HTML "li" por cada producto
    let li_texto = document.createTextNode(mis_productos[i].nombre); //creo un nodo texto con el nombre del producto
    li.appendChild(li_texto); //agrego el nombre del producto dentro del "li"
    listado.appendChild(li); //agrego el item en la lista
  }
  div.appendChild(listado);
});

/***********************/
//MODIFICANDO ELEMENTOS
/***********************/

//Creación
document.createElement("tag"); // crea un elemento "tag"
document.createTextNode("value"); // crea un elemento textNode (texto)

//Insertando elementos
node.append(hijo); // inserta el hijo al final del nodo padre
node.prepend(hijo); // inserta el hijo al comienzo del nodo padre
node.before(hermano); // inserta el hermano antes del nodo
node.after(hermano); // inserta el hermano después del nodo
node.replaceWith(otroNodo); // reemplaza a nodo con otroNodo

//Eliminación
node.remove(); // elimina el nodo

//Clases
elem.classList.add("clase"); // agrega/quita una clase
elem.classList.toggle("clase"); // agrega la clase sino existe, si existe la elimina
elem.classList.contains("clase"); // chequea si existe la clase, retorna true/false

//Atributos
div.hasAttribute("nombreAtributo"); //chequea si el elemento tiene un atributo
div.getAttribute("nombreAtributo"); //devuelve el valor del atributo
div.setAttribute("atributo", "valor"); //setea un atributo con su valor
div.removeAttribute("atributo"); //elimina el atributo
