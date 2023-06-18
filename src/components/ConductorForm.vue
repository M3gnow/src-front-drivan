<template>
    <div class="container mt-3">
        <div>
            <div>
                <h2 class="textWhite">Dados Pessoais</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label class="textWhite" for="name">Nome do condutor</label>
                    <input type="text" id="name" name="name" v-model="profileConductor.name" placeholder="Digite seu nome">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="cpf">CPF do condutor</label>
                    <input type="text" id="cpf" name="cpf" v-model="profileConductor.cpf" placeholder="Digite seu CPF">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="cpf">CNH do condutor</label>
                    <input type="text" id="cnh" name="cnh" v-model="profileConductor.cnh" placeholder="Digite sua CNH">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="dataNascimento">Data de Nascimento</label>
                    <div class="input-group">
                        <input type="date" class="form-control" id="dtaNascimento" v-model="profileConductor.dtaNascimento">
                    </div>
                </div>

                <div class="input-container">
                    <label class="textWhite" for="email">E-mail do condutor</label>
                    <input type="text" id="email" name="email" v-model="profileConductor.email" placeholder="Digite seu e-mail">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="phone">Celular do condutor</label>
                    <input type="text" id="phone" name="phone" v-model="profileConductor.phone" placeholder="(XX)XXXXX-XXXX">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="password">Senha de acesso Drivan</label>
                    <input type="password" id="password" name="password" v-model="profileConductor.password" placeholder="Digite sua senha">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="secondPassword">Confirme sua senha</label>
                    <input type="password" id="secondPassword" name="secondPassword" v-model="profileConductor.secondPassword" placeholder="Digite sua senha novamente">
                </div>
            </div>

            <div class="mt-3">
                <h2 class="textWhite">Informações do seu Veículo</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label class="textWhite" for="modelVehicle">Modelo do veículo</label>
                    <input type="text" id="modelVehicle" name="modelVehicle" v-model="vehicle.modelVehicle" placeholder="Digite o modelo">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="boardVehicle">Placa do veículo</label>
                    <input type="text" id="boardVehicle" name="boardVehicle" v-model="vehicle.boardVehicle" placeholder="Digite a placa">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="colorVehicle">Cor do veículo</label>
                    <input type="text" id="colorVehicle" name="colorVehicle" v-model="vehicle.colorVehicle" placeholder="Digite a cor">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="capacityVehicle">Capacidade do veículo</label>
                    <input 
                        id="capacityVehicle"
                        type="text"
                        name="capacityVehicle" 
                        v-model="vehicle.capacityVehicle"
                        v-on:change="onlyNumber"
                        placeholder="Digite a capacidade">
                </div>
            </div>

            <div>
                <h2 class="textWhite">Localização</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label class="textWhite" for="streetAddress">Rua</label>
                    <input type="text" id="streetAddress" name="streetAddress" v-model="adressConductor.streetAddress" placeholder="Rua">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="numberStreetAddress">Número</label>
                    <input type="text" id="numberStreetAddress" name="numberStreetAddress" v-model="adressConductor.numberStreetAddress" placeholder="Número">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="cepAddress">CEP</label>
                    <input type="text" id="cepAddress" name="cepAddress" v-model="adressConductor.cepAddress" placeholder="CEP">
                </div>

                <div class="input-container col-md-6">
                    <label class="textWhite" for="period">Selecione o Estado</label>
                    <v-select 
                        class="input-select"
                        v-model="adressConductor.stateAddress" 
                        :options="states" 
                        @search="doSearchPeriod">
                    </v-select>
                </div>

                <div class="input-container col-md-5">
                    <label class="textWhite" for="period">Selecione o UF</label>
                    <v-select 
                        class="input-select"
                        v-model="adressConductor.ufAddress" 
                        :options="ufsStates" 
                        @search="doSearchPeriod">
                    </v-select>
                </div>

                <div class="input-container">
                    <label class="textWhite" for="bairroAddress">Bairro</label>
                    <input type="text" id="bairroAddress" name="bairroAddress" v-model="adressConductor.bairroAddress" placeholder="Bairro">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="cityAddress">Cidade</label>
                    <input type="text" id="cityAddress" name="cityAddress" v-model="adressConductor.cityAddress" placeholder="Cidade">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="complementAddress">Complemento</label>
                    <input type="text" id="complementAddress" name="complementAddress" v-model="adressConductor.complementAddress" placeholder="Complemento">
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
import { createConductor } from '../services/ConductorService';
import { builderConductorFromService } from '../model/conductorModel';

