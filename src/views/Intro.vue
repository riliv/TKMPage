<template>
  <div class="font-sans">
    <div class="flex flex-row justify-center mb-16">
      <img class="h-8 mt-6 object-contain" src="../assets/logo.png" alt="">
    </div>
    <div class="flex flex-col lg:flex-row w-full">
      <div class="flex flex-col w-full lg:w-6/12 px-4 md:px-10 lg:pl-32">
        <img class="object-contain w-5/12 mx-auto lg:ml-0 mb-4" src="../assets/section-1.png" alt="">
        <h1 class="text-2xl lg:text-4xl text-gray-800 text-center lg:text-left font-sans font-semibold">
            Selamat datang di halaman Tes Kesehatan Mental
        </h1>
        <p class="w-full md:w-10/12 lg:w-full mx-auto pt-3 text-gray-700 text-base text-md sm:text-lg mb-8 text-center lg:text-left slide-in-bottom-subtitle leading-relaxed">
            Dalam tes ini anda akan dituntun untuk menjawab pertanyaan-pertanyaan pilihan ganda dengan sebuah skala 1-4, adapun aturan dalam pilihan ganda adalah sebagai berikut
        </p>
        <div class="hidden lg:flex flex-row">
          <router-link to="/test">
            <v-button class="mx-auto py-3 px-12" msg="MULAI TES"></v-button>
          </router-link>
          <router-link to="/" class="my-auto pl-5 text-gray-700 text-sm" style="text-decoration:underline!important;">Kembali</router-link>
        </div>
      </div>
      <div class="mt-10 lg:ml-40 w-full lg:w-6/12 lg:rounded-r-none lg:rounded-l-lg" style="background: #10CBE1;">
        <div class="hidden lg:block relative w-7/12 xl:w-5/12 -ml-20 rounded-lg bg-white shadow-xl border-2 border-gray-100" style="top:68%">
          <p class="absolute border w-10/12 border-gray-200" style="top:50%"></p>
          <div class="flex py-2 flex-col w-full">
            <table class="table-auto mx-auto">
              <thead>
                <tr>
                  <th class="px-5 py-3">0</th>
                  <th class="px-5 py-3">1</th>
                  <th class="px-5 py-3">2</th>
                  <th class="px-5 py-3">3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-3">
                    <label class="inline-flex items-center">
                      <input type="radio" class="form-radio" name="radio" value="0" checked>
                    </label>
                  </td>
                  <td class="px-5 py-3">
                    <label class="inline-flex items-center">
                      <input type="radio" class="form-radio" name="radio" value="1">
                    </label>
                  </td>
                  <td class="px-5 py-3">
                    <label class="inline-flex items-center">
                      <input type="radio" class="form-radio" name="radio" value="2">
                    </label>
                  </td>
                  <td class="px-5 py-3">
                    <label class="inline-flex items-center">
                      <input type="radio" class="form-radio" name="radio" value="3">
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="lg:pl-16 mt-10 lg:-mt-20 text-white font-semibold">
          <p class="text-3xl lg:text-2xl pb-4 text-center lg:text-left">Skala Jawaban</p>
          <table class="table-auto mx-auto lg:ml-0">
              <thead>
                <tr class="border-b">
                  <th class="px-4 py-2 text-center">Nilai</th>
                  <th class="px-4 py-2 text-left">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">0</td>
                  <td class="px-4 py-2 text-left">Tidak terjadi pada saya sama sekali</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">1</td>
                  <td class="px-4 py-2 text-left">Jarang terjadi pada saya</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">2</td>
                  <td class="px-4 py-2 text-left">Kadang-kadang terjadi pada saya</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">3</td>
                  <td class="px-4 py-2 text-left">Sering terjadi pada saya</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div class="flex lg:hidden flex-col w-6/12 sm:w-3/12 mx-auto mt-20 mb-10">
          <router-link to="/test">
            <v-button class="mx-auto py-3 px-3 rounded-lg" msg="MULAI TES"></v-button>
          </router-link>
          <router-link to="/" class="mx-auto text-white text-sm mt-3" style="text-decoration:underline!important;">Kembali</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue'

export default {
  name: 'test',
  components: {
    'v-button' : Button,
  }
}
</script>

<style>

</style>