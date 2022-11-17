<template>
    <div class="container mt-3">
        <div>
            <div>
                <h2>Dados Pessoais</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label for="name">Nome do condutor</label>
                    <input type="text" id="name" name="name" v-model="profileConductor.name" placeholder="Digite seu nome">
                </div>

                <div class="input-container">
                    <label for="cpf">CPF do condutor</label>
                    <input type="text" id="cpf" name="cpf" v-model="profileConductor.cpf" placeholder="Digite seu CPF">
                </div>

                <div class="input-container">
                    <label for="cpf">CNH do condutor</label>
                    <input type="text" id="cnh" name="cnh" v-model="profileConductor.cnh" placeholder="Digite sua CNH">
                </div>

                <div class="input-container">
                    <label for="email">E-mail do condutor</label>
                    <input type="text" id="email" name="email" v-model="profileConductor.email" placeholder="Digite seu e-mail">
                </div>

                <div class="input-container">
                    <label for="phone">Celular do condutor</label>
                    <input type="text" id="phone" name="phone" v-model="profileConductor.phone" placeholder="(XX)XXXXX-XXXX">
                </div>

                <div class="input-container">
                    <label for="password">Senha de acesso Drivan</label>
                    <input type="text" id="password" name="password" v-model="profileConductor.password" placeholder="Digite sua senha">
                </div>

                <div class="input-container">
                    <label for="secondPassword">Confirme sua senha</label>
                    <input type="text" id="secondPassword" name="secondPassword" v-model="profileConductor.secondPassword" placeholder="Digite sua senha novamente">
                </div>
            </div>

            <div class="mt-3">
                <h2>Informações do seu Veículo</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label for="modelVehicle">Modelo do veículo</label>
                    <input type="text" id="modelVehicle" name="modelVehicle" v-model="vehicle.modelVehicle" placeholder="Digite o modelo">
                </div>

                <div class="input-container">
                    <label for="boardVehicle">Placa do veículo</label>
                    <input type="text" id="boardVehicle" name="boardVehicle" v-model="vehicle.boardVehicle" placeholder="Digite a placa">
                </div>

                <div class="input-container">
                    <label for="colorVehicle">Cor do veículo</label>
                    <input type="text" id="colorVehicle" name="colorVehicle" v-model="vehicle.colorVehicle" placeholder="Digite a cor">
                </div>

                <div class="input-container">
                    <label for="capacityVehicle">Capacidade do veículo</label>
                    <input 
                        id="capacityVehicle"
                        type="text"
                        name="capacityVehicle" 
                        v-model="vehicle.capacityVehicle"
                        v-on:change="onlyNumber"
                        placeholder="Digite a capacidade">
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
        };

        return { vehicle, profileConductor }
    },
    methods: {
        async sendCreate() {
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

            const conductor = builderConductorFromService (this.profileConductor, this.vehicle)
            
            await createConductor(conductor)
                .then(response => {
                    return alert('Cadastro realizado com sucesso!')
                })
                .catch(err => {
                    console.log('err', err)

                    return alert('Cadastro realizado com sucesso!')
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
                    console.log('field', field)
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


</style>