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
import { getAllSchoolByConductorId } from '../services/SchoolService'
import { buildSchoolsByConductorIdFromService } from '../model/SchoolModel'

export default {
    name: 'ListSchoolView',
    data: () => {
        const { params } = useRoute();
        const dataSchool = {}
        let schools = [];

        return { params, schools, dataSchool }
    },
    components: {
        TheHeader,
        Footer
    },
    mounted() {
        this.getData(this.params.conductor_id);
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
        },
        getData(conductorId) {
            getAllSchoolByConductorId(conductorId)
            .then((data) => {
                this.schools = buildSchoolsByConductorIdFromService(data);
            })
            .catch((e) =>{
                alert('Ocorreu uma falha na consulta das escolas');
                console.log('Error consult schools', e.message);
            })
        }
    }
}
</script>

<style>

</style>