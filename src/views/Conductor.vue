<template>
    <TheHeader />
  
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Drivan</h1>
    </div>

    <ConductorForm />

    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import ConductorForm from '../components/ConductorForm.vue'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'ConductorView',
    components: {
        TheHeader,
        ConductorForm,
        Footer
    },
    data: function() {
        return  {}
    },
}
</script>

<style>
    .styleCardTitle {
        height: 80px !important;
        background-color: #FCBA03;
        text-align: center;
        border-radius: inherit !important;
        align-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>