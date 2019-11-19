<template>
  <div class="pt-20 px-10 lg:px-48 bg-blue-100">
    <!--Center-->
    <div class="pb-20">
      <h1
        class="w-full sm:w-8/12 mx-auto pb-10 text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold"
      >Catatan penting sebelum anda mulai!</h1>
      <div class="w-full sm:w-11/12 lg:w-8/12 lg:flex mx-auto">
        <div
          class="shadow-xl border-gray-100 border-2 p-4 flex flex-col justify-between leading-normal rounded-lg bg-white"
        >
          <div class="flex-col p-4 text-sm sm:text-xl text-gray-600 font-sans leading-relaxed items-center">
            <ul class="pl-8 list-outside list-decimal">
              <li>Jangan gunakan alat tes ini sebagai acuan diagnosis.</li><br>
              <li>Gunakan tes ini sebagai gambaran umum kondisi kamu dan menentukan kebutuhan untuk ke profesional.</li><br>
              <li>Alat tes ini masih dalam pengembangan, jawaban kamu akan digunakan dalam pengembangan.</li><br>
              <li>
                Seluruh data dan hasil tes bersifat
                <b>rahasia</b> dan hanya digunakan untuk pengembangan alat tes.
              </li><br>
              <li>
                Seluruh alat tes ini diadaptasi berdasarkan alat tes bebas dan daring sehingga dapat diakses secara
                <b>gratis</b>. Riliv tidak memiliki hak cipta alat tes satu pun.
              </li><br>
              <li>
                Jika kamu memiliki masalah kesehatan mental,
                <b>segera hubungi bantuan profesional</b>.
              </li><br>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-4/12 md:w-3/12 xl:w-2/12 mx-auto pt-16">
        <div class="shadow-lg rounded">
          <v-button class="py-3 lg:py-4" msg="Lanjutkan"></v-button>
        </div>
      </div>
    </div>
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