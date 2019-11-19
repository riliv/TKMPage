<template>
    <button class="w-full font-sans text-sm font-semibold hover:shadow-outline-orange text-white rounded shadow" style="background-image:linear-gradient(273deg,#f46b5a,#f5a623)">
        {{ msg }}
    </button>
</template>

<script>
export default {
name: 'Button',
  props: {
    msg: String,
  }
}
</script>

<style>

</style>