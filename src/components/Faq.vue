<template>
  <div class="container mx-auto pt-16 p-4 lg:px-48 items-center">
        <!--Center-->
        <div class="justify-center pb-40">
            <h1 class="pb-4 text-4xl md:text-5xl text-gray-800 text-center font-sans font-semibold">
                Mengenai Tes Kesehatan Mental
            </h1>
            <div>
                <dropdown :items="items" class="w-full lg:w-10/12 mx-auto"></dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
    components: {
        'dropdown':Dropdown,
    },
    data() {
        return {
            items: [
            {
                title: 'Apa itu tes kesehatan mental?',
                contents:`Kamu bisa mencoba tes kesehatan mental di bawah ini secara gratis.
                    Tujuannya adalah membantu kamu mengetahui kondisi kesehatan mentalmu.
                    Kamu pun bisa menentukan langkah selanjutnya. Jangan khawatir: seluruh data
                    dan hasil tes kamu bersifat rahasia!
                `
                
            },
            {
                title: 'Metode apa yang digunakan untuk mengetes?',
                contents:`Rhino skin maybe thick but it can be quite sensitive to sunburns and
                    insect bites which is why they like wallow so much – when the mud dries
                    it acts as protection from the sunburns and insects.
                `
                
            },
            {
                title: 'Apa manfaatnya tes kesehatan mental ini bagi saya?',
                contents:`If you’re looking to hunt a unicorn, but don’t know where to begin, try
                    Lake Superior State University in Sault Ste. Marie, Michigan. Since
                    1971, the university has issued permits to unicorn questers.
                `
                
            },
            ]
        //msg: "Welcome to Your Vue.js App"
        };
    },
}
</script>

<style>

</style>