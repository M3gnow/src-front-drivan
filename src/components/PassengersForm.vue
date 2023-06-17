<template>
    <div class="container mt-3">
        <div class="mt-3">
            <div>
                <h2 class="textWhite mt-3">Identificação</h2>
            </div>

            <div class="card p-3 cardColorBorder layoutFormnDefault">
                <div class="d-flex justify-content-between">
                    <div class="input-container col-md-6">
                        <label class="textWhite" for="namePassenger">Nome do(a) Passageiro(a) *</label>
                        <input class="width100" type="text" id="namePassenger" name="namePassenger" v-model="Passenger.namePassenger" placeholder="Digite o nome">
                    </div>

                    <div class="input-container col-md-6">
                        <label class="textWhite" for="responsiblePassenger">Responsavel (CPF)</label>
                        <input class="width100" type="text" id="responsiblePassengers" name="responsiblePassengers" v-model="Passenger.responsiblePassengers" placeholder="Digite o cpf" @change="$event => onlyNumber($event)">
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-3">
                    <div class="input-container col-md-6">
                        <label class="textWhite" for="schoolPassenger">Escola</label>
                        <input class="width100" type="text" id="selectedSchoolPassenger" name="selectedSchoolPassenger" v-model="Passenger.selectedSchoolPassenger" placeholder="" disabled>
                    </div>

                    <div class="input-container col-md-6">
                        <label class="textWhite" for="period">Periodo</label>
                        <input class="width100" type="text" id="selectedPeriodPassenger" name="selectedPeriodPassenger" v-model="Passenger.selectedPeriodPassenger" placeholder="" disabled>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="textWhite mt-3">Localização</h2>
            </div>

            <div class="card p-3 cardColorBorder layoutFormnDefault">
                <div class="d-flex justify-content-between">
                    <div class="input-container">
                        <label class="textWhite" for="streetAddress">Rua</label>
                        <input type="text" id="streetAddress" name="streetAddress" v-model="Address.streetAddress" placeholder="Rua">
                    </div>

                    <div class="input-container">
                        <label class="textWhite" for="numberStreetAddress">Número</label>
                        <input type="text" id="numberStreetAddress" name="numberStreetAddress" v-model="Address.numberStreetAddress" placeholder="Número">
                    </div>

                    <div class="input-container">
                        <label class="textWhite" for="cepAddress">CEP</label>
                        <input type="text" id="cepAddress" name="cepAddress" v-model="Address.cepAddress" placeholder="CEP">
                    </div>
                </div>

                <div class="d-flex">
                    <div class="input-container">
                        <label class="textWhite" for="period">Selecione o Estado</label>
                        <v-select 
                            class="input-select"
                            v-model="Address.stateAddress" 
                            :options="states" 
                            @search="doSearchPeriod">
                        </v-select>
                    </div>

                    <div class="input-container">
                        <label class="textWhite" for="period">Selecione o UF</label>
                        <v-select 
                            class="input-select"
                            v-model="Address.ufAddress" 
                            :options="ufsStates" 
                            @search="doSearchPeriod">
                        </v-select>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between">
                    <div class="input-container">
                        <label class="textWhite" for="bairroAddress">Bairro</label>
                        <input type="text" id="bairroAddress" name="bairroAddress" v-model="Address.bairroAddress" placeholder="Bairro">
                    </div>

                    <div class="input-container">
                        <label class="textWhite" for="cityAddress">Cidade</label>
                        <input type="text" id="cityAddress" name="cityAddress" v-model="Address.cityAddress" placeholder="Cidade">
                    </div>

                    <div class="input-container">
                        <label class="textWhite" for="complementAddress">Complemento</label>
                        <input type="text" id="complementAddress" name="complementAddress" v-model="Address.complementAddress" placeholder="Complemento">
                    </div>
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3" @click="cancel()">Cancelar</button>
                <button type="submit" class="btn btn-warning" @click="sendCreate()">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import { createPassenger } from '../services/PassergerService';
