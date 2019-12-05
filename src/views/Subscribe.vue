<template>
  <div class="font-sans max-h-screen">
    <div class="flex flex-row justify-center mb-16">
      <img class="h-10 mt-6 object-contain" src="../assets/logo.png" alt="">
    </div>
    <div class="flex flex-col w-full justify-center mx-auto">
        <img class="object-contain w-5/12 md:w-2/12 mx-auto -mb-16 z-10" src="../assets/section-2.png" alt="Hero Image">
        <div class="shadow-xl w-10/12 mx-auto" style="background:#2FD2E5; border-radius: .6rem;">
            <p class="w-11/12 md:w-10/12 text-xl md:text-2xl md:text-3xl font-bold text-white text-center mx-auto p-3 mt-16">Satu langkah lagi untuk melihat hasil tes anda</p>
            <p class="w-11/12 md:w-10/12 text-lg md:text-xl text-white text-center mx-auto">Untuk memvalidasi hasil tes kamu, kami ingin memastikan data diri kamu. Jawaban kamu membantu penelitian kami untuk membangun kesehatan mental yang lebih baik. Data kamu akan kami jaga kerahasiaannya.</p>
            <div class="w-6/12 md:w-3/12 mx-auto m-10">
                <router-link to="/result">
                    <v-button class="py-4 px-3 rounded-lg shadow-lg" msg="Lanjutkan"></v-button>
                </router-link>
            </div>
        </div>
        
    </div>
    <img class="w-full object-bottom object-contain" src="../assets/illustration-footer.png" alt="Footer illustration">
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    components:{
        'v-button': Button,
    }
}
</script>

<style>

</style>