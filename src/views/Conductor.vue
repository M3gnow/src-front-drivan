<template>
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Drivan</h1>
    </div>

    <ConductorForm />
</template>

<script>
import ConductorForm from '../components/ConductorForm.vue'

export default {
    name: 'ConductorView',
    components: {
        ConductorForm,
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