<template>
  <div class="home font-sans">
    <Nav/>
    <Header/>
    <Faq/>
    <Disclaimer/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Faq from '@/components/Faq.vue'
import Disclaimer from '@/components/Disclaimer.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Nav,
    Header,
    Faq,
    Disclaimer,
    Footer,
  }
}
</script>
