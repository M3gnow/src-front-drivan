<template>
    <TheHeader />

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-clock-history"></i>
                </h1>
                <h1 class="m-2 textWhite">
                    Período
                </h1>
            </div>
        </div>
    </div>
    
    <div class="container mt-4">
        <div class="card p-3 cardColorBorder">
        <div class="d-flex justify-content-between">
            <div class="input-container descriptionPeriod">
                <label class="textWhite" for="phoneSchool">Descrição</label>
                <input class="m-1 descriptionPeriod" v-model="newPeriods.description" placeholder="Descrição">
            </div>
        </div>

        <div class="d-flex justify-content-between mt-2" style="align-items: center;">
            <div class="input-container">
                <label class="textWhite" for="phoneSchool">Entrada</label>
                <div class="d-flex">
                    <input class="m-1 width200px" v-model="newPeriods.inputHour" placeholder="Hora de entrada"
                        v-on:change="onlyNumberInputHour">
                    <h5 class="m-2">:</h5>
                    <input class="m-1 width200px" v-model="newPeriods.inputMin" placeholder="Min de entrada"
                        v-on:change="onlyNumberInputMin">
                </div>

            </div>

            <div class="input-container">
                <label class="textWhite" for="phoneSchool">Saída</label>
                <div class="d-flex">
                    <input class="m-1 width200px" v-model="newPeriods.ouputHour" placeholder="Hora de Saída"
                        v-on:change="onlyNumberOutputHour">
                    <h5 class="m-2">:</h5>
                    <input class="m-1 width200px" v-model="newPeriods.ouputMin" placeholder="Min de entrada"
                        v-on:change="onlyNumberOutputMin">
                </div>
            </div>
        </div>
        </div>
    </div>

    <div class="container mt-4 d-flex justify-content-end">
        <button type="submit" class="btn btn-warning">
            <i class="bi bi-person-fill-check"></i>
            Salvar
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
import { getSchoolById } from '../services/SchoolService'

export default {
    name: 'AddressView',
    data : function () {
        const { params } = useRoute();
        const newPeriods = {
            description: '',
            inputHour: '',
            inputMin: '',
            ouputHour: '',
            ouputMin: '',
        }

        return { params, newPeriods }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
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
        sendCreate(newPeriods) {
            if (!newPeriods.description) {
                return alert('Descrição é obrigatório')
            }

            let existFieldPeriod = false;
            //entrada
            const inputHourSizeCorrect = newPeriods.inputHour.length === 2;
            const inputMinSizeCorrect = newPeriods.inputMin.length === 2;
            const inputTimeExist = inputHourSizeCorrect && inputMinSizeCorrect;
            
            // saida
            const outputHoursSizeCorrect = newPeriods.ouputHour.length === 2;
            const outputMinSizeCorrect = newPeriods.ouputMin.length === 2;
            const outputTimeExist = outputHoursSizeCorrect && outputMinSizeCorrect;

            if (inputHourSizeCorrect || inputMinSizeCorrect) {
                if (!inputTimeExist) {
                return alert('Entrada parcialmente não preenchida')
                }

                existFieldPeriod = true;
            }

            if (newPeriods.ouputHour || newPeriods.ouputMin) {
                if (!outputTimeExist) {
                return alert('Saída parcialmente não preenchida')
                }

                existFieldPeriod = true;
            }

            if (!existFieldPeriod) {
                return alert('Entrada ou Saída precisa ser preenchida')
            }

            const dataPeriod = {
                descricao: newPeriods.description,
                entrada: inputTimeExist ? `${newPeriods.inputHour}:${newPeriods.inputMin}` : null,
                saida: outputTimeExist ? `${newPeriods.ouputHour}:${newPeriods.ouputMin}` : null,
                escola: {
                    id: this.params.school_id
                }
            }
        },
        getData(schoolId, periodId) {
            getSchoolById(schoolId)
                .then((data) => {
                    const periods = data.periodos;
                    const periodData = periods.find(periodo => periodo.id === parseInt(periodId));

                    this.newPeriods = {
                        description: periodData.descricao,
                        inputHour: periodData.entrada ? periodData.entrada.substr(0,2) : '',
                        inputMin: periodData.entrada ? periodData.entrada.substr(3,2) : '',
                        ouputHour: periodData.saida ? periodData.saida.substr(0,2) : '',
                        ouputMin: periodData.saida ? periodData.saida.substr(0,2) : '',
                    }
                })
                .catch((e) =>{
                    console.log('Error consult schools', e.message);
                })
        }
    },
    mounted() {
        this.getData(this.params.school_id, this.params.periods_id)
    }
}
</script>

<style>

</style>