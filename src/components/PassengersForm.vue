<template>
  <div class="container mt-3">
        <div>
            <div>
                <h2>Identificação</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container col-md-6">
                    <label for="nameSchool">Nome do(a) Passageiro(a)</label>
                    <input class="width100" type="text" id="nameSchool" name="nameSchool" v-model="Passenger.nameSchool" placeholder="Digite o nome">
                </div>

                <div class="input-container col-md-6">
                    <label for="responsiblePassenger">Responsavel</label>
                    <v-select 
                        class="input-select"
                        v-model="Passenger.selectedResponsiblePassengers" 
                        :options="responsibles" 
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

            <div>
                <h2>Localização</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label for="streetAddress">Rua</label>
                    <input type="text" id="streetAddress" name="streetAddress" v-model="Address.streetAddress" placeholder="Rua">
                </div>

                <div class="input-container">
                    <label for="numberStreetAddress">Número</label>
                    <input type="text" id="numberStreetAddress" name="numberStreetAddress" v-model="Address.numberStreetAddress" placeholder="Número">
                </div>

                <div class="input-container">
                    <label for="cepAddress">CEP</label>
                    <input type="text" id="cepAddress" name="cepAddress" v-model="Address.cepAddress" placeholder="CEP">
                </div>

                <div class="input-container col-md-6">
                    <label for="period">Selecione o Estado</label>
                    <v-select 
                        class="input-select"
                        v-model="Address.stateAddress" 
                        :options="states" 
                        @search="doSearchPeriod">
                    </v-select>
                </div>

                <div class="input-container col-md-5">
                    <label for="period">Selecione o UF</label>
                    <v-select 
                        class="input-select"
                        v-model="Address.ufAddress" 
                        :options="ufsStates" 
                        @search="doSearchPeriod">
                    </v-select>
                </div>

                <div class="input-container">
                    <label for="bairroAddress">Bairro</label>
                    <input type="text" id="bairroAddress" name="bairroAddress" v-model="Address.bairroAddress" placeholder="Bairro">
                </div>

                <div class="input-container">
                    <label for="cityAddress">Cidade</label>
                    <input type="text" id="cityAddress" name="cityAddress" v-model="Address.cityAddress" placeholder="Cidade">
                </div>

                <div class="input-container">
                    <label for="complementAddress">Complemento</label>
                    <input type="text" id="complementAddress" name="complementAddress" v-model="Address.complementAddress" placeholder="Complemento">
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

export default {
    name: 'PassengersForm',
    data: function() {
        const Passenger = {
            namePassenger: '',
            selectedResponsiblePassengers: [],
            selectedSchoolPassenger: [],
            selectedPeriodPassenger: [],
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
            'Manoel Tavera de Araújo', 
            'Silvia Regina da Conceição de Araújo', 
            'Thiago Henrique de Araujo'
        ];
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

        return { Address, Passenger, periods, responsibles, schools, states, ufsStates }
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
    }
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
</style>