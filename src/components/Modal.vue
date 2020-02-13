<template>
  <div class="flex justify-center items-center fixed inset-0" style="background-color: rgba(0, 0, 0, 0.6);">
    <div 
      class="flex flex-col bg-white rounded-lg w-10/12 sm:w-8/12 md:w-6/12 xl:w-4/12 overflow-x-auto"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header 
        class="bg-white w-8/12 mx-auto p-4 font-semibold text-2xl"
        id="modalTitle"
      >
        <slot name="header">
          This is the default tile!
        </slot>
      </header>
      <section 
        class="text-center"
        id="modalDescription"
      >
        <slot name="body">
          I'm the default body!
        </slot>
       </section>
       <footer class="flex flex-col p-4 mx-2">
          <slot name="footer">
            <Button
              type="button"
              class="py-2"
              @click.native="close"
              msg="Oke"
              aria-label="Close modal"
            >
          </Button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'modal',
  components: {
    Button
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },

}
</script>

<style>

</style>