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

    <div class="mt-3 container">
        <div class="accordion mt-2" v-bind:key="period.id" v-for="period of periods">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        {{ period.description }}
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse m-4" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <table class="table table-hover mt-3">
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
                                        <button class="btn btn-outline-success m-1" @click="goToViewResponsible(passenger.responsible.id)">
                                            <i class="bi bi-person-heart iconButtonTable"/>
                                        </button>
                                    </td>

                                    <td>
                                        <button class="btn btn-outline-warning m-1" @click="goToViewPassenger(passenger.id)">
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
                </div>
            </div>
        </div>
    </div>

    <div class="mt-3 container">
        <div class="d-flex justify-content-between">
            <button class="btn btn-outline-success m-1" @click="goToViewCreatePassenger()">
                Adicionar Passageiro
            </button>
            
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

export default {
    data: () => {
        const { params } = useRoute();
        
        const periods = [{
            id: 1,
            description: '12:00 - 18:00',
            passengers: [
                {
                    id: 1,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Thiago Henrique de Araujo'
                },
                {
                    id: 2,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Fernando Henrique de Araujo'
                },
                {
                    id: 3,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Abel Henrique de Araujo'
                },
                {
                    id: 4,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Caique Henrique de Araujo'
                }
            ]
        },
        {
            id: 2,
            description: '07:00 - 12:00',
            passengers: [
                {
                    id: 5,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Jorge Henrique de Araujo'
                },
                {
                    id: 6,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Eder Henrique de Araujo'
                },
                {
                    id: 8,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Robson Henrique de Araujo'
                },
                {
                    id: 9,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Rafael Henrique de Araujo'
                }
            ]
        },
        {
            id: 3,
            description: '08:00 - 13:00',
            passengers: [
                {
                    id: 11,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Felipe Henrique de Araujo'
                },
                {
                    id: 21,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Gabriel Henrique de Araujo'
                },
                {
                    id: 31,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Nicholas Henrique de Araujo'
                },
                {
                    id: 41,
                    responsavel: {
                        id:1
                    },
                    endereco: {
                        id: 1
                    },
                    name: 'Lucas Henrique de Araujo'
                }
            ]
        }];

        return { params, periods }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        goToViewAddress(id) {
            this.$router.push(`/address/${id}`);
        },
        goToViewResponsible(id) {
            this.$router.push(`/responsible/${id}`);
        },
        goToViewPassenger(id) {
            this.$router.push(`/passenger/${id}`);
        },
        goToViewCreatePassenger() {
            this.$router.push('/passengers');
        }
    }
}
</script>

<style scoped>

.iconButtonTable {
    font-size: 20px !important;
}
</style>