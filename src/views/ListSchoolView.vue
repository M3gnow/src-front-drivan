<template>
    <TheHeader/>

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-mortarboard" />
                </h1>
                <h1 class="m-2">
                    Escolas
                </h1>
            </div>
        </div>
    </div>

    <div class="container card mt-5">
        <table class="table table-hover mt-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Escola</th>
                <th scope="col">Status</th>
                <th scope="col">Endereço</th>
                <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="school of schools" v-bind:key="school.id">
                    <th scope="row">{{ school.id }}</th>
                    
                    <td>{{ school.description }}</td>
                    <td>{{ school.active ? 'Ativada': 'Desativada' }}</td>
                    <td>
                        <button class="btn btn-outline-success m-1" @click="goToViewAddress(school.endereco.id)">
                            <i class="bi bi-house-heart iconButtonTable"/>
                        </button>
                    </td>

                    <td>
                        <button class="btn btn-outline-warning m-1" @click="goToViewSchool(school.id)">
                            <i class="bi bi-mortarboard iconButtonTable"/>
                        </button>

                        <button class="btn btn-outline-danger m-1">
                            Remover
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="mt-5 container">
        <div class="d-flex justify-content-end">
            <button class="btn btn-outline-warning m-1" @click="goToViewCreateSchool()">
                Adicionar Escola
            </button>
        </div>
    </div>
    
    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    data: () => {
        const { params } = useRoute();
        const schools = [{
            id: 1,
            description: 'E. E. Homero Fernando Milano',
            active: true,
            endereco: {
                id: 1
            }
        },
        {
            id: 2,
            description: 'E. E. Roberto Frederico',
            active: true,
            endereco: {
                id: 1
            }
        },
        {
            id: 3,
            description: 'E. E. Etec Itaquaquecetuba',
            active: false,
            endereco: {
                id: 1
            }
        }]

        return { params, schools }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        goToViewAddress(id) {
            this.$router.push(`/address/${id}`);
        },
        goToViewSchool(id) {
            this.$router.push(`/school/${id}`);
        },
        goToViewCreateSchool() {
            this.$router.push('/schools');
        }
    }
}
</script>

<style>

</style>