// conditional using else-if at the end to double chek the age 

const drinkingAge = parseInt(prompt("Hey do you want to buy alcohol? Please show me your ID")); // parseInt is native to javascript 

if(drinkingAge < 18){
    console.log("Sorry kid, you are too young to enjoy this, go home please before we get into trouble...");
} else if (drinkingAge > 18 && drinkingAge < 40) {
    console.log("Enjoy your drink, just remember to drink one at a time!");
} else if (drinkingAge >= 40) {
    console.log("Enjoy your drink, just remember that at this age hangovers are way too real!!! We offer paracetamol with our drinks :)");
}



//for loop
// for (initialExpression, conditionExpression, incrementExpression) {body of loop}
//prog para imprimir x cantidad de veces "un string en la consola"
console.log("- FOR LOOP:");
//variable to iterate x amount of timer in our condition
const forLoopExample = 10; 
//loop
for(let iterator = 1; iterator <= forLoopExample; iterator++){
console.log("this is an example of for loop");
}


//for loop array of cities

console.log("-------------");
console.log("_ FOR LOOPS - USING AN ARRAY OF CITIES:");

const cities = ["barcelona", "tokyo", "chicago", "helsinki", "mordor"];
for (let i = 0; i <cities.length; i++){
    console.log(`_. ${cities[i]}`);
}
console.log("-------------");


// FOR LOOP  MIXED ARRAY

const mixedArray = [6, 45, "miami", 2, false, "barcelon", "200", "manresa", 9, 10];

const sum = (arrayArgument) => {
    let mixedSum = 0;
    for (let i=0; 1 <arrayArgument.length; i++) {
        if (typeof arrayArgument[i] === "string") {
            let str;
            str = arrayArgument[i].split ("");
            for (let i=0; i < str.length; i++){
                mixedSum += str[i].length;
            }
        }
        else if (typeof arrayArgument[i] === true) {
            mixedSum =+ 1;
        }
        else {
            mixedSum += arrayArgument[i];
        }
    }
    return mixedSum;
};

console.log("sum of mixed array");
console.log(sum(mixedArray));

