<template>
<tr class="border-b">
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center">
        {{text}}
    </label>
    <input type="hidden" :name="name" :value="picked"><br>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" v-model="picked" :name="name" value="0">
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" v-model="picked" :name="name" value="1">
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" v-model="picked" :name="name" value="2">
    </label>
    </td>
    <td class="px-1 sm:px-5 py-1 sm:py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" v-model="picked" :name="name" value="3">
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
}
</script>

<style>

</style>