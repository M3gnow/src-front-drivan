<template>
  <TheHeader />
  <router-view/>
  <Footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    TheHeader,
    Footer
  }
}

</script>

<style>
* {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }


</style>
