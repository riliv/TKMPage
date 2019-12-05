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
                    <li>Depresssion Description</li>
                    <li>and another text here</li>
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
          <div class="flex flex-row w-6/12 mx-auto">
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
import backgroundUrl from "../assets/bg-illustration.png";

export default {
    components: {
        "v-button": Button,
        Tabs,
        Tab,
        apexchart: VueApexCharts
    },
    data: function() {
        return {
            backgroundUrl,
            series: [{
            name: 'Good',
            data: [10, 8, 15]
            }, {
            name: 'Mild',
            data: [4, 2, 4]
            }, {
            name: 'Moderate',
            data: [7, 5, 7]
            }, {
            name: 'Severe',
            data: [7, 5, 8]
            }, {
            name: 'Extremely Severe',
            data: [14, 22, 8]
            }],
            chartOptions: {
                chart: {
                    stacked: true,
                    stackType: "normal"
                },
                responsive: [
                {
                    breakpoint: 480,
                    options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0
                    }
                    }
                }
                ],
                xaxis: {
                    categories: [
                        "Depression",
                        "Anxiety",
                        "Stress",
                    ],
                },
                yaxis: {
                    max: 42,
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    show: false,
                    position: "bottom",
                    offsetX: 0,
                    offsetY: 50
                },
                dataLabels: {
                    enabled: false,
                },
                tooltip: {
                    custom: function({series, seriesIndex, dataPointIndex}) {
                        return '<div class="rounded bg-gray-700 shadow-xl">' +
                        '<span class="px-2 text-sm text-white">Your Score is: ' + series[seriesIndex][dataPointIndex] + '</span>' +
                        '</div>'
                    }
                },
                colors:['#2FD2E5', '#949ACB', '#CF93C1', '#F598AE', '#F58982'],
            }
        };
    },
};
</script>

<style></style>
