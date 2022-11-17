<template>
    <TheHeader />
  
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Escola </h1>
    </div>

    <SchoolForm />

    <div class="mt-5">
        <Footer />
    </div>
    
</template>

<script>
import SchoolForm from '../components/SchoolForm.vue'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'School View',
    components: {
        SchoolForm,
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
        align-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>