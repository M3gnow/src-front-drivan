<template>
    <TheHeader />

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-calendar2-check" />
                </h1>
                <h1 class="m-2">
                    Itinerários
                </h1>
            </div>
        </div>
    </div>

    <div class="mt-3 container">
        <div class="accordion mt-2" v-bind:key="itinerary.id" v-for="itinerary of itineraries">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {{ itinerary.description }}
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse m-4" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <table class="table table-hover mt-3">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Escola</th>
                                    <th scope="col">periodo</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="movement of itinerary.movements" v-bind:key="movement.id">
                                   
                                    <th scope="row">{{ movement.school.description }}</th>

                                    <td class="">{{ movement.period.description }}</td>

                                    <td class="">{{ movement.type}}</td>

                                    <td>
                                        

                                        <button class="btn btn-outline-danger m-1">
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="row">
                        <button class="btn btn-outline-danger m-1">
                            <i class="bi bi-calendar2-check m-1" />
                            Excluir Itinerário
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <Footer />
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { getAllItineraries } from '../services/ItineraryService'
import { builderAllItinerariesById } from '../model/ItineraryModel'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'
export default {
    data: () => {
        const { params } = useRoute();

        let itineraries = [];

        return { params, itineraries }
    },
    components: {
        TheHeader,
        Footer
    },
    mounted() {
        this.getItineraries();
    },
    methods: {
        getItineraries() {
            getAllItineraries(this.params.conductor_id).then(
                (result) => {
                    this.itineraries = builderAllItinerariesById(result);
                }
            );
        }
    }
}

</script>