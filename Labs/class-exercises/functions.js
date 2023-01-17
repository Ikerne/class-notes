// EJERCICIO #1
// ...
// ...
// ...
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
function personalInfo(name, age, livesIn) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Lives in city: ${livesIn.livesInCity}`);
    console.log(`Lives in town: ${livesIn.livesInTown}`);
  }
  
  personalInfo("Diego", 30, { livesInCity: true, livesInTown: false });
  

// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.


const personalInfo2 = (name, age, livesIn) => {
    let location = livesIn.livesInCity ? "a ciudad" : " pueblo";
    return `${name} tiene ${age} años y vive en un${location}.`;
  };
  console.log(personalInfo2("Diego", 30, { livesInCity: true, livesInTown: false }));
  

console.log(personalInfo2("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(personalInfo2("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(personalInfo2("Laia", 78, { livesInCity: false, livesInTown: true }));