// ---------------- EJERCICIOS ----------------

// Ej. 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
let stringToLog = "    JavaScript is fun! ";
//1.-
console.log(stringToLog.length);// 23
//2.-
let substrings = stringToLog.trim().match(/.{1,7}/g).map(substring => 
    substring.toLowerCase());
console.log(substrings);// ['java', 'cript i', ' fun!']
//3.- 
console.log(stringToLog.trim());// 'JavaScript is fun!'
//4.- 
console.log(stringToLog.toUpperCase());// 'JAVASCRIPT IS FUN!'
//5.-
console.log(stringToLog.);// 'f'
//6.-
console.log(stringToLog.);// 5
//7.-
console.log(stringToLog.);// 15
//8.-
console.log(stringToLog.replace("JavaScript", "CSS"));// 'CSS is fun!'

// Ej. 2 Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
const original = "Hello world!";
let stringToChange = "Hello world!";
//1.- 
stringToChange = stringToChange.slice(0, 6);
console.log(stringToChange.endsWith("o")); // true
//2.- 

console.log(stringToChange.charAt(3)); // 'r'
//3.-

console.log(stringToChange.includes("hello")); // true
//4.-

console.log(stringToChange.lastIndexOf("o")); // 4
//5.- 

console.log(stringToChange.indexOf("w")); // -1