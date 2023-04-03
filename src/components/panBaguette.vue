<template>
  <div id="baguette" class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40 mt-9">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">PAN BAGUETTE</h1>
    </div>
    <div v-for="(item, index) in panBaguette" :key="index" class="flex text-sm font-serif">
      <div class="font-bold my-2">{{ item.name }}</div>
      <span class="ml-auto pt-2">-</span>
      <div class="my-5"></div>
    </div>
  </div>
</template>

<script setup>
import panBaguette from '@/scripts/panBaguette';
</script>
