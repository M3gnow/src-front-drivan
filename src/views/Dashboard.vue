<template>

    <TheHeader />

    <div class="container">
        <div>
            Dashboard
        </div>

        <div class="mt-5 d-flex">
            <div class="m-1" v-for="id in ids" v-bind:key="id">
                <button type="button" class="btn btn-outline-warning" @click="setConductor(id)">
                    Login - Condutor - {{ id }}
                </button>
            </div>
        </div>
    </div>

    <ConductorForm />
    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'
import { useRoute } from 'vue-router'

export default {
    components: {
        TheHeader,
        Footer
    },
    data : () => {
        const { params } = useRoute();
        const ids = [1,2,3,4,5,6,7]

        return {
            ids,
            params
        }
    },
    methods: {
        setConductor(id) {
            this.params.conductor_id = id;
            this.$router.push(`/home/conductor/${ params.conductor_id }`);
        }
    }
}
</script>

<style>

</style>