<template>
    <TheHeader/>

    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-mortarboard" />
                </h1>
                <h1 class="m-2">
                    Escola
                </h1>
            </div>
        </div>
    </div>

    <div class="container mt-2">
        <div class="layoutFormnDefault">
            <div class="input-container">
                <label for="nameSchool">Nome da escola</label>
                <input type="text" id="nameSchool" name="nameSchool" v-model="School.nameSchool" placeholder="Nome da escola">
            </div>

            <div class="input-container">
                <label for="emailSchool">E-mail</label>
                <input type="text" id="emailSchool" name="emailSchool" v-model="School.emailSchool" placeholder="E-mail">
            </div>

            <div class="input-container">
                <label for="phoneSchool">Telefone</label>
                <input type="text" id="phoneSchool" name="phoneSchool" v-model="School.phoneSchool" placeholder="Telefone">
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-calendar2-check" />
                </h1>
                <h1 class="m-2">
                    Períodos
                </h1>
            </div>
        </div>
    </div>

    <div class="container mt-2">
        <div class="input-container col-md-12">
            <label for="period">Selecione os Periodos</label>
            <v-select 
                multiple
                class="input-select"
                v-model="School.periods" 
                :options="periods" 
                @search="doSearchPeriod">
            </v-select>
        </div>
    </div>

    <div class="container mt-5 d-flex justify-content-between">
        <button type="submit" class="btn btn-success" @click="goAddressById(School.endereco.id)">
            <i class="bi bi-house-heart"></i>
            Ver Endereço
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
  
  export default {
    data: () => {
        const { params } = useRoute();
        const School = {
            nameSchool: '',
            emailSchool: '',
            phoneSchool: '',
            periods: [],
            endereco: {
                id: 1
            }
        };
        const periods = [
            'one',
            'two',
            'megnow',
            'big',
            'wow'
        ];

        return { params, School, periods }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        goAddressById(id) {
        this.$router.push(`/address/${id}`);
        }
    }
  }
  </script>
  
  <style>
  
  </style>