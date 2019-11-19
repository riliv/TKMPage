<template>
  <!--Center-->
  <div class="bg-blue-50">
    <div class="w-10/12 lg:w-8/12 mx-auto pt-16 lg:pt-40">
      <h1 class="pb-10 text-3xl sm:text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold">Sebarkan kesadaran kesehatan mental kepada sahabatmu</h1>
      <h2 class="pb-10 text-xl md:text-3xl text-gray-700 text-center font-sans">Ajak temanmu untuk mengetahui lebih dalam mengenai kondisi kesehatan mentalnya.</h2>
      <div class="text-center w-6/12 sm:w-4/12 md:w-3/12 mx-auto shadow-lg rounded=">
        <v-button class="py-3 lg:py-4" msg="Bagikan Ke Teman"/>
      </div>
    </div>
    <img class="w-full object-bottom" src="../assets/illustration-footer.png" alt="Footer illustration">
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    components:{
        'v-button': Button,
    }
};
</script>

<style>
</style>