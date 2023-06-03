<template>
  <TheHeader/>
    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-person-badge" />
                </h1>
                <h1 class="m-2">
                    Passageiro
                </h1>
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <div class="layoutFormnDefault">
            <div class="input-container col-md-6">
                <label for="namePassenger">Nome do(a) Passageiro(a)</label>
                <input class="width100" type="text" id="namePassenger" name="namePassenger" v-model="Passenger.namePassenger" placeholder="Digite o nome">
            </div>

            <div class="input-container col-md-6">
                <label for="responsiblePassenger">Responsavel</label>
                <v-select 
                    class="input-select"
                    v-model="Passenger.selectedResponsiblePassengers" 
                    :options="Passenger.responsibles" 
                    @search="doSearchResponsible">
                </v-select>
            </div>

            <div class="input-container col-md-6">
                <label for="schoolPassenger">Escola</label>
                <v-select 
                    class="input-select"
                    v-model="Passenger.selectedSchoolPassenger" 
                    :options="schools" 
                    @search="doSearchSchool">
                </v-select>
            </div>

            <div class="input-container col-md-6">
                <label for="period">Periodo</label>
                <v-select 
                    class="input-select"
                    v-model="Passenger.selectedPeriodPassenger" 
                    :options="periods" 
                    @search="doSearchPeriod">
                </v-select>
            </div>
        </div>
    </div>

    <div class="container mt-5 d-flex justify-content-between">
        <button type="submit" class="btn btn-success" @click="goAddressById(Passenger.endereco.id)">
            <i class="bi bi-house-heart"></i>
            Ver Endereço
        </button>
    
        <button type="submit" class="btn btn-warning">
            <i class="bi bi-person-fill-check"></i>
            Salvar
        </button>
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
        const Passenger = {
            namePassenger: 'Thiago Henrique de Araujo',
            selectedResponsiblePassengers: ['Manoel Tavera de Araújo'],
            selectedSchoolPassenger: ['Homero fernando Milano'],
            selectedPeriodPassenger: ['08:00 - 12:00'],
            endereco: {
                id: 1,
            }
        };
        const schools = [
            'Homero fernando Milano',
            'Benedito',
            'Parque viviane'
        ];
        const periods = [
            '08:00 - 12:00',
            '07:00 - 12:00',
            '13:00 - 17:00',
            '18:00 - 22:00'
        ];

        return { params, Passenger, schools, periods }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        goAddressById(id) {
        this.$router.push(`/address/${id}`);
        }
    }
}
</script>

<style>

</style>