<template>
    <button 
    class="w-full font-sans text-sm font-semibold text-white rounded shadow"
    :class="custom" 
    :style="style"
    >
        {{ msg }}
    </button>
</template>
<script>
// { 'text-cyan-500': variant == 'alternative', 'background-image:linear-gradient(273deg,#f46b5a,#f5a623)': variant == '' || variant == 'default' }

export default {
name: 'Button',
  props: {
    msg: String,
    variant: {
      type : String,
      default: null,
    },
  },
  computed: {
    style () {
      if (this.variant == 'default'){
        return 'background-image:linear-gradient(273deg,#f46b5a,#f5a623)'
      } else if (this.variant == 'alternative') {
        return ''
      } else {
        return 'background-image:linear-gradient(273deg,#f46b5a,#f5a623)'
      }
    },
    custom () {
      if (this.variant == 'default'){
        return 'hover:shadow-outline-orange'
      } else if (this.variant == 'alternative') {
        return 'hover:bg-gray-300 hover:text-gray-700 border-2 bg-cyan-400'
      } else {
        return 'hover:shadow-outline-orange'
      }
    }
  },
}
</script>

<style>

</style>