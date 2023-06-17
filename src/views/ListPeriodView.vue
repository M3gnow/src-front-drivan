<template>
    <TheHeader/>

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-calendar2-check" />
                </h1>
                <h1 class="m-2">
                    Períodos
                </h1>
            </div>
        </div>
    </div>

    <div class="mt-3 container" v-bind:key="period.id" v-for="period of periods">
        <div class="card p-3 cardColorBorderPassengerPeriods d-flex">
            <div class="card cardColorBorderPassengerPeriods card-title p-3 ">
                <div class="d-flex justify-content-between">
                    <h4 v-if="period.entrada">Entrada: {{ period.entrada }}</h4>
                    <h4 v-if="period.saida">Saida: {{ period.saida }}</h4>    
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-success m-1" @click="goToViewCreatePassenger(period.id)">
                    Adicionar Passageiro
                </button>
            </div>

            <div>
                <table class="table table-hover mt-3 table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Passageiro</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Responsavel</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="passenger of period.passengers" v-bind:key="passenger.id">
                            
                            <th scope="row">{{ passenger.id }}</th>
                            
                            <td class="">{{ passenger.name }}</td>
                            
                            <td>
                                <button class="btn btn-outline-success m-1" @click="goToViewAddress(passenger.endereco.id)">
                                    <i class="bi bi-house-heart iconButtonTable"/>
                                </button>
                            </td>

                            <td>
                                <button class="btn btn-outline-success m-1" @click="goToViewResponsible(passenger.responsavel.id)">
                                    <i class="bi bi-person-heart iconButtonTable"/>
                                </button>
                            </td>

                            <td>
                                <button class="btn btn-outline-warning m-1" @click="goToViewPassenger(period.id, passenger.id)">
                                    <i class="bi bi-person-badge iconButtonTable"/>
                                </button>

                                <button class="btn btn-outline-danger m-1">
                                    Remover
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="container row mt-3">
                <button class="btn btn-danger m-1">
                    <i class="bi bi-calendar2-check m-1" />
                    Excluir Período
                </button>
            </div>
        </div>
    </div>

    <div class="mt-3 container">
        <div class="d-flex justify-content-end">
            <button class="btn btn-outline-warning m-1" @click="goToViewCreatePassenger()">
                Adicionar Período
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
import { getSchoolById } from '../services/SchoolService'
import { builderAllPeriodsById } from '../model/PeriodsModel'
export default {
    data: () => {
        const { params } = useRoute();
        
        let periods = [];

        return { params, periods }
    },
    components: {
        TheHeader,
        Footer
    },
    mounted(){
        this.getPeriods();
    },
    methods: {
        getPeriods(){
            getSchoolById(this.params.school_id).then((result)=>{
                this.periods = builderAllPeriodsById(result);           
            })
            
        },
        goToViewAddress(id) {
            this.$router.push(`/address/${id}`);
        },
        goToViewResponsible(id) {
            this.$router.push(`/responsible/${id}`);
        },
        goToViewPassenger(periodId, passengerId) {
            this.$router.push(`/schools/${this.params.school_id}/periods/${periodId}/passengers/${passengerId}`);
        },
        goToViewCreatePassenger(periodId) {

            this.$router.push(`/schools/${this.params.school_id}/periods/${periodId}/passengers`);
        }
    }
}
</script>

<style scoped>

.iconButtonTable {
    font-size: 20px !important;
}

.cardColorBorderPassengerPeriods {
    background: white;
    border-color: white !important;
}
</style>