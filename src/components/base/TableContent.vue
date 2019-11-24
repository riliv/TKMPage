<template>
<tr class="border-b">
    <td class="px-5 py-3">
    <label class="inline-flex items-center">
        {{text}}
    </label>
    </td>
    <td class="px-5 py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" :name="name" value="0" checked>
    </label>
    </td>
    <td class="px-5 py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" :name="name" value="1">
    </label>
    </td>
    <td class="px-5 py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" :name="name" value="2">
    </label>
    </td>
    <td class="px-5 py-3">
    <label class="inline-flex items-center">
        <input type="radio" class="form-radio" :name="name" value="3">
    </label>
    </td>
</tr>
</template>

<script>
export default {
    name: 'Content',
    props: {
        name: String,
        text: String,        
    }
}
</script>

<style>

</style>