<template>

    <div class="main-container">
        <div class="styleCardTitle">
            <h1>Cadastro Drivan</h1>
        </div>

        <ConductorForm />
    </div>
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
        height: 50px;
        background-color: #FCBA03;
        border-radius: 10px;
        text-align: center;
        max-width: 500px;
        margin: 0px auto;
    }
</style>