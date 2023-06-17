<template>
    <TheHeader/>

    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-mortarboard" />
                </h1>
                <h1 class="m-2 textWhite">
                    Escola
                </h1>
            </div>
        </div>
    </div>

    <div class="container mt-2">
        <div class="layoutFormnDefault">
            <div class="input-container">
                <label class="textWhite" for="nameSchool">Nome da escola</label>
                <input type="text" id="nameSchool" name="nameSchool" v-model="School.nameSchool" placeholder="Nome da escola">
            </div>

            <div class="input-container">
                <label class="textWhite" for="emailSchool">E-mail</label>
                <input type="text" id="emailSchool" name="emailSchool" v-model="School.emailSchool" placeholder="E-mail">
            </div>

            <div class="input-container">
                <label class="textWhite" for="phoneSchool">Telefone</label>
                <input type="text" id="phoneSchool" name="phoneSchool" v-model="School.phoneSchool" placeholder="Telefone">
            </div>
        </div>
    </div>

    <div class="container mt-2 d-flex justify-content-between">
        <button type="submit" class="btn btn-success" @click="goAddressById(School.endereco.id)" v-if="School.endereco.id">
            <i class="bi bi-house-heart"></i>
            Ver Endereço
        </button>

        <button type="submit" class="btn btn-success" @click="goPeriodById(School.id)" v-if="School.id">
            <i class="bi bi-house-heart"></i>
            Ver Periodos
        </button>
        
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
  import { buildSchoolsByIdFromService } from '../model/SchoolModel'

  export default {
    data: () => {
        const { params } = useRoute();
        const School = {
            nameSchool: '',
            emailSchool: '',
            phoneSchool: '',
            periods: [],
            endereco: { }
        };

        return { params, School }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        goAddressById(id) {
            this.$router.push(`/address/${id}`);
        },
        goPeriodById(id) {
            this.$router.push(`/school/${id}/periods`);
        },
        getData(schoolId) {
            getSchoolById(schoolId)
                .then((data) => {
                    this.School = buildSchoolsByIdFromService(data);
                })
                .catch((e) =>{
                    console.log('Error consult schools', e.message);
                })
        }
    },
    mounted() {
        this.getData(this.params.school_id);
    },
  }
  </script>
  
  <style>
  
  </style>