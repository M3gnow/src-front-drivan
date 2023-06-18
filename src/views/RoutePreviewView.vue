<template>
    <TheHeader/>

    <div class="container mt-1">
        <div class="d-flex">
            <h1 class="m-2">
                <i class="bi bi-sign-turn-slight-right m-1" />
            </h1>
            <h1 class="m-2 textWhite">
                Rota
            </h1>
        </div>
    </div>

    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex justify-content-end">
                <label class="textWhite">Neste momento</label>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <h1 class="textWhite">
                        Confirmar Rota
                    </h1>
                </div>

                <div class="d-flex">
                    <h2 class="textWhite">
                        {{ labelTimeNow }}
                    </h2>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="container mt-4">
        <div class="card col-md-9">
            <div class="d-flex justify-content-between">
                <div>
                    <h3 class="text-center">Passageiro</h3>
                </div>

                <div>
                    <h3 class="text-center">
                        {{ movimentacoes.tipo === 1 ? 'Embarque' : 'Destino' }}
                    </h3>
                </div>

                <div>
                    <h3 class="text-center">
                        {{ movimentacoes.tipo === 2 ? 'Destino' : 'Embarque' }}
                    </h3>
                </div>
            </div>

            <div class="d-flex justify-content-between" v-for="passenger of movimentacoes.periodo.passageiros" v-bind:key="passenger.id">
                <div>
                    <h3 class="text-center">{{ passenger.nome }}</h3>
                </div>

                <div>
                    <h3 class="text-center">{{ movimentacoes.escola.endereco.rua }}</h3>
                </div>

                <div>
                    <h3 class="text-center">Destino</h3>
                </div>
            </div>
        </div>  
    </div> -->
    <div class="container">
        <table class="table table-hover mt-3 table-bordered">
            <thead>
                <tr>
                    <th class="text-center textWhite" scope="col">Passageiro</th>
                    <th class="text-center textWhite" scope="col">Embarque</th>
                    <th class="text-center textWhite" scope="col">Destino</th>
                    <th class="text-center textWhite" scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="moviment of moviments" v-bind:key="moviment.id">
                    <td class="text-center textWhite">{{ moviment.passageiro.nome }}</td>
                    <td class="text-center textWhite">{{ moviment.embarque }}</td>
                    <td class="text-center textWhite">{{ moviment.destino }}</td>
                    <td class="text-center textWhite">
                        <button class="btn btn-danger m-1">
                            Remover
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="container d-flex justify-content-end">
        <button class="btn btn-success m-1">
            Iniciar Rota
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
    name: 'RoutePreviewView',
    data: () => {
        const { params } = useRoute();
        const labelTimeNow = '';
        const moviments = [
            {
                id: 1,
                passageiro: {
                    id: 1,
                    nome: 'Teste'
                },
                embarque: 'Rua teste',
                destino: 'Rua teste'
            },
            {
                id: 2,
                passageiro: {
                id: 2,
                nome: 'Teste'
                },
                embarque: 'Rua teste',
                destino: 'Rua teste'
            }
        ]


        return { params, labelTimeNow, moviments }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        formatDate(dateForFormat) {
            const dateTime = new Date(dateForFormat);
            const day = dateTime.getDay() > 9 ? dateTime.getDay() : `0${dateTime.getDay()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

            const date = `${day}/${mounth}/${year} - ${hours}:${minutes}`

            return date;
        }
    },
    mounted() {
        const date = new Date();
        const labelDateTimeNow = this.formatDate(date);
        this.labelTimeNow = labelDateTimeNow
    }
}
</script>

<style>

</style>