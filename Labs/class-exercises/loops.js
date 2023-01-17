// ------------- Ejercicio 1 (for loop): -------------
// Crea un for loop que cuente de 0 a 100 y en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.
let sum = 0;

for (let i = 0; i<=100; i++) { 
    sum += i;
}
console.log(`the total of the sum of the numbers from 1 to 100 is ${sum}`);




// ------------- Ejercicio 2 (for loop): -------------
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.
//way 1
let numbers = [1, 4154, 3, 5, 5, 8787, 6];
let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("Largest Number: " + max);
console.log("Smallest Number: " + min);

//way 2
let numbers2 = [1, 4154, 3, 5, 5, 8787, 6];
let maximum = numbers2[0];
let minimum = numbers2[0];
for (let value of numbers2){
    if(value > maximum) {
        maximum = value;
    }
    if (value < minimum) {
        minimum =value
    }

}
console.log("Largest Number: " + maximum);
console.log("Smallest Number: " + minimum);

// ------------- Ejercicio 3 (while loop): -------------
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

for (let i=2; i<=20; i +=2 ) {
    console.log(i);
}

let evenNumber = 2;

while(evenNumber <= 20) {
  console.log(evenNumber);
  evenNumber++;
}
// ------------- Ejercicio 4 (do while): -------------
//Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

//way 1
let numeroAdivinar = [5];
let numeroIngresado = [0];
let counter = 0;
do {
    numeroIngresado = [1,2,3,4,5,6,7,8,9,10][Math.floor(Math.random() * 10)];
    counter++;
} while (numeroIngresado !== numeroAdivinar);
console.log("Number of iterations made: " + counter);

// way 2
let numeroAdivinar2 = 5;
let numeroIngresado2 = 0;
let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
do{
  numeroIngresado2 = arrayDeNumeros[i]
  i++
} while ((numeroIngresado2!= numeroAdivinar2));
console.log(`El numero a adivinar era ${numeroAdivinar2} y se adivinó en ${i} intentos`);

// with javascript create a varfiable called numeroAdivinar with a value of 5 and another variable called numero ingresado with a value of 0. Use the loop do while to asign numeroIngresado a number form this array [1,2,3,4,5,6,7,8,9,10]. The loop must continue until numeroIngresado = numeroAdivinar. print the number of iterations made