import { builderPassengerFromService } from '../model/passengerModel';
import { useRoute } from 'vue-router'
import { getSchoolById } from '../services/SchoolService'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'PassengersForm',
    data: function() {
        const { params } = useRoute();
        const Passenger = {
            namePassenger: '',
            responsiblePassengers: '',
            selectedSchoolPassenger: '',
            selectedPeriodPassenger: '',
            periodId: '',
        };

        const Address = {
            streetAddress: '',
            numberStreetAddress: '',
            cepAddress: '',
            bairroAddress: '',
            cityAddress: '',
            stateAddress: '',
            ufAddress: '',
            complementAddress: ''
        }

        const responsibles = [
            '47592262819',
            '47592262820',
            '47592262821'
        ];

        const schools = [];

        const periods = [];

         const states = [
            'Acre',
            'Alagoas',
            'Amapá',
            'Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão',
            'Mato Grosso',
            'Mato Grosso do Sul',
            'Minas Gerais',
            'Pará',
            'Paraíba',
            'Paraná',
            'Pernambuco',
            'Piauí',
            'Rio de Janeiro',
            'Rio Grande do Norte',
            'Rio Grande do Sul',
            'Rondônia',
            'Roraima',
            'Santa Catarina',
            'São Paulo',
            'Sergipe',
            'Tocantins'
        ];

        const ufsStates = [
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO'
        ];

        return { Address, Passenger, periods, responsibles, schools, states, ufsStates, params }
    },
    methods: {
        doSearchResponsible(event) {
            console.log(event)
        },
        doSearchSchool(event) {
            console.log(event)
        },
        doSearchPeriod(event) {
            console.log(event)
        },
        cancel() {
            this.Passenger = {
                namePassenger: '',
                responsiblePassengers: [],
                selectedSchoolPassenger: [],
                selectedPeriodPassenger: [],
            };

            this.Address = {
                streetAddress: '',
                numberStreetAddress: '',
                cepAddress: '',
                bairroAddress: '',
                cityAddress: '',
                stateAddress: '',
                ufAddress: '',
                complementAddress: ''
            }
        },
        checkFields(object) {
            for (const field in object) {
                if (field !== 'responsiblePassengers') {
                    if (!object[field]) {
                        return false;
                    }
                }
            }

            return true;
        },
        sendCreate() {
            if (!this.checkFields(this.Passenger)) {
                return alert('Falta dados do passageiro')
            }

            if (this.Passenger.responsiblePassengers && this.Passenger.responsiblePassengers.length < 11) {
                return alert('Quantidade de digitos de CPF inválido!')
            }

            if (!this.checkFields(this.Address)) {
                return alert('Falta dados de localização!')
            }

            const passenger = builderPassengerFromService(this.Passenger, this.Address, this)
            const promise = createPassenger(passenger);
            
            promise.then(() => {
                setTimeout(() => this.$router.push(`/school/${this.params.school_id}/periods`), 1000)
            });

            toast.promise(
                promise,
                {
                    pending: 'Processando o cadastro de Passageiro',
                    success: 'cadastro realizado com sucesso 👌',
                    error: 'Ocorreu um erro 🤯',
                },
                {
                    position: toast.POSITION.BOTTOM_CENTER,
                },
            );
        },
        getData(schoolId, periodId) {
            getSchoolById(schoolId)
                .then((data) => {
                    this.Passenger.selectedSchoolPassenger = data.descricao;
                    this.Passenger.selectedPeriodPassenger = this.builderLabelPeriod(data, periodId)
                    this.Passenger.periodId = periodId;
                })
                .catch((e) =>{
                    console.log('Error consult schools', e.message);
                })
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
        onlyNumber(event) {
            if (event.target.value && event.target.value.length <= 11) {
                this.Passenger.responsiblePassengers = event.target.value.replace(/\D/g, '');
            } else {
                this.Passenger.responsiblePassengers = '';
            }
        },
    },
    mounted() {
        this.getData(this.params.school_id, this.params.period_id);
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

    .width100 {
        width: 100% !important;
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

    .input-select {
        background-color: white; 
        height:38px;
    }

    .textWhite {
        color: white !important;
    }

    .cardColorBorder {
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
        border-color: white !important;
    }
</style>