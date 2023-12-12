while (condicion) {
  //ejecuta este código
}

let num = 0;
while (num <= 3) {
  console.log(num);
  num++;
  if (num == 2) {
    break;
  }
  //sigue código
}

while (condicion) {
  //ejecuta este código
}

do {
  //codigo
} while (condicion);

// -----------------

for (inicio; condicion; salto) {}

let i;
for (i = 10; i >= 1; i--) {
  console.log("Iteramos i: " + i);
}
