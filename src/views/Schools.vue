<template>

    <div class="container styleCardTitle mt-3">
        <h1>Cadastro Escola </h1>
    </div>

    <SchoolForm />
</template>

<script>
import SchoolForm from '../components/SchoolForm.vue'

export default {
    name: 'School View',
    components: {
        SchoolForm,
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