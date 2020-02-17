<template>
  <!--Center-->
  <div class="bg-blue-50">
    <div class="w-10/12 lg:w-8/12 mx-auto pt-16 lg:pt-40">
      <h1
        class="pb-10 text-3xl sm:text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold"
      >
        Mari bersama-sama menjaga kesehatan mental
      </h1>
      <h2 class="pb-10 text-xl md:text-3xl text-gray-700 text-center font-sans">
        Ajak temanmu untuk mengetahui lebih dalam mengenai kondisi kesehatan
        mentalnya.
      </h2>
      <div
        class="text-center w-6/12 sm:w-4/12 md:w-3/12 mx-auto shadow-lg rounded"
      >
        <v-button
          class="py-3 lg:py-4"
          msg="Bagikan alat tes ini"
          @click.native="toggleModal"
        />
        <modal v-show="isModalVisible" @close="toggleModal">
          <div slot="header" class="mx-auto text-center w-11/12 mt-12">
            <p class="font-bold text-gray-800">
              Bagikan alat tes ini
            </p>
          </div>
          <div slot="body" class="w-8/12 text-lg mx-auto mb-10">
            <social-sharing
              url="https://vuejs.org/"
              title="The Progressive JavaScript Framework"
              description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
              quote="Vue is a progressive framework for building user interfaces."
              hashtags="vuejs,javascript,framework"
              twitter-user="vuejs"
              inline-template
            >
              <div class="flex flex-col">
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
                <network network="line">
                  <i class="fa fa-line"></i> Line
                </network>
                <network network="linkedin">
                  <i class="fa fa-linkedin"></i> LinkedIn
                </network>
                <network network="telegram">
                  <i class="fa fa-telegram"></i> Telegram
                </network>
                <network network="twitter">
                  <i class="fa fa-twitter"></i> Twitter
                </network>
                <network network="whatsapp">
                  <i class="fa fa-whatsapp"></i> Whatsapp
                </network>
              </div>
            </social-sharing>
          </div>
        </modal>
      </div>
    </div>
    <img
      class="w-full object-bottom"
      src="../assets/illustration-footer.png"
      alt="Footer illustration"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import SocialSharing from "vue-social-sharing";
import modal from "@/components/Modal.vue";

export default {
  components: {
    "v-button": Button,
    SocialSharing,
    modal
  },
  data: function() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    toggleModal: function() {
      this.isModalVisible = !this.isModalVisible;
    }
  }
};
</script>

<style></style>
