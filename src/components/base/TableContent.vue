<template>
<tr class="sm:border-b">
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center font-bold sm:font-normal">
        {{text}}
    </label>
    <input type="hidden" :name="name" :value="picked"><br>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3" :class="{ 'bg-gray-200 rounded sm:bg-white' : picked == '0' }">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio hidden sm:block" v-model="picked" :name="name" value="0">
        <div class="flex flex-row ml-2 my-1 cursor-pointer sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">0</div>
            <p class="mx-2 text-gray-800 text-sm">Tidak terjadi pada saya sama sekali</p>
        </div>
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3" :class="{ 'bg-gray-200 rounded sm:bg-white' : picked == '1' }">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio hidden sm:block" v-model="picked" :name="name" value="1">
        <div class="flex flex-row ml-2 my-1 cursor-pointer sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">1</div>
            <p class="mx-2 text-gray-800 text-sm">Jarang terjadi pada saya</p>
        </div>
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3" :class="{ 'bg-gray-200 rounded sm:bg-white' : picked == '2' }">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio hidden sm:block" v-model="picked" :name="name" value="2">
        <div class="flex flex-row ml-2 my-1 cursor-pointer sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">2</div>
            <p class="mx-2 text-gray-800 text-sm">Kadang terjadi pada saya</p>
        </div>
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3" :class="{ 'bg-gray-200 rounded sm:bg-white' : picked == '3' }">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio hidden sm:block" v-model="picked" :name="name" value="3">
        <div class="flex flex-row ml-2 my-1 cursor-pointer sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">3</div>
            <p class="mx-2 text-gray-800 text-sm">Sering terjadi pada saya</p>
        </div>
    </label>
    </td>
</tr>
</template>

<script>
export default {
    name: 'Content',
    data: function() {
        return {
            picked: '',
        }
    },
    props: {
        name: String,
        text: String,
    },
    computed: {
        pickedClasses() {
            return 'bg-gray-200'
        }
    }
}
</script>

<style>
/* Responsive table */
@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    display: block;
    text-align: left;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>