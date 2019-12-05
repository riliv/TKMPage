<template>
  <div class="font-sans">
    <div class="flex flex-row justify-center mb-16">
      <img ref="img" class="h-8 mt-6 object-contain" src="../assets/logo.png" alt="" />
    </div>
    <div class="flex flex-col w-full sm:w-10/12 lg:w-8/12 mx-auto">
      <div class="rounded-lg overflow-hidden">
        <form-wizard shape="tab" class="w-full -mt-16" @on-complete="onComplete" ref="wizard" title="" subtitle="" transition="fade-in">
          <p class="text-center text-3xl font-semibold">Tes DASS21</p>
          <!-- First Tab -->
          <tab-content>
            <div class="w-full my-4 bg-gray-200 rounded-l-full rounded-r-full">
              <div class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white" style="width: 30%; background: #10CBE1"></div>
            </div>
            <div class="mx-auto my-4 border rounded bg-gray-100">
              <div class="w-10/12 my-4 text-sm mx-auto">
                  <p class="text-sm text-gray-800 font-semibold my-2">Keterangan</p>
                  <ul class="text-gray-800" style="columns: 2">
                      <li class="flex flex-row"><div class="w-6 h-6 mr-2 my-auto rounded-lg mb-3" style="background-color:#2FD2E5;"></div>Normal</li>
                      <li class="flex flex-row"><div class="w-6 h-6 mr-2 my-auto rounded-lg mb-3" style="background-color:#949ACB;"></div>Ringan</li>
                      <li class="flex flex-row"><div class="w-6 h-6 mr-2 my-auto rounded-lg mb-3" style="background-color:#CF93C1;"></div>Sedang</li>
                      <li class="flex flex-row"><div class="w-6 h-6 mr-2 my-auto rounded-lg mb-3" style="background-color:#F598AE;"></div>Parah</li>
                      <li class="flex flex-row"><div class="w-6 h-6 mr-2 my-auto rounded-lg mb-3" style="background-color:#F58982;"></div>Sangat Parah</li>
                  </ul>
              </div>
            </div>
            <table class="table-auto my-8 mx-auto text-md sm:text-lg text-gray-800">
              <thead>
                <tr class="border-b">
                  <th class="text-left px-5">Pernyataan</th>
                  <th class="px-5 py-3">0</th>
                  <th class="px-5 py-3">1</th>
                  <th class="px-5 py-3">2</th>
                  <th class="px-5 py-3">3</th>
                </tr>
              </thead>
                <t-content name="radio-1" text="Saya merasa sulit untuk beristirahat"></t-content>
                <t-content name="radio-2" text="Saya menyadari mulut saya kering"></t-content>
                <t-content name="radio-3" text="Sepertinya saya tidak bisa merasakan perasaan positif sama sekali"></t-content>
                <t-content name="radio-4" text="Saya mengalami kondisi sulit bernafas (mis. Bernafas sangat cepat, sesak nafas tanpa adanya aktivitas fisik)"></t-content>
                <t-content name="radio-5" text="Saya merasa sulit untuk membangun keinginan melakukan sesuatu"></t-content>
                <t-content name="radio-6" text="Saya cenderung bereaksi berlebihan terhadap situasi"></t-content>
                <t-content name="radio-7" text="Saya mengalami tubuh saya gemetar (misal di tangan)"></t-content>
              <tbody>
              </tbody>
            </table>
          </tab-content>
          <!-- Second Tab -->
          <tab-content>
            <div class="mt-10 mx-5 w-full bg-gray-200 rounded-l-full rounded-r-full">
              <div class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white" style="width: 66%; background: #10CBE1"></div>
            </div>
            <table class="table-auto my-8 mx-auto text-lg text-gray-800">
              <thead>
                <tr class="border-b">
                  <th class="text-left px-5">Pernyataan</th>
                  <th class="px-5 py-3">0</th>
                  <th class="px-5 py-3">1</th>
                  <th class="px-5 py-3">2</th>
                  <th class="px-5 py-3">3</th>
                </tr>
              </thead>
                <t-content name="radio-8" text="Saya merasa terlalu sering melakukan aktivitas otomatis untuk merespon cemas (Misal: Menggigit kuku, menarik nafas panjang berulang, bicara banyak saat cemas, memotong pembicaraan yang membuat cemas, dsb.)"></t-content>
                <t-content name="radio-9" text="Saya khawatir tentang situasi di mana saya mungkin panik dan mempermalukan diri sendiri"></t-content>
                <t-content name="radio-10" text="Saya merasa tidak ada yang bisa saya harapkan"></t-content>
                <t-content name="radio-11" text="Saya merasa gelisah"></t-content>
                <t-content name="radio-12" text="Saya merasa sulit untuk tenang"></t-content>
                <t-content name="radio-13" text="Saya merasa sedih dan galau"></t-content>
                <t-content name="radio-14" text="Saya tidak bisa menerima terhadap apa pun yang membuat saya tidak bisa melanjutkan apa yang saya lakukan"></t-content>
              <tbody>
              </tbody>
            </table>
          </tab-content>
          <!-- Third Tab -->
          <tab-content>
            <div class="mt-10 mx-5 w-full bg-gray-200 rounded-l-full rounded-r-full">
              <div class="rounded-l-full rounded-r-full text-xs leading-none py-1 text-center text-white" style="width: 100%; background: #10CBE1"></div>
            </div>
            <table class="table-auto my-8 mx-auto text-lg text-gray-800">
              <thead>
                <tr class="border-b">
                  <th class="text-left px-5">Pernyataan</th>
                  <th class="px-5 py-3">0</th>
                  <th class="px-5 py-3">1</th>
                  <th class="px-5 py-3">2</th>
                  <th class="px-5 py-3">3</th>
                </tr>
              </thead>
                <t-content name="radio-15" text="Saya merasa saya hampir panik"></t-content>
                <t-content name="radio-16" text="Saya tidak bisa antusias pada apapun"></t-content>
                <t-content name="radio-17" text="Saya merasa saya tidak berharga sebagai manusia"></t-content>
                <t-content name="radio-18" text="Saya merasa agak sensitif"></t-content>
                <t-content name="radio-19" text="Saya menyadari kondisi jantung saya meskipun tidak adanya aktivitas fisik (misalnya Rasa peningkatan denyut jantung, jantung berdebar)"></t-content>
                <t-content name="radio-20" text="Saya merasa takut tanpa alasan yang kuat"></t-content>
                <t-content name="radio-21" text="Saya merasa bahwa hidup tidak ada artinya"></t-content>
              <tbody>
              </tbody>
            </table>
          </tab-content>
          <button class="w-full text-sm font-semibold hover:shadow-outline text-gray-700 shadow-md py-3 px-4 rounded-lg border border-gray-400" slot="prev" @click="setFocus()">Sebelumnya</button>
          <v-button msg="Selanjutnya" slot="next" class="border rounded-lg border-orange-300 px-4 py-3 shadow-md active:outline" @click="setFocus()"></v-button>
          <v-button msg="Selesai" slot="finish" class="border rounded-lg border-orange-300 px-10 py-3 shadow-md" @click="setFocus()"></v-button>
        </form-wizard>
      </div>
    </div>
  </div>
</template>
<script>
import TableContent from '@/components/base/TableContent.vue'
import Button from '@/components/Button.vue'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  components: {
    't-content' : TableContent,
    'v-button' : Button,
    FormWizard,
    TabContent
  },
  methods: {
    onComplete: function(){
        alert('Yay. Done');
    },
    setFocus: function()
    {
      // Note, you need to add a ref="search" attribute to your input.
      this.$refs.img.focus();
    }
  },
};
</script>

<style>
.wizard-header{
  display: none;
}
i.wizard-icon{
  display: none !important;
}
.tab_shape{
  background-color: white !important;
}
:focus{
   outline:0;
}
</style>
