<template>
  <nav class="bg-white mt-0 fixed w-full z-10 top-0 shadow">
    <div class="w-10/12 mx-auto my-4 flex flex-wrap items-center">
      <div class="flex w-full lg:w-1/2 justify-center lg:justify-start">
        <img class="h-8 object-contain" src="../assets/logo.png" alt="" />
      </div>
      <div class="hidden lg:block w-1/5 ml-auto content-center">
        <v-button
          class="py-2"
          v-scroll-to="'.scroll-here'"
          msg="Mulai Assessment Sekarang"
        ></v-button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Nav",
  components: {
    "v-button": Button
  }
};
</script>

<style></style>
