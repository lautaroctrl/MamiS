<template>
  <div id="bebidas" class="w-11/12 flex mx-auto px-4 flex-col bg-yellow-50/40 mt-9">
    <div class="mx-auto my-2 bg-black flex h-12 w-full items-center">
      <h1 class="text-2xl text-white mx-auto">BEBIDAS</h1>
    </div>
    <div class="font-bold border-dashed border-4 border-black text-center text-lg flex justify-center">
      <h1 class="my-1 mx-2">CERVEZAS</h1>
    </div>
    <div class="flex justify-between">
      <div class="border-solid border-2 border-black rounded w-[8.1rem] xs:w-[9rem] mt-2 mb-3">
        <h2 class="font-bold text-center mt-3 text-xl mb-2">1 Litro</h2>
        <div v-for="(item, index) in cervezas" :key="index" class="flex text-sm ml-1 mr-1 font-serif">
          <div class="font-bold my-2">{{ item.name }}</div>
          <div class="my-5"></div>
        </div>
      </div>
      <div class="border-solid border-2 border-black rounded w-[8.1rem] xs:w-[9rem] mt-2 mb-3">
        <h2 class="font-bold ml-2 text-center mt-3 text-xl mb-2">475cc</h2>
        <div v-for="(item, index) in cervezasLatas" :key="index" class="flex text-sm ml-1 mr-1 font-serif">
          <div class="font-bold my-2">{{ item.name }}</div>
          <div class="my-5"></div>
        </div>
      </div>
    </div>
    <div class="font-bold border-dashed border-4 border-black text-center text-lg flex justify-center mt-2">
      <h1 class="my-1 mx-2">GASEOSAS</h1>
    </div>
    <div class="flex justify-between">
      <div class="border-solid border-2 border-black rounded w-[8.1rem] xs:w-[9rem] mt-2 mb-3">
        <h2 class="font-bold text-center mt-3 text-xl mb-2">1.5 Litro</h2>
        <div v-for="(item, index) in gaseosasLitro" :key="index" class="flex text-sm ml-1 mr-1 font-serif">
          <div class="font-bold my-2">{{ item.name }}</div>
          <div class="my-5"></div>
        </div>
      </div>
      <div class="border-solid border-2 border-black rounded w-[8.1rem] xs:w-[9rem] mt-2 mb-3">
        <h2 class="font-bold ml-2 text-center mt-3 text-xl mb-2">500cc</h2>
        <div v-for="(item, index) in gaseosasMedio" :key="index" class="flex text-sm ml-1 mr-1 font-serif">
          <div class="font-bold my-2">{{ item.name }}</div>
          <div class="my-5"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="font-bold border-dashed border-4 border-black text-center text-lg flex justify-center mt-2">
        <h1 class="my-1 mx-2">VINOS</h1>
      </div>
      <div class="border-solid border-2 border-black rounded w-36 mt-2 mb-3">
        <h2 class="font-bold ml-2 text-center mt-3 text-xl mb-2">1 Litro</h2>
        <div v-for="(item, index) in vinos" :key="index" class="flex text-sm ml-2 font-serif">
          <div class="font-bold my-2">{{ item.name }}</div>
          <div class="my-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cervezas, cervezasLatas, gaseosasLitro, gaseosasMedio, vinos } from '@/scripts/bebidas.js';
</script>
