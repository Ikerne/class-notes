<!-- JS HERE -->
<script setup>
// import ShowCard from `./ShowCard.vue`;
import { ref, reactive, computed } from "vue";


const myWatchlist = ref([
    {
      title: 'Breaking Bad',
      year: 2008,
      whereToWatch: ['Netflix', 'Disney+']
    },
    {
      title: 'The Sopranos',
      year: 1999,
      whereToWatch: ['HBO']
    }
    // Add more shows as needed
  ]);

 const newShow = reactive({
  title: '',
 year: '',
 whereToWatch: []  });

 const watchOnNetflix = computed(() => {
         return myWatchlist.value.filter(show => show.whereToWatch.includes('Netflix'))
  });

 function addShow() {
   myWatchlist.value.push({ ...newShow });
   newShow.title = '';
   newShow.year = '';
   newShow.whereToWatch = [];
 }
  </script>

<!-- HTML HERE -->


  <template>
    <!-- <div>
      <ShowCard v-for="show in myWatchlist" :show="show" :key="show.title" />
    </div> -->
    <h1>Computed Properties 2</h1>
    <h1>Watch List</h1>

    <div v-for="(movie, index) in myWatchlist" :key="index">
    <h1>{{ movie.title }}</h1>
    <h2>{{ movie.year }}</h2>
    <ul>
        <li v-for="(item, index) in movie.whereToWatch" :key="index">{{ item }}</li>
    </ul>
    </div>

    <h1>Watch on Netflix</h1>

<div v-for="(movie, index) in watchOnNetflix" :key="index">
<h1>{{ movie.title }}</h1>
<h2>{{ movie.year }}</h2>
<ul>
    <li v-for="(item, index) in movie.whereToWatch" :key="index">{{ item }}</li>
</ul>
</div>

    <div><h1>Add a show to your watchlist</h1>
      <form @submit.prevent="addShow">
        <input type="text" v-model="newShow.title"/>
        <input type="number" v-model="newShow.year"/>
        <input type="checkbox" id="Netflix" v-model="newShow.whereToWatch" value="Netflix">
    <label for="Netflix">Netflix</label>
    <br>
    <input type="checkbox" id="HBO" v-model="newShow.whereToWatch" value="HBO">
    <label for="HBO">HBO</label>
    <br>
    <input type="checkbox" id="Disney+" v-model="newShow.whereToWatch" value="Disney+">
    <label for="Disney+">Disney+</label>
        <button type="submit">Add show</button>
      </form></div>
  </template>


<!-- CSS HERE -->
<style scoped></style>


<!--Instrucciones-->

<!-- Computed Properties 2 -->

<!-- Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o pel??cula que quer??is ver en el futuro, y deber??a contar con las keys title (string), year (number) y whereToWatch (array de Strings).
     En el browser deber??ais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Despu??s deber??amos tener una variable computada watchOnNetflix que filtre el array de myWatchlist seg??n si la key whereToWatch incluye la string "Netflix". En el template tambi??n deber??amos renderizar watchOnNetflix con un t??tulo para separar las dos listas. -->
    
<!-- Despu??s creamos un formulario con inputs para introducir un title, un year y una opci??n m??ltiple de servicios de streaming. Cuando hagamos submit del formulario deber??amos crear un objeto con toda la info inputada por el user y a??adirlo a myWatchlist. En caso de que esta nueva serie o pel??cula se pueda ver en Netflix, la lista de watchOnNetflix tambi??n deber??a actualizarse al momento. -->