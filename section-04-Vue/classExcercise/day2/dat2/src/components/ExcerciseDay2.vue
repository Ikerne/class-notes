<script setup>
//import
import { ref, reactive } from "vue";

// Ex. 1 - ID Binding
const Ex1 = ref("Ex1");


</script>

<template>
    <!--Ex1-->
<h1  :id= "Ex1" >Ex1</h1>
</template>



<style scoped>
/*Ex1 */
#Ex1{
    color:aquamarine;
}


</style>
