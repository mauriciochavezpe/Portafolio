<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    <About/>
    <Servicios/>
    <Portafolio/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Servicios from '@/components/Servicios.vue'
import Portafolio from '../components/portafolio.vue'
import Footer from '@/components/Footer.vue'
 
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header ,
    About,
    Footer,
    Servicios,
    Portafolio
  }
}

</script>
