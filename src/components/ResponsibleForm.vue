<template>
  <div class="container mt-3">
        <div>
            <div>
                <h2 class="textWhite">Identificação e contato</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label class="textWhite" for="nameResponsible">Nome do Responsavel</label>
                    <input type="text" id="nameResponsible" name="nameResponsible" v-model="Responsible.nameResponsible" placeholder="Nome da escola">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="cpfResponsible">CPF do Responsavel</label>
                    <input type="text" id="cpfResponsible" name="cpfResponsible" v-model="Responsible.cpfResponsible" placeholder="CPF do responsavel" @change="$event => onlyNumberCpf($event)">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="phoneResponsible">Celular do Responsavel</label>
                    <input type="text" id="phoneResponsible" name="phoneResponsible" v-model="Responsible.phoneResponsible" placeholder="Celular do responsavel" @change="$event => onlyNumberPhone($event)">
                </div>

                <div class="input-container">
                    <label class="textWhite" for="emailResponsible">E-mail do Responsavel</label>
                    <input type="text" id="emailResponsible" name="emailResponsible" v-model="Responsible.emailResponsible" placeholder="E-mail do responsavel">
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning" @click="sendCreate()">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { createResponsible } from '../services/responsibleService'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRoute } from 'vue-router'
import { builderResponsavelFromService } from '../model/responsavelModel'

export default {
    name: 'ResponsibleForm',
    data: function() {
        const { params } = useRoute();
        const Responsible = {
            nameResponsible: '',
            cpfResponsible: '',
            phoneResponsible: '',
            emailResponsible: '',
            passengerId: ''
        };

        return { Responsible, params }
    },
    methods: {
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
            this.Responsible.passengerId = this.params.passenger_id;

            if (!this.checkFields(this.Responsible)) {
                return alert('Todos campos são obrigatórios')
            }

            const dataResponsible = builderResponsavelFromService(this.Responsible);
            const promise = createResponsible(dataResponsible)
            
            const schoolId = this.params.school_id
            const periodId = this.params.period_id
            const passengerId = this.params.passenger_id
            const router = `/schools/${schoolId}/periods/${periodId}/passengers/${passengerId}`;

            promise.then((result) => setTimeout(() => this.$router.push(router), 1000));
            
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
        },
        onlyNumberPhone(event) {
            if (event.target.value) {
                this.Responsible.phoneResponsible = event.target.value.replace(/\D/g, '');
            } else {
                this.Responsible.phoneResponsible = '';
            }
        },
        onlyNumberCpf(event) {
            if (event.target.value && event.target.value.length <= 11) {
                this.Responsible.cpfResponsible = event.target.value.replace(/\D/g, '');
            } else {
                this.Responsible.cpfResponsible = '';
            }
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