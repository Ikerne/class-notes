

<template>

<div>
    <p>Mi nombre es ikerne</p>
</div>

<!--puesto con variables ref-->
<div>
    <p>
        Mi nombre es {{ myName }}, naci en {{ countryOfBirth }} y tengo {{ age }} 
    </p>
</div>
<!--puesto con variable reactive-->
<div>
    <p>
        Mi nombre es {{ myInfo.myName }}, naci en {{ myInfo.countryOfBirth }} y tengo {{ myInfo.age }} 
    </p>
</div>


  <!-- Ejemplo de reactividad + interpolacion + funciones  -->
  <!-- Ejemplo funcional con un contador -->
  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
    </div>
  </section>

<!--Ejercicio clase-->
<section>

    <div >
        <p>Este es un ejercicio de clase con datos primitivos. Mi peli favorita es {{ favouriteMovie }}, la he visto{{ timesSeen }}, y mi comida favorita es {{ favouriteFood }} </p>

        <p>Este es un ejercicio de clase con datos no primitivos. Mi nombre es {{ myReactiveVariable.myName2 }}, tengo {{ myReactiveVariable.ageNumber }} años, mis hobbies son: {{ myReactiveVariable.hobbies[0] }}, {{ myReactiveVariable.hobbies[1] }},{{ myReactiveVariable.hobbies[2] }}. Mi educacion es: {{ myReactiveVariable.education.Primaria }}, {{ myReactiveVariable.education.Secundaria }}, {{ myReactiveVariable.education.Universidad }} y mi banda favorita es {{ myReactiveVariable.favouriteBand }}</p>


        <p>Este es un ejercicio de clase con datos no primitivos. Mi nombre es {{ myReactiveVariable.myName2 }}, tengo {{ myReactiveVariable.ageNumber }} años, mi trabajo es {{ myReactiveVariable.job }}, mis hobbies son:</p>


    </div>
</section>



</template>

<script setup>

//Pasos

// paso 1
import {ref, reactive} from "vue";


// paso 2
const myName = ref("Ikerne");
const countryOfBirth = ref("México");
const age = ref(34);
const myInfo = reactive({
    myName: "Ikerne",
    countryOfBirth: "México",
    age: 34,

});
/// EJEMPLO FUNCIONAL - CONTADOR
const counter = reactive({
  count: 0,
  title: "My Counter",
});
// Funcion que suma +1
const increaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador ++ le sumamos 1 a la cuenta
  counter.count++;
  console.log("wu tang ++");
};
// Funcion que resta -1
const decreaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador -- le restamos 1 a la cuenta
  counter.count--;
  console.log("wu tang  --");
};

// EJERCICIO 001
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula
// ref === comida preferida

const favouriteMovie =ref("The Boondock Sanints");
const timesSeen =ref(143);
const favouriteFood =ref("Pozole Verde de Casa Doña Licha o Mole Oaxaqueño");

const myReactiveVariable = reactive({
    myName2: "Ikerne",
    ageNumber: 34,
    job: "unemployed",
    hobbies: ["gardening", "gaming", "woodwork"], 
    education: {
        Primaria: "edron",
        Secundaria: "L'academie laurentien",
        Universidad: "Ibero"}, 
    favouriteBand: "Buena Vista Social Club"

})

</script>

<style>
section .counter,
counter {
  display: flex;
  margin: 2rem 0;
}
section .counter button {
  padding: 2rem;
  font-size: 2em;
}
section .counter p {
  font-size: 3em;
  padding: 0 2rem;
}
</style>