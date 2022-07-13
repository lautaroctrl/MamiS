<template>
  <div class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">PROMOCIONES</h1>
    </div>
    <div v-for="(item, index) in promos" :key="index" class="flex text-sm">
      <div class="font-bold my-2">
        {{ item.name }} <br />
        <div class="font-normal font-serif">{{ item.description }}</div>
      </div>
      <span class="ml-auto pt-2">{{ item.price }}</span>
      <div class="my-5"></div>
    </div>
  </div>
</template>

<script setup>
import promos from '@/scripts/promos';
</script>
