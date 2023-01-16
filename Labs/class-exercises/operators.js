
// Operators 1
// Declara una variable sin asignarle ningún valor. Después, en otra línea, asígnale un valor numérico. Finalmente, haz una reasignación para que a dicha variable se le sume 1. Haz esta reasignación de tres maneras distintas. Recuerda usar console.logs cada vez que quieras comprobar tu progreso.

let opt1 = undefined;
console.log(opt1); // undefined
opt1 = 5
console.log(opt1);  // 6
opt1 += 1; 
console.log(opt1); // 7
opt1 = opt1 +1;
console.log(opt1); // 8
opt1 = opt1++;


// Operators 2
// Declara dos variable, una con el valor 3 (number) y la otra con el valor "3" (string). Haz un console.log que compare si las dos son iguales y devuelva verdadero. Haz otro que las compare igual y devuelva falso. Haz lo mismo pero comprobando si NO son iguales. Haz un console.log que compruebe si la primera es mayor o igual que 7. Finalmente, haz un console.log que compruebe si las dos variables son estrictamente iguales O si la primera variable es menor o igual a 3.



//case 1
console.log (num1 == str); // true
//case 2
console.log (num1 === str); //false
//case 3
console.log ( num1 != str); // false
// case 4
console.log(num1 >= 7); // false
//case 5
console.log(num1 === str || num1 <= 3); // false
