<template>
  <div class="font-sans">
    <div class="flex flex-row justify-center mb-16">
      <img class="h-8 mt-6 object-contain" src="../assets/logo.png" alt="">
    </div>
    <div class="flex flex-row w-full">
      <div class="flex flex-col w-6/12 pl-40">
        <img class="object-contain w-5/12 mr-auto mb-4" src="../assets/section-1.png" alt="">
        <h1 class="text-4xl text-gray-800 text-left font-sans font-semibold">
            Selamat datang di halaman Tes Kesehatan Mental
        </h1>
        <p class="w-full md:w-10/12 lg:w-full mx-auto pt-3 text-gray-700 text-base text-lg mb-8 text-center lg:text-left slide-in-bottom-subtitle leading-relaxed">
            Dalam tes ini anda nanti akan dituntun untuk menjawab pertanyaan-pertanyaan pilihan ganda dengan sebuah skala 1-4, adapun aturan dalam pilihan ganda adalah sebagai berikut
        </p>
        <div class="flex flex-row w-6/12">
          <router-link to="/test">
            <v-button class="mx-auto py-4" msg="MULAI TES"></v-button>
          </router-link>
          <router-link to="/" class="my-auto pl-5 text-gray-700 text-sm" style="text-decoration:underline!important;">Kembali</router-link>
        </div>
      </div>
      <div class="ml-40 w-6/12 rounded-l-lg" style="background: #10CBE1;">
        <div class="absolute w-1/5 -ml-20 rounded-lg bg-white shadow-xl border-2 border-gray-100" style="top:65%">
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
        <div class="pl-16 pt-16 text-white font-semibold">
          <p class="text-2xl pb-4">Skala Jawaban</p>
          <table class="table-auto">
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
                  <td class="px-4 py-2 text-center">2</td>
                  <td class="px-4 py-2 text-left">Jarang terjadi pada saya</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">3</td>
                  <td class="px-4 py-2 text-left">Kadang-kadang terjadi pada saya</td>
                </tr>
                <tr class="border-b">
                  <td class="px-4 py-2 text-center">4</td>
                  <td class="px-4 py-2 text-left">Sering terjadi pada saya</td>
                </tr>
              </tbody>
            </table>
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