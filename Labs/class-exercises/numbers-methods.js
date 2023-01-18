// ---------------- EJERCICIOS ----------------

/*Ejercicio 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. 
Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
*/
console.log((300/30).toFixed(0));
/*Ejercicio 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000ff sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff. 
*/
// Ejemplo color -> #0000ff -> 00->  R: 00 -> g: ff -> b => RGB

let colorR = 0;
let colorG = 0;
let colorB = 255;

colorR +=33;
colorG +=66;
colorB +=55;

colorB -=255;
console.log(colorR, colorG, colorB);
colorR = colorR.toString(16);
colorG = colorG.toString(16);
colorB = colorB.toString(16);

console.log(colorR, colorG, colorB);

let newColor = "#" + colorR + colorG+ colorB;
console.log(newColor);