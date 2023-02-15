<!-- JS HERE -->
<script setup>
import { ref, reactive, computed } from "vue";

//1
const name =ref("Ikerne");
const lastName =ref("sanz");

const myName = computed(() => `${name.value} ${lastName.value}`);

// const myName = computed({
//     //Syntax
//     get() {
//         return `${name.value} ${lastName.value}`
//     },
//     set(myNewName){
//        [name.value, lastName.value]= myNewName;
//     }

// });

</script>

<!-- HTML HERE -->
<template>
    <div>
        <h1>Computed properties 1</h1>
        <h1>{{ myName }}</h1>
        <form action="">
            <input type="text" v-model="name">
            <input type="text" v-model="lastName">
        </form>
    </div>



</template>

<!-- CSS HERE -->
<style scoped></style>



<!--Instrucciones-->

<!-- Computed properties 1 -->

<!-- Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit. -->

<!-- Computed Properties 2 -->

<!-- Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas. -->
    
<!-- Después creamos un formulario con inputs para introducir un title, un year y una opción múltiple de servicios de streaming. Cuando hagamos submit del formulario deberíamos crear un objeto con toda la info inputada por el user y añadirlo a myWatchlist. En caso de que esta nueva serie o película se pueda ver en Netflix, la lista de watchOnNetflix también debería actualizarse al momento. -->
    
    
    
    
    
    
    
    