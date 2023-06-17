<template>
    <TheHeader />
    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-calendar2-check" />
                </h1>
                <h1 class="m-2">
                    Itinerário
                </h1>

            </div>
            <h3 class="m-2">
                {{ itinerary.description }}
            </h3>
        </div>
    </div>

    <div class="mt-3 container">
        <div class="accordion mt-2" v-for="movement of itinerary.movements" v-bind:key="movement.id">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {{ movement.school.description }} - {{ movement.period.description }}
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse m-4" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h3 class="m-2">
                            Informações
                        </h3>
                        <table class="table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Escola</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">periodo</th>
                                    <th scope="col">horário</th>
                                    <th scope="col">Tipo</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="movement of itinerary.movements" v-bind:key="movement.id">
                                    <th scope="row">{{ movement.school.description }}</th>
                                    <td>{{ movement.school.adress.street }}, {{ movement.school.adress.number }}, {{
                                        movement.school.adress.city }}/{{ movement.school.adress.state }}</td>
                                    <td class="">{{ movement.period.description }}</td>
                                    <td class="">{{ movement.hour }}</td>
                                    <td class="">{{ movement.type }}</td>

                                </tr>
                            </tbody>
                        </table>
                        <h3 class="m-2">
                            Passageiros
                        </h3>
                        <div id="collapseOne" class="accordion-collapse collapse m-4" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <table class="table table-hover mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">Passageiro</th>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Responsavel</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="passenger of movement.passengers" v-bind:key="passenger.id">

                                            <td class="">{{ passenger.name }}</td>

                                            <td>
                                                {{ passenger.adress.street }}, {{ passenger.adress.number }}, {{
                                                    passenger.adress.city }}/{{ passenger.adress.state }}
                                            </td>

                                            <td>
                                                {{ passenger.responsible.name }}
                                            </td>

                                            <td>
                                                <button class="btn btn-outline-warning m-1"
                                                    @click="goToViewPassenger(passenger.id)">
                                                    <i class="bi bi-person-badge iconButtonTable" />
                                                </button>

                                                <button class="btn btn-outline-danger m-1">
                                                    Remover
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <button class="btn btn-warning m-1">
            <i class="bi bi-sign-turn-slight-right m-1" />
            Gerar rota
        </button>
        <button class="btn btn-outline-danger m-1">
            <i class="bi bi-calendar-x m-1" />
            Excluir Itinerário
        </button>
    </div>
    <div class="mt-5">
        <Footer />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { getItinerary } from '../services/ItineraryService'
import { builderItineraryById } from '../model/ItineraryModel'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'

export default {
    data: () => {
        const { params } = useRoute();

        let itinerary = {};

        return { params, itinerary }
    },
    components: {
        TheHeader,
        Footer
    },
    mounted() {
        this.getItinerary();
    },
    methods: {
        getItinerary() {
            getItinerary(this.params.itinerary_id).then(
                (result) => {
                    this.itinerary = builderItineraryById(result);
                }
            );
        }
    }
}

</script>

<style>
.styleCardTitle {
    height: 80px !important;
    background-color: #FCBA03;
    text-align: center;
    border-radius: inherit !important;
    display: flex;
    justify-content: center;
}
</style>