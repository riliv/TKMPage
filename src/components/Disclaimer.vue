<template>
  <div class="scroll-here pt-20 px-10 lg:px-48 bg-blue-100">
    <!--Center-->
    <div class="pb-20">
      <h1
        class="w-full sm:w-9/12 mx-auto pb-10 text-4xl text-gray-800 text-center font-sans font-semibold"
      >Catatan penting sebelum anda mulai!</h1>
      <div class="w-full sm:w-11/12 lg:w-10/12 lg:flex mx-auto">
        <div
          class="shadow-xl border-gray-100 border-2 p-4 flex flex-col justify-between leading-normal rounded-lg bg-white"
        >
          <div class="flex-col p-4 text-sm sm:text-lg text-gray-600 font-sans leading-relaxed items-center">
            <ul class="pl-8 list-outside list-decimal">
              <li class="pb-2"><b>Jangan</b> gunakan alat tes ini sebagai acuan diagnosis.</li>
              <li class="pb-2">Gunakan tes ini sebagai gambaran umum kondisi kamu dan menentukan kebutuhan untuk ke profesional.</li>
              <li class="pb-2">Alat tes ini masih dalam pengembangan, jawaban kamu akan digunakan dalam pengembangan.</li>
              <li class="pb-2">
                Seluruh data dan hasil tes bersifat
                <b>rahasia</b> dan hanya digunakan untuk pengembangan alat tes.
              </li>
              <li class="pb-2">
                Seluruh alat tes ini diadaptasi berdasarkan alat tes bebas dan daring sehingga dapat diakses secara
                <b>gratis</b>. Riliv tidak memiliki hak cipta alat tes satu pun.
              </li>
              <li class="pb-2">
                Jika kamu memiliki masalah kesehatan mental,
                <b>segera hubungi bantuan profesional</b>.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-4/12 md:w-3/12 xl:w-2/12 mx-auto pt-16">
        <div class="shadow-lg rounded">
          <v-button v-google-signin-button="clientId" class="py-3 lg:py-4" msg="Lanjutkan"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  components: {
    'v-button' : Button,
  },
  directives: {
    GoogleSignInButton
  },
  data () {
    return {
      clientId: '108212715202-l8s1s6drj109f9q8lqkp61su74q7fk6j.apps.googleusercontent.com',
      user_id: '',
    }
  },
  methods: {
    /* eslint-disable no-console */
    OnGoogleAuthSuccess (idToken) {
      console.log(idToken)
      this.$router.push({ name: 'registration', params: { idToken } })

    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
  /* eslint-enable no-console */

};
</script>

<style>
</style>