<template>
    <TheHeader />
  
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Itinerário </h1>
    </div>

    <ItineraryForm />

    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import ItineraryForm from '../components/ItineraryForm.vue'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'School View',
    components: {
        ItineraryForm,
        TheHeader,
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
        display: flex;
        justify-content: center;
    }
</style>