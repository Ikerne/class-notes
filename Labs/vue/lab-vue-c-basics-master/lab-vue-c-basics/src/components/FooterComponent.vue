<!-- HTML HERE -->
<template>
    <header>
      <footer>
        <!-- logo -->
        <a href=""
          ><img :src="logoOfSite.imgRoute" :alt="logoOfSite.imgAltText"
        /></a>
        <!-- navigation -->
        <ul>
          <li><a href="" v-text="navigation[0].navText"></a></li>
          <li>
            <a
              :target="navigation[1].navLinkOpenNewTab"
              :href="navigation[1].navRoute"
              v-text="navigation[1].navText"
            ></a>
          </li>
        </ul>
        <!-- buton de login -->
        <button v-text="buttonText"></button>
    </footer>
    </header>
  </template>
  <!-- JS HERE -->
  <script setup>
  import { ref, reactive } from "vue";
  
  const logoOfSite = reactive({
    imgRoute:
      "https://media.istockphoto.com/id/1281700863/photo/kitten-looking-up.jpg?s=170667a&w=0&k=20&c=25rZBi4NLOE1HFcNf8j7kYnKo-bdx2nALpR1F0PWk8M=",
    imgAltText: "A cool logo showcasing the Google Company",
  });
  
  const navigation = reactive([
    {
      navRoute: "/",
      navText: "Home",
    },
    {
      navRoute: "https://next.ironhack.com/fr/en/career",
      navText: "Contact",
      navLinkOpenNewTab: "_blank",
    },
  ]);
  
  const buttonText = ref("Click Me");
  </script>
  <!-- CSS HERE -->
  <style scoped>
  a,
  a img {
    width: 5vw;
  }
  
  footer {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin-top: 90vw;
  }
  
  footer ul {
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 5rem;
  }
  </style>