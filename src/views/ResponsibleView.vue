<template>
    <TheHeader/>

    <div class="container mt-4">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-person-heart" />
                </h1>
                <h1 class="m-2 textWhite">
                    Responsavel
                </h1>
            </div>
        </div>
    </div>
    
    <div class="container mt-4">
        <div class="layoutFormnDefault">
            <div class="input-container">
                <label class="textWhite" for="nameResponsible">Nome do Responsavel</label>
                <input type="text" id="nameResponsible" name="nameResponsible" v-model="Responsible.nameResponsible" placeholder="Nome da escola">
            </div>

            <div class="input-container">
                <label class="textWhite" for="cpfResponsible">CPF do Responsavel</label>
                <input type="text" id="cpfResponsible" name="cpfResponsible" v-model="Responsible.cpfResponsible" placeholder="CPF do responsavel">
            </div>

            <div class="input-container">
                <label class="textWhite" for="phoneResponsible">Celular do Responsavel</label>
                <input type="text" id="phoneResponsible" name="phoneResponsible" v-model="Responsible.phoneResponsible" placeholder="Celular do responsavel">
            </div>

            <div class="input-container">
                <label class="textWhite" for="emailResponsible">E-mail do Responsavel</label>
                <input type="text" id="emailResponsible" name="emailResponsible" v-model="Responsible.emailResponsible" placeholder="E-mail do responsavel">
            </div>
        </div>
    </div>

    <div class="container mt-5 d-flex justify-content-end">
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
  import { getPassengerById } from '../services/PassengerService'
  
  export default {
      data: () => {
            const { params } = useRoute();
            const Responsible = {
                nameResponsible: '',
                cpfResponsible: '',
                phoneResponsible: '',
                emailResponsible: '',
            };


        return { params, Responsible }
      },
      components: {
          TheHeader,
          Footer
      },
      methods: {

      },
      mounted() {
        getPassengerById(this.params.passenger_id)
            .then((data) => {
                if (data.responsavel && data.responsavel.id) {
                    const dataResponsible = data.responsavel;

                    this.Responsible = {
                        nameResponsible: dataResponsible.nome,
                        cpfResponsible: dataResponsible.cpf,
                        phoneResponsible: dataResponsible.celular,
                        emailResponsible: dataResponsible.email,
                    };
                }
            })
            .catch((e) => {
                console.log('error na consulta de passageiroById');
            })
      }
  }
  </script>
  
  <style>
  
  </style>