<template>
  <div class="font-sans h-screen">
    <div class="flex flex-row justify-center mb-16">
      <img class="h-10 mt-6 object-contain" src="../assets/logo.png" alt="" />
    </div>
    <div class="flex flex-col w-10/12 mx-auto mb-16">
      <p class="mx-auto text-2xl text-gray-800 font-bold">Hasil Tes</p>
      <div class="flex flex-col md:flex-row mb-10">
        <div class="py-5 mr-10 w-full md:w-4/12">
          <p class="text-xl">Grafik Hasil</p>
          <div class="w-full">
            <apexchart
              width="100%"
              height="350"
              type="bar"
              :options="chartOptions"
              :series="series"
              :key="this.series[0].data[0]"
            ></apexchart>
          </div>
          <div class="mx-auto border rounded bg-gray-100">
            <div class="my-4 text-sm mx-auto">
                <p class="ml-4 text-base text-gray-800 font-semibold my-2">Keterangan Grafik</p>
                <div class="ml-4 mt-6 flex flex-row my-4">
                    <ul class="text-gray-800 text-xs">
                        <li class="w-full flex flex-row mb-3">
                          <div class="w-6 h-6 rounded-lg" style="background-color:#2FD2E5;"></div>
                          <p class="font-semibold text-gray-700 ml-1 my-auto">Normal</p>
                        </li>
                        <li class="flex flex-row mb-3">
                          <div class="w-6 h-6 rounded-lg" style="background-color:#CF93C1;"></div>
                          <p class="font-semibold text-gray-700 ml-1 my-auto">Sedang</p>
                          </li>
                        <li class="flex flex-row mb-3 -pr-8">
                          <div class="w-6 h-6 rounded-lg" style="background-color:#F58982;"></div>
                          <p class="font-semibold text-gray-700 ml-1 my-auto">Sangat Parah</p>
                          </li>
                    </ul>
                    <ul class="text-gray-800 text-xs mx-auto">
                        <li class="w-full flex flex-row mb-3">
                          <div class="w-6 h-6 rounded-lg" style="background-color:#949ACB;"></div>
                          <p class="font-semibold text-gray-700 ml-1 my-auto">Ringan</p>
                        </li>
                        <li class="flex flex-row mb-3">
                          <div class="w-6 h-6 rounded-lg" style="background-color:#F598AE;"></div>
                          <p class="font-semibold text-gray-700 ml-1 my-auto">Parah</p>
                        </li>
                    </ul>
                </div>
                <table class="w-11/12 table-auto mx-auto lg:mx-2 text-gray-700 text-xs text-center">
                  <thead>
                    <tr>
                      <th class="px-2 py-2 font-semibold">Level</th>
                      <th class="px-2 py-2 font-semibold">Depresi</th>
                      <th class="px-2 py-2 font-semibold">Kecemasan</th>
                      <th class="px-2 py-2 font-semibold">Stres</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-2 py-2">Normal</td>
                      <td class="px-2 py-2">0-9</td>
                      <td class="px-2 py-2">0-7</td>
                      <td class="px-2 py-2">0-14</td>
                    </tr>
                    <tr class="bg-gray-200">
                      <td class="rounded-l px-2 py-2">Ringan</td>
                      <td class="px-2 py-2">0-9</td>
                      <td class="px-2 py-2">0-7</td>
                      <td class="rounded-r px-2 py-2">0-14</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2">Sedang</td>
                      <td class="px-2 py-2">0-9</td>
                      <td class="px-2 py-2">0-7</td>
                      <td class="px-2 py-2">0-14</td>
                    </tr>
                    <tr class="bg-gray-200">
                      <td class="rounded-l px-2 py-2">Parah</td>
                      <td class="px-2 py-2">0-9</td>
                      <td class="px-2 py-2">0-7</td>
                      <td class="rounded-r px-2 py-2">0-14</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2">Sangat Parah</td>
                      <td class="px-2 py-2">0-9</td>
                      <td class="px-2 py-2">0-7</td>
                      <td class="px-2 py-2">0-14</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        <div class="w-full md:w-8/12 mx-auto md:ml-0">
          <tabs>
            <p class="my-1">Terima kasih karena kamu telah memilih untuk mencari tahu kondisi kesehatan mentalmu. Mengikuti tes kesehatan mental sama sekali bukanlah hal yang tabu.</p>
            <p class="my-1">Berdasarkan jawaban yang kamu berikan, jika skormu berada di bawah 10, maka kamu bisa terus merawat dan lebih perhatian kepada hal-hal yang mungkin membuatmu tidak nyaman secara berkala.</p>
            <p class="mt-4">Jika skormu adalah 10 atau di atasnya, maka kamu mungkin merasakan satu atau beberapa kondisi di bawah ini:</p>

            <tab name="Depression" :selected="true">
              <ul class="w-10/12 list-disc list-outside ml-6 my-4 text-gray-800 text-md">
                  <li class="my-2">Merendahkan diri sendiri</li>
                  <li class="my-2">Kehilangan semangat atas hal-hal yang disukai</li>
                  <li class="my-2">Galau, gundah, sedih berkepanjangan</li>
                  <li class="my-2">Yakin bahwa hidupmu sudah tidak memiliki makna lagi</li>
                  <li class="my-2">Pesimis terhadap masa depan</li>
                  <li class="my-2">Kesulitan menikmati hal-hal yang biasanya menyenangkan atau memuaskan</li>
                  <li class="my-2">Kesulitan untuk berpartisipasi maupun terlibat dalam hal-hal yang dulu diinginkan</li>
                  <li class="my-2">Lamban</li>
                  <li class="my-2">Kurangnya inisiatif bertindak</li>
              </ul>
            </tab>
            <tab name="Anxiety">
              <ul class="w-10/12 list-disc list-outside ml-6 my-4 text-gray-800 text-md">
                  <li class="my-2">Mudah cemas dan yakin akan mengalami hal buruk</li>
                  <li class="my-2">Mudah gugup</li>
                  <li class="my-2">Tremor/tubuh sering menggigil ketakutan</li>
                  <li class="my-2">Mulut kering</li>
                  <li class="my-2">Kesulitan bernafas</li>
                  <li class="my-2">Jantung sering berdebar</li>
                  <li class="my-2">Tangan sering berkeringat</li>
                  <li class="my-2">Khawatir akan tindakan yang akan dilakukan</li>
                  <li class="my-2">Ketakutan akan kehilangan kontrol tubuh</li>
              </ul>
            </tab>
            <tab name="Stress">
              <ul class="w-10/12 list-disc list-outside ml-6 my-4 text-gray-800 text-md">
                <li class="my-2">Tidak dapat tenang</li>
                <li class="my-2">Tegang setiap saat</li>
                <li class="my-2">Kesulitan bersantai</li>
                <li class="my-2">Tidak ingin disentuh</li>
                <li class="my-2">Mudah marah</li>
                <li class="my-2">Mudah tersinggung</li>
                <li class="my-2">Mudah terkejut</li>
                <li class="my-2">Mudah cemas</li>
                <li class="my-2">Membenci interupsi atau perubahan rencana</li>
                <li class="my-2">Tidak dapat mentoleransi keterlambatan</li>
                <li class="my-2">Kerap melakukan hal kecil untuk tetap tenang (menggigit jari, mengusap tangan)</li>
              </ul>
            </tab>

            <p class="mt-8 font-semibold text-sm text-gray-700">Disclaimer:</p>
            <p class="text-gray-700 text-xs">Tes ini hanya menunjukkan kemungkinan kondisi kesehatan mental sehari-hari kamu. Tes ini <b>bukan</b>  merupakan diagnosa resmi. Kondisi kesehatan mental <b>harus dikonsultasikan</b> dengan psikolog profesional. Segera berkonsultasi dengan psikolog di puskesmas atau rumah sakit terdekat untuk mendapatkan diagnosa resmi dan bantuan profesional yang terpercaya.</p>
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
      .get("http://tkm.riliv.co.id/api/v0/tkm/result/"+this.userId)
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
            categories: ['Depresi', 'Kecemasan', 'Stres']
          },
          yaxis: {
            max: 42,
            tickAmount: 4,
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
