<template>
  <div id="pizzas" class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40 mt-9">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">PIZZAS</h1>
    </div>
    <div class="font-bold border-dashed border-4 border-black text-center text-lg">
      <h1 class="my-1">8 PORCIONES</h1>
    </div>
    <div v-for="(item, index) in pizzas" :key="index" class="flex text-sm">
      <div class="font-bold my-2">
        {{ item.name }}
        <span class="font-serif font-normal">{{ item.description }}</span>
      </div>
      <span class="ml-auto pt-2 font-bold">{{ item.price }}</span>
      <div class="my-5"></div>
    </div>
  </div>
</template>

<script setup>
import pizzas from '@/scripts/pizzas';
</script>
