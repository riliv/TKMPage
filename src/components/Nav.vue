<template>
<nav class="bg-white mt-0 fixed w-full z-10 top-0">
    <div class="w-10/12 mx-auto flex flex-wrap items-center">
        <div class="flex w-full lg:w-1/2 justify-center lg:justify-start text-white font-extrabold">
            <img class="h-10 mt-4 object-contain" src="../assets/logo.png" alt="">
        </div>
        <div class="hidden lg:block w-1/5 ml-auto pt-4 content-center">
            <v-button class="py-2" msg="Mulai Assessment Sekarang"></v-button>
        </div>
    </div>
    <div class="px-10">
        <table class="w-full">
            <tr>
                <td class="pt-4">
                <div class="bg-gray-300 h-px">&zwnj;</div>
                </td>
            </tr>
        </table>
    </div>
</nav>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Nav',
  components: {
      'v-button': Button
  }
}
</script>

<style>

</style>