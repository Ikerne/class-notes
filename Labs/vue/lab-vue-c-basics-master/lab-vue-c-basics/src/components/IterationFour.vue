<template>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.title">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script>
    import { ref, reactive } from "vue";
    
    export default {
      setup() {
        const posts = reactive([
          { title: "Post title 1", description: "Description 1", content: "Content 1" },
          { title: "Post title 2", description: "Description 2", content: "Content 2" },
          { title: "Post title 3", description: "Description 3", content: "Content 3" },
        ]);
        
        return { posts };
      },
    };
  </script>
  <style scoped>
    li {
      list-style: none;
    }
  </style>


