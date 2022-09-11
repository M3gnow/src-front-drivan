<template>
  <TheHeader />
  <router-view/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  }
}

</script>

<style>
* {
    font-family: monospace;
  }

  body {
    margin: 0;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
  }

</style>
