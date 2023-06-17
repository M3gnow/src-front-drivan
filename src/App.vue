<template>
  <router-view/>
</template>

<script>

export default {
}

</script>

<style>
* {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }

  body {
    margin: 0;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    position: relative;
    margin: 0;
    min-height: 100%;
    padding-bottom: 10rem;
    box-sizing: inherit;
  }

  .main-container {
    margin: 30px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

  .layoutFormnDefault {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    color: white !important;
  }

  .textWhite {
      color: white !important;
  }
</style>
