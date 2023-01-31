<!-- HTML HERE -->
<template>
    <div>
      <h1 v-if="showText">Text will only show if showText is true</h1>
      <h1 v-show="showText">Text will always show but with CSS display property set to none if showText is false</h1>
    </div>
  </template>
  <!-- JS HERE -->
  <script setup>
  import { ref, reactive } from "vue";
  const showText = ref(true);
  
  </script>
  <!-- CSS HERE -->
  <style scoped></style>