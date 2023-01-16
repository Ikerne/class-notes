// Excercise 001
// <= 5 - Gratis
// < 15 - tienes un 20%
// >= 15 y <=60 - pagan regular
//si el usuario +60 - tiene 40%
const discountAge = parseInt(prompt("Hey! do you want to get a discount? Please show me your ID")); // parseInt is native to javascript 

if(discountAge <= 5){
    console.log ("It's free");
} else if (discountAge >5 && discountAge < 15) {
    console.log("You have 20% off!");
} else if (discountAge >= 15 && discountAge <=60) {
    console.log("Sorry, no discount for you. Pay regular price");
} else if (discountAge > 60) {
    console.log("You have 40% off!");
}



// Excercise 002
// Vamos a crear un switch statement para loguear distintos resultados segun los prompts que entre el usuario. Primero le daremos la opción de entrar su name, que nos guardaremos en una variable. Después le permitiremos entrar una action, que también guardaremos en una variable. Nos encargaremos de esta action y, según lo que el usuario entre, haremos console log de alguna cosa u otra.

// Si el usuario entra "greet", lo que vamos a loguear es "Hello, [name]!". Si el usuario entra "say bye", vamos a loguear "Bye bye, [name]!". Si el usuario entra "ask" loguearemos "How are you today, [name]?". Si entra "scream" vamos a loguear "AHHHHHHHH!!!!!!!". Si entra "rest" vamos a loguear "I'm signing off now.". En caso de que la action no sea ninguna de las anteriores, lo que loguearemos será: "I don't know how to do that yet, I'm just a little program :("

const userName =prompt("Enter your name:");
const action =prompt("Enter an action:");

switch (action) {
    case "greet":
        console.log(`Hello, ${userName}!`);
        break;
    case "say bye":
        console.log(`Bye bye, ${userName}!`);
        break;
    case "ask":
        console.log(`How are you today ${userName}?`);
        break;
    case "scream":
        console.log(`AHHHHHHHHHHH!!!!`);
        break;
    case "scream":
        console.log(`AHHHHHHHHHHH!!!!`);
        break;
     case "rest":
        console.log(`I'm signing off now."`);
        break;
    default:
        console.log("I don't know how to do that yet, I'm just a little program :(");
        break;
}