export default {
    name: 'ConductorForm',
    data: function() {
        const vehicle = {
            modelVehicle: '',
            boardVehicle: '',
            colorVehicle: '',
            capacityVehicle: '',
        };

        const profileConductor = {
            name: '',
            cpf: '',
            cnh: '',
            email: '',
            phone: '',
            password: '',
            secondPassword: '',
            dtaNascimento: ''
        };

        const adressConductor = {
            cepAddress: '',
            streetAddress: '',
            numberStreetAddress: '',
            bairroAddress: '',
            cityAddress: '',
            stateAddress: '',
            ufAddress: '',
            complementAddress: ''
        };

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

        return { vehicle, profileConductor, adressConductor, states, ufsStates }
    },
    methods: {
        sendCreate() {
            if (!this.checkFieldsProfileConductor(this.profileConductor)) {
                return alert('Falta dados do condutor')
            }

            if (!this.checkBothPasswords(this.profileConductor)) {
                return alert('Senhas estão diferentes')
            }

            if (!this.checkFieldsVehicle(this.vehicle)) {
                return alert('Falta dados do veiculo')
            }

            if (this.vehicle.capacityVehicle > 40) {
                this.vehicle.capacityVehicle = ''
                return alert('Capacidade máxima é 40')
            }

            if (!this.validatePassword(this.profileConductor.password)) {
                return alert('Senha formato incorreto')
            }

            if (!this.validatePassword(this.profileConductor.secondPassword)) {
                return alert('Senha formato incorreto')
            }

            const conductor = builderConductorFromService (this.profileConductor, this.vehicle, this.adressConductor)
            
            console.log('conductor', conductor);

            createConductor(conductor)
                .then(response => {
                    this.$router.push('/');
                })
                .catch(err => {

                    return alert('Cadastro condutor realizado sem sucesso!')
                })

        },
        cancel() {
            this.vehicle = {
                modelVehicle: '',
                boardVehicle: '',
                colorVehicle: '',
                capacityVehicle: '',
            };

            this.profileConductor = {
                name: '',
                cpf: '',
                cnh: '',
                email: '',
                phone: '',
                password: '',
                secondPassword: '',
                dtaNascimento: ''
            };

            this.adressConductor = {
                cepAddress: '',
                streetAddress: '',
                numberStreetAddress: '',
                bairroAddress: '',
                cityAddress: '',
                stateAddress: '',
                ufAddress: '',
                complementAddress: ''
            };
        },
        checkFieldsVehicle (vehicle) {
            for (const field in vehicle) {
                if (!vehicle[field]) {
                    return false;
                }
            }    

            return true;
        },
        checkFieldsProfileConductor(conductor) {
            for (const field in conductor) {
                if (!conductor[field]) {
                    return false;
                }
            }

            return true;
        },
        checkBothPasswords(conductor) {
            if (conductor.password === conductor.secondPassword) {
                return true;
            }

            return false;
        },
        validatePassword(password) {
            const regexValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

            if (regexValidate.test(password)) {
                return true;
            }

            return false;
        },
        onlyNumber(event) {
            if (event.target.value) {
                this.vehicle.capacityVehicle = event.target.value.replace(/\D/g, '');
            } else {
                this.vehicle.capacityVehicle = '';
            }
        },
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

    .textWhite {
        color: white !important;
    }

</style>