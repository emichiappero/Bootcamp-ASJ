//Switch

let a = "a";

switch (a) {
  case "a":
    //mi código
    //mi código
    break;

  case "b":
    //mi código
    break;

  case "c":
    // mi código
    break;

  case "d":
    // mi código
    break;

  default:
    //ejecutar este código en caso de que NO cumpla con algunos de los cases anteriores
    break;
}

let num = parseInt(prompt("Ingrese un número"));

switch (num) {
  default:
    alert("Por favor ingrese un valor correcto");
    break;

  case 10:
  case 30:
    alert("El numero ingresado es 10 o 30");
    break;

  case 20:
    alert("El numero ingresado es 20");
    break;

  case 5:
    alert("Es 5");
    break;
}

// par o impar

/*
Ejercicio 1

Usando la estructura switch(), creá un programa en el que, si un usuario ingresa
"casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

En caso de que la palabra sea distinta a la esperada, 
mostrale un mensaje que le informe que la palabra ingresada es incorrecta.
*/

/*
Ejercicio 2
Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

- Muy Mala.
- Mala.
- Mediocre.
- Buena.
- Muy buena.

Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.
Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

Cuando el usuario haya valorado la película, agradecele su visita.
*/
