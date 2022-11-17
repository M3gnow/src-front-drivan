<template>

    <TheHeader />
  
    <div>
        Dashboard
    </div>

    <ConductorForm />

    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        TheHeader,
        Footer
    },
}
</script>

<style>

</style>