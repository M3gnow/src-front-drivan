<template>
    <div class="container mt-3">
        <div>
            <h2 class="textWhite">Identificação</h2>
        </div>

        <div class="card p-3 cardColorBorderItinerary">
            <div class="d-flex justify-content-between">
                <div class="input-container descriptionPeriod">
                    <label for="phoneSchool" class="textWhite">Descrição do Itinerario</label>
                    <input class="m-1 descriptionPeriod" v-model="ItineraryDescription" placeholder="Descrição">
                </div>
            </div>
        </div>

        <div class="mt-3">
            <h2 class="textWhite">Selecione as escolas</h2>
        </div>

        <div class="card p-3 cardColorBorderItinerary d-flex justify-content-between">
            <div class="input-container col-md-12">
                <label for="phoneSchool" class="textWhite">Escolas</label>
                <div>
                    <v-select 
                        class="input-select"
                        v-model="schoolSelected"
                        :options="schools"
                        label="descricao"
                        multiple>
                    </v-select>
                </div>
            </div>
        </div>
        
        <div v-if="schoolSelected.length">
            <div class="mt-3">
                <h2 class="textWhite">Monte o Itinerário</h2>
            </div>

            <div class="card p-3 cardColorBorderItinerary mt-3" v-bind:key="school.id" v-for="school of schoolSelected">
                <div class="input-container descriptionPeriod">
                    <label for="phoneSchool" class="textWhite">Escola</label>
                    <input class="m-1 descriptionPeriod" v-model="school.descricao" disabled>
                </div>

                <div class="card p-3 cardColorBorderItinerary mt-3" v-bind:key="period.id" v-for="period of school.periodos">
                    <div class="d-flex justify-content-between">
                        <div class="input-container col-md-4">
                            <label for="phoneSchool" class="textWhite">Período</label>
                            <div>
                                <input class="m-1 descriptionPeriod" v-model="period.descricao" disabled>
                            </div>
                        </div>

                        <div class="input-container">
                            <div class="d-flex justify-content-around">
                                <label for="phoneSchool" class="textWhite">Tipo do Período</label>
                                <label v-if=" period.entrada" class="textWhite">Entrada: {{ period.entrada }}</label>
                                <label v-if=" period.saida" class="textWhite">Saida: {{ period.saida }}</label>
                            </div>
                            <div>
                                <v-select 
                                    class="input-select"
                                    v-model="period.type" 
                                    :options="getTypesPeriods(period)" 
                                    >
                                </v-select>
                            </div>
                        </div>

                        <div class="mt-3" style="align-self: center;">
                            <button type="submit" class="btn btn-warning" @click="addItinerario(school.id, period.id)">
                                Incluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3">
                <h2 class="textWhite">Itinerários Confirmados</h2>
            </div>

            <div>
                <table class="table table-hover mt-3 table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center textWhite" scope="col">Escola</th>
                            <th class="text-center textWhite" scope="col">Periodo</th>
                            <th class="text-center textWhite" scope="col">Tipo</th>
                            <th class="text-center textWhite" scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="itinerary of itinerariesConfirmed">
                            <td class="text-center textWhite">{{ itinerary.escolaDescription }}</td>
                            <td class="text-center textWhite">{{ itinerary.periodoDescription }}</td>
                            <td class="text-center textWhite">{{ itinerary.tipoMovimentacao === 1 ? 'entrada' : 'saida' }}</td>
                            <td class="text-center textWhite">
                                <button class="btn btn-outline-danger m-1" @click="removeItinerary(itinerary.escolaId, itinerary.periodoId)">
                                    Remover
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-3 d-flex justify-content-end" v-if="itinerariesConfirmed.length">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning" @click="sendCreate(user.id, ItineraryDescription, itinerariesConfirmed)">Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserStorage } from '../storage/UserStorage'
import { createItinerary } from '../services/ItineraryService'
import { getAllSchoolByConductorId } from '../services/SchoolService'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'ItineraryForm',
    data: function() {
        let user = {};

        const ItineraryDescription = ''
        const schoolSelected = []
        const itinerariesConfirmed = [];
        const schools = []
        
        return { user, ItineraryDescription, schools, schoolSelected, schools, itinerariesConfirmed }
    },
    mounted(){
        this.getUserLogged();

        getAllSchoolByConductorId(this.user.id)
            .then((schoolDataResult) => {
                this.schools =  schoolDataResult;
            })
            .catch((e) => console.log('error getAllSchoolByConductorId'))
    },
    methods:{
        getUserLogged(){
            this.user = getUserStorage();
        },
        getSchools(){
            
        },
        getTypesPeriods(periodData) {
            const typesPeriods = [];

            if (periodData.entrada && periodData.saida) {
                typesPeriods.push(`entrada`);
                typesPeriods.push('saida');
            }
                
            if (!typesPeriods.length) {
                if (periodData.entrada) {
                    typesPeriods.push('entrada');
                }

                if (periodData.saida) {
                    typesPeriods.push('saida');
                }
            }

            return typesPeriods;
        },
        addItinerario(schoolId, periodId) {
            const schoolItinerary = this.schoolSelected.find((school) => school.id === schoolId);
            const periodItinerary = schoolItinerary.periodos.find((period) => period.id === periodId);

            const existItinerary = this.itinerariesConfirmed
                .filter((itinerary) => itinerary.escolaId === schoolId && itinerary.periodoId === periodId);
            
            if (!existItinerary.length) {
                this.itinerariesConfirmed.push({
                    "escolaId": schoolItinerary.id,
                    "escolaDescription": schoolItinerary.descricao,
                    "periodoId": periodItinerary.id,
                    "periodoDescription": periodItinerary.descricao,
                    "tipoMovimentacao": periodItinerary.type === 'entrada' ? 1 : 2,
                })    
            } else {
                alert('Esse período já foi selecionado, favor removê-lo')
            }
        },
        removeItinerary(schoolId, periodId) {
            this.itinerariesConfirmed = this.itinerariesConfirmed
                .filter((itinerary) => !(itinerary.escolaId === schoolId && itinerary.periodoId === periodId));
        },
        sendCreate(conductorId, itineraryDescription, itinerariesConfirmed) {
            const dataCreateItinerary = {
                descricao: itineraryDescription,
                condutorId: conductorId,
                itinerarios: itinerariesConfirmed
            }

            const promise = createItinerary(dataCreateItinerary)
            
            promise.then(
                (result) => {
                    setTimeout(() => {
                        this.$router.push(`/conductor/${this.user.id}/itineraries`);
                    }, 1000)
                }
            )

            toast.promise(
                promise,
                {
                    pending: 'Processando o cadastro de itínerario',
                    success: 'cadastro realizado com sucesso 👌',
                    error: 'Ocorreu um erro 🤯',
                },
                {
                    position: toast.POSITION.BOTTOM_CENTER,
                },
            );
        }

    },
}
</script>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-left: 4px solid #FCBA03;
        padding: 5px 10px;
    }

    label {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
        
        color: #222;
        
    }

    input {
        padding: 5px 10px;
        width: 400px !important;
    }

    .cardColorBorderItinerary {
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
        border-color: white !important;
    }

    .textWhite {
        color: white !important;
    }
</style>