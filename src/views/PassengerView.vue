<template>
  <TheHeader/>
    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <h1 class="m-2">
                        <i class="bi bi-person-badge" />
                    </h1>
                    <h1 class="m-2 textWhite">
                        Passageiro
                    </h1>
                </div>

                <div class="d-flex">
                    <button type="submit" class="btn btn-warning" @click="goToCreateResponsible()">
                        <i class="bi bi-person-fill-check"></i>
                        Adicionar Responsável
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <div class="layoutFormnDefault">
            <div class="input-container col-md-6">
                <label class="textWhite" for="namePassenger">Nome do(a) Passageiro(a)</label>
                <input class="width100" type="text" id="namePassenger" name="namePassenger" v-model="Passenger.namePassenger" placeholder="Digite o nome">
            </div>

            <div class="input-container col-md-6">
                <label class="textWhite" for="responsiblePassenger">Responsável</label>
                <input class="width100" type="text" id="responsiblePassengers" name="responsiblePassengers" v-model="Passenger.responsiblePassengers" placeholder="Digite o CPF">
            </div>

            <div class="input-container col-md-6">
                <label class="textWhite" for="schoolPassenger">Escola</label>
                <input class="width100" type="text" id="schoolPassenger" name="schoolPassenger" v-model="Passenger.schoolPassenger" disabled>
            </div>

            <div class="input-container col-md-6">
                <label class="textWhite" for="period">Período</label>
                <input class="width100" type="text" id="periodPassenger" name="periodPassenger" v-model="Passenger.periodPassenger" disabled>
            </div>
        </div>
    </div>

    <div class="container mt-5 d-flex justify-content-between">
        <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success me-2" @click="goAddressById(Passenger.endereco.id)" :disabled="!Passenger.endereco.id">
                <i class="bi bi-house-heart"></i>
                Ver Endereço
            </button>

            <button type="submit" class="btn btn-warning" @click="goToResponsibleById(Passenger.responsible.id)" :disabled="!Passenger.responsible.id">
                <i class="bi bi-person-fill-check"></i>
                Ver Responsável
            </button>
        </div>
        
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
import { getPassengerById } from '../services/PassengerService';
import { getSchoolById } from '../services/SchoolService'

export default {
    data: () => {
        const { params } = useRoute();
        const Passenger = {
            namePassenger: '',
            responsiblePassengers: '',
            schoolPassenger: '',
            periodPassenger: '',
            endereco: {},
            responsible: {}
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
        },
        builderLabelPeriod(school, periodId) {
            const periodFilter = school.periodos.find((period) => period.id === parseInt(periodId));

            if (periodFilter.entrada && periodFilter.saida) {
                return `Entrada ${periodFilter.entrada} - Saida ${periodFilter.saida}`
            } else {
                if (periodFilter.entrada) {
                    return `Entrada ${periodFilter.entrada}`
                }

                if (periodFilter.saida) {
                    return `Saida ${periodFilter.saida}`
                }
            }

            return '';
        },
        getData(schoolId, periodId,passengerId) {
            getSchoolById(schoolId)
                .then((data) => {
                    this.Passenger.schoolPassenger = data.descricao;
                    this.Passenger.periodPassenger = this.builderLabelPeriod(data, periodId)
                })
                .catch((e) =>{
                    console.log('Error consult schools', e.message);
                })

            getPassengerById(passengerId)
                .then((data) => {
                    this.Passenger.namePassenger = data.nome;
                    this.Passenger.responsiblePassengers = '';
                    this.Passenger.endereco.id = data.endereco.id
                })
                .catch((e) => {
                    console.log('Error consult schools', e.message);
                })
        },
        goToCreateResponsible() {
            const schoolId = this.params.school_id;
            const periodId = this.params.periods_id;
            const passengerId = this.params.passenger_id;
            const router = `/schools/${schoolId}/periods/${periodId}/passengers/${passengerId}/responsible`;

            this.$router.push(router);
        },
        goToResponsibleById(responsibleId) {
            const schoolId = this.params.school_id;
            const periodId = this.params.periods_id;
            const passengerId = this.params.passenger_id;
            const router = `/schools/${schoolId}/periods/${periodId}/passengers/${passengerId}/responsible/${responsibleId}`;

            this.$router.push(router);
        }
    },
    mounted() {
        const schoolId = this.params.school_id;
        const periodsId = this.params.periods_id;
        const passengerId = this.params.passenger_id;

        this.getData(schoolId, periodsId, passengerId);
    }
}
</script>

<style>

</style>