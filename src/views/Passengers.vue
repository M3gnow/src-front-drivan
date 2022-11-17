<template>
    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Passageiro</h1>
    </div>

    <PassengersForm />
</template>

<script>
import PassengersForm from '../components/PassengersForm.vue'

export default {
    name: 'Passengers View',
    components: {
        PassengersForm,
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