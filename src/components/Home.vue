<script setup lang="ts">

import {getIngredientsData} from "@/api/api";


const data = await getIngredientsData()

console.log('data', data)


</script>

<template>
  <div class="hello">
    <h1>Home Page
    </h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .hello {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>