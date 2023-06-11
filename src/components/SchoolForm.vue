<template>
  <div class="container mt-3">
        <div>
            <div>
                <h2>Identificação e contato</h2>
            </div>

            <div class="card p-3 cardColorBorder">                
                <div class="d-flex layoutFormnDefault justify-content-between">
                    <div class="input-container">
                        <label for="nameSchool">Nome da escola</label>
                        <input class="width350px" type="text" id="nameSchool" name="nameSchool" v-model="School.nameSchool" placeholder="Nome da escola">
                    </div>

                    <div class="input-container">
                        <label for="emailSchool">E-mail</label>
                        <input class="width350px" type="text" id="emailSchool" name="emailSchool" v-model="School.emailSchool" placeholder="E-mail">
                    </div>

                    <div class="input-container">
                        <label for="phoneSchool">Telefone</label>
                        <input class="width350px" type="text" id="phoneSchool" name="phoneSchool" v-model="School.phoneSchool" placeholder="Telefone">
                    </div>
                </div>
            </div>

            <div>
                <h2>Períodos</h2>
            </div>

            <div class="card p-3 cardColorBorder">
                <div class="d-flex justify-content-between">
                    <div class="input-container descriptionPeriod">
                        <label for="phoneSchool">Descrição</label>
                        <input class="m-1 descriptionPeriod" v-model="newPeriods.description" placeholder="Descrição">
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-2" style="align-items: center;">
                    <div class="input-container">
                        <label for="phoneSchool">Entrada</label>
                        <div class="d-flex">
                            <input class="m-1 width200px" v-model="newPeriods.inputHour" placeholder="Hora de entrada" v-on:change="onlyNumberInputHour">
                            <h5 class="m-2">:</h5>
                            <input class="m-1 width200px" v-model="newPeriods.inputMin" placeholder="Min de entrada" v-on:change="onlyNumberInputMin">
                        </div>
                        
                    </div>

                    <div class="input-container">
                        <label for="phoneSchool">Saída</label>
                        <div class="d-flex">
                            <input class="m-1 width200px" v-model="newPeriods.ouputHour" placeholder="Hora de Saída" v-on:change="onlyNumberOutputHour">
                            <h5 class="m-2">:</h5>
                            <input class="m-1 width200px" v-model="newPeriods.ouputMin" placeholder="Min de entrada" v-on:change="onlyNumberOutputMin">
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit" class="btn btn-warning" @click="addNewPeriod(newPeriods)">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>

            <div class="card p-3 cardColorBorder mt-3" v-if="periods.labels.length">
                <div class="input-container col-md-12 mt-3">
                    <label for="period">Periodos selecionados</label>

                    <v-select 
                        multiple
                        class="input-select"
                        v-model="periods.labels" 
                        :options="periods.labels"
                        v-on:change="changeRoute"
                        @search="doSearchPeriod">
                    </v-select>
                </div>
            </div>

            <div class="mt-4">
                <h2>Localização</h2>
            </div>

            <div class="card cardColorBorder p-3">
                <div class="layoutFormnDefault mt-4">
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
                        <input class="width200px" type="text" id="cepAddress" name="cepAddress" v-model="Address.cepAddress" placeholder="CEP">
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
                        <input class="width200px" type="text" id="complementAddress" name="complementAddress" v-model="Address.complementAddress" placeholder="Complemento">
                    </div>                
                </div>
            </div>

            <!-- <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning">Enviar</button>
            </div> -->

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3" @click="cancel()">Cancelar</button>
                <button type="submit" class="btn btn-warning" @click="sendCreate()">Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SchoolForm',
    data: function() {
        const School = {
            nameSchool: '',
            emailSchool: '',
            phoneSchool: '',
            periods: []
        };

        const Address = {
            streetAddress: '',
            numberStreetAddress: '',
            cepAddress: '',
            bairroAddress: '',
            cityAddress: '',
            stateAddress: [],
            ufAddress: [],
            complementAddress: ''
        }

        const periods = {
            itens: [],
            labels: []
        }

        const newPeriods = {
            description: '',
            inputHour: '',
            inputMin: '',
            ouputHour: '',
            ouputMin: '',
        }

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

        return { Address, School, periods, states, ufsStates, newPeriods }
    },
    methods: {
        addNewPeriod(newPeriods) {
            let labelPeriod = '';

            if (!newPeriods.description) {
                return alert('Descrição é obrigatório')
            }

            const inputTimeExist = newPeriods.inputHour && newPeriods.inputMin;
            const outputTimeExist = newPeriods.ouputHour && newPeriods.ouputMin;

            if (!inputTimeExist)
                return alert('Entrada parcialmente não preenchida')

            if (!outputTimeExist)
                return alert('Saída parcialmente não preenchida')

            if (!inputTimeExist && !outputTimeExist)
                return alert('Entrada ou saída é obrigatório')

            const dataPeriod = {
                descricao: newPeriods.description,
                entrada: inputTimeExist ? `${newPeriods.inputHour}:${newPeriods.inputMin}` : null,
                saida: outputTimeExist ? `${newPeriods.ouputHour}:${newPeriods.ouputMin}` : null,
            }
            
            labelPeriod = dataPeriod.descricao;
            labelPeriod = inputTimeExist ? `${labelPeriod} - (E) ${dataPeriod.entrada}`: labelPeriod;
            labelPeriod = outputTimeExist ? `${labelPeriod} - (S) ${dataPeriod.saida}`: labelPeriod;

            this.periods.itens.push(dataPeriod);
            this.periods.labels.push(labelPeriod);

            // console.log(this.periods.labels);
        },
        checkFields(object) {
            for (const field in object) {
                if (!object[field]) {
                    return false;
                }
            }

            return true;
        },
        onlyNumberInputHour(event) {
            if (event.target.value) {
                this.newPeriods.inputHour = event.target.value.replace(/\D/g, '');
            }

            if (parseInt(this.newPeriods.inputHour) > 23) {
                this.newPeriods.inputHour = ''
            }

            this.newPeriods.inputHour = this.newPeriods.inputHour.slice(0, 2);
        },
        onlyNumberOutputHour(event) {
            if (event.target.value) {
                this.newPeriods.ouputHour = event.target.value.replace(/\D/g, '');
            }

            if (parseInt(this.newPeriods.ouputHour) > 23) {
                this.newPeriods.ouputHour = ''
            }

            this.newPeriods.ouputHour = this.newPeriods.ouputHour.slice(0, 2);
        },
        onlyNumberInputMin(event) {
            if (event.target.value) {
                this.newPeriods.inputMin = event.target.value.replace(/\D/g, '');
            }

            if (parseInt(this.newPeriods.inputMin) > 59) {
                this.newPeriods.inputMin = ''
            }

            this.newPeriods.inputMin = this.newPeriods.inputMin.slice(0, 2);
        },
        onlyNumberOutputMin(event) {
            if (event.target.value) {
                this.newPeriods.ouputMin = event.target.value.replace(/\D/g, '');
            }

            if (parseInt(this.newPeriods.ouputMin) > 59) {
                this.newPeriods.ouputMin = ''
            }

            this.newPeriods.ouputMin = this.newPeriods.ouputMin.slice(0, 2);
        },
        doSearchPeriod() {
            console.log()
        },
        setEmptyNewPeriods() {
            this.newPeriods = {
                description: '',
                inputHour: '',
                inputMin: '',
                ouputHour: '',
                ouputMin: '',
            }
        },
        cancel() {
            this.School = {
                nameSchool: '',
                emailSchool: '',
                phoneSchool: '',
            };

            this.Address = {
                streetAddress: '',
                numberStreetAddress: '',
                cepAddress: '',
                bairroAddress: '',
                cityAddress: '',
                stateAddress: [],
                ufAddress: [],
                complementAddress: ''
            }

            this.periods = {
                itens: [],
                labels: []
            }

            this.newPeriods = {
                description: '',
                inputHour: '',
                inputMin: '',
                ouputHour: '',
                ouputMin: '',
            }
        },
        sendCreate() {
            if (!this.checkFields(this.Address)) {
                return alert('Localização não foi preenchida')
            }

            if (!this.checkFields(this.School)) {
                return alert('Localização não foi preenchida')
            }
        },
        changeRoute() {
            console.log(this.periods);
        }
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

    .width200px {
        width: 200px !important;
    }

    .width350px {
        width: 350px !important;
    }

    .descriptionPeriod {
        width: 100% !important;
    }

    .cardColorBorder {
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
        border-color: aquamarine !important;
    }
</style>