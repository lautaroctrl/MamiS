<template>
  <div id="hambur" class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40 mt-9">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">HAMBURGUESAS</h1>
    </div>
    <div v-for="(item, index) in burguers" :key="index" class="flex text-sm font-serif">
      <div class="font-bold my-2">{{ item.name }}</div>
      <span class="ml-auto pt-2">{{ item.price }}</span>
      <div class="my-5"></div>
    </div>
  </div>
  <div id="lomitos" class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40 mt-9">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">LOMITOS</h1>
    </div>
    <div v-for="(item, index) in lomitos" :key="index" class="flex text-sm font-serif">
      <div class="font-bold my-2">{{ item.name }}</div>
      <span class="ml-auto pt-2">{{ item.price }}</span>
      <div class="my-5"></div>
    </div>
  </div>
</template>

<script setup>
import lomitos from '@/scripts/lomitos';
import burguers from '@/scripts/burguers';
</script>
