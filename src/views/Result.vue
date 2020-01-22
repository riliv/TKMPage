<template>
  <div class="font-sans h-screen">
    <div class="flex flex-row justify-center mb-16">
      <img class="h-10 mt-6 object-contain" src="../assets/logo.png" alt="" />
    </div>
    <div class="flex flex-col w-10/12 mx-auto mb-16">
      <p class="mx-auto text-2xl text-gray-800 font-bold">Hasil Tes</p>
      <div class="flex flex-col md:flex-row mb-10">
        <div class="py-5 mr-16 w-3/12">
          <p class="text-xl">Grafik Hasil</p>
          <div class="">
            <apexchart
              height="300"
              type="bar"
              :options="chartOptions"
              :series="series"
              :key="this.series[0].data[0]"
            ></apexchart>
          </div>
          <div class="mx-auto border rounded bg-gray-100">
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
        </div>
        <div class="mx-auto md:ml-0">
          <tabs>
            <tab name="Depression" :selected="true">
                <ul>
                    <li>Terima kasih karena kamu telah memilih untuk mencari tahu kondisi kesehatan mentalmu. Mengikuti tes kesehatan mental sama sekali bukanlah hal yang tabu.</li><br>
                    <li>Berdasarkan jawaban yang kamu berikan, jika skormu berada di bawah 10, maka kamu bisa terus merawat dan lebih perhatian kepada hal-hal yang mungkin membuatmu tidak nyaman secara berkala.</li>
                </ul>
            </tab>
            <tab name="Anxiety">
                <ul>
                    <li>Anxiety Description</li>
                    <li>and another text here</li>
                </ul>
            </tab>
            <tab name="Stress">
                <ul>
                    <li>Stress Description</li>
                    <li>and another text here</li>
                </ul>
            </tab>
          </tabs>
        </div>
      </div>
      <div class="rounded-t-lg bg-cyan-400 bg-contain bg-bottom bg-no-repeat" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="flex flex-col w-8/12 mx-auto py-20">
          <p class="text-white text-center text-xl">
            Jika anda merasa hasil tes anda tidak bagus, mungkin anda sedang
            butuh bantuan lebih. Atau jika kamu merasa tes ini bermanfaat, anda
            dapat mengajak teman anda
          </p>
          <div class="flex flex-row w-full lg:w-6/12 mx-auto">
            <v-button class="py-3 m-4 rounded-lg" msg="Ajak Teman" variant="alternative"></v-button>
            <v-button class="py-3 m-4 rounded-lg" msg="Dapatkan Bantuan"></v-button>
          </div>
        </div>
        <!-- <img class="relative w-full top-0" src="../assets/bg-illustration.png" alt="Footer illustration"> -->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/base/Tabs.vue";
import VueApexCharts from "vue-apexcharts";
import axios from "axios"
import backgroundUrl from "../assets/bg-illustration.png";

export default {
    props: ['userId'],
    components: {
        "v-button": Button,
        Tabs,
        Tab,
        apexchart: VueApexCharts
    },
    data: function() {
        return {
            backgroundUrl,
            output: [],
            level: [],
            series: [{
              name: 'Score',
              data: [0,0,0]
            }],
            chartOptions: {   
              chart: {
                id: 'vuechart-example'
              },
            }
        };
    },
    mounted() {
      axios
      .get("http://127.0.0.1:3333/api/v0/tkm/result/"+this.userId)
      .then( response => (
        this.output = response.data,
        this.level = [
          this.output.depression_level,
          this.output.anxiety_level,
          this.output.stress_level
        ],
        this.series = [{
          data: [
            this.output.depression_score,
            this.output.anxiety_score,
            this.output.stress_score
          ]
        }],
        this.chartOptions = {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Depression', 'Anxiety', 'Stress']
          },
          tooltip: {
            enabled: false
          },
          plotOptions: {
            bar: {
              distributed: true
            },
          },
          colors: [
            this.getColor(this.output.depression_level), 
            this.getColor(this.output.anxiety_level),
            this.getColor(this.output.stress_level)
          ]
        }
      ))
      .catch( error => (
        this.output = error.response
      ))
    },
    methods: {
      getColor(level) {
        if (level == 'Normal') {
            return '#2FD2E5'
        } else if (level == 'Ringan') {
            return '#949ACB'
        } else if (level == 'Sedang') {
            return '#CF93C1'
        } else if (level == 'Parah') {
            return '#F598AE'
        } {
            return '#F58982'
        }
      }
    }
};
</script>

<style></style>
