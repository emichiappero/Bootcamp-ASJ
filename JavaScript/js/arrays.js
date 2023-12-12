//Array

let dias = ["Lu", "Ma", "Mi"];

dias[1];
dias[2];
dias[3]; //Jueves
dias[4];
dias[5];
dias[6];

//Loops, bucles, ciclos de repetición
for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}

//array.length = cantidad de elementos del array

let cont = 0;
while (cont < dias.length) {
  console.log(dias[cont]);
  cont++;
}

let cont = 0;
do {
  console.log(dias[cont]);
  cont++;
} while (cont < dias.length);
