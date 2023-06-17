<template>
    <TheHeader />
  
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Periodo </h1>
    </div>

    <PeriodForm />

    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import PeriodForm from '../components/PeriodForm.vue'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Period View',
    components: {
        PeriodForm,
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