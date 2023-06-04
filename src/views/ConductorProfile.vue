<template>
  <TheHeader />

  <div class="container">
    <div class="mt-2">
      <div class="d-flex p-2 m-2">
        <h1 class="m-2">
          <i class="bi bi-person-circle"></i>
        </h1>
        <h1 class="m-2">
          Perfil
        </h1>
      </div>
    </div>

    <div class="content mt-4">
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
            <label for="dataNascimento">Data de Nascimento</label>
            <div class="input-group">
                <input type="date" class="form-control" id="dtaNascimento" v-model="profileConductor.dtaNascimento">
            </div>
        </div>

        <div class="input-container">
            <label for="email">E-mail do condutor</label>
            <input type="text" id="email" name="email" v-model="profileConductor.email" placeholder="Digite seu e-mail">
        </div>

        <!-- <div class="input-container">
            <label for="phone">Celular do condutor</label>
            <input type="text" id="phone" name="phone" v-model="profileConductor.phone" placeholder="(XX)XXXXX-XXXX">
        </div> -->

        <div class="input-container">
            <label for="password">Senha de acesso Drivan</label>
            <input type="text" id="password" name="password" v-model="profileConductor.password" placeholder="Digite sua senha">
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-2 d-flex justify-content-between">
    <button type="submit" class="btn btn-success" @click="goAddressById(profileConductor.endereco.id)">
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
import { getConductorById } from '../services/ConductorService'
import { builderConductorById } from '../model/conductorModel';

export default {
  name: 'ConductorProfileView',
  data : function () {
      const { params } = useRoute();
      let profileConductor = {
          name: '',
          cpf: '',
          cnh: '',
          email: '',
          phone: '',
          password: '',
          dtaNascimento: '',
          endereco: {
            id: 1
          }
      };

      getConductorById(parseInt(params.conductor_id))
        .then((response) => {
          this.profileConductor = builderConductorById(response);
        })
        .catch((e) => {
          console.log('error message ->', e)
        })

      return {
          params,
          profileConductor
      }
  },
  methods: {
    goAddressById(id) {
      this.$router.push(`/address/${id}`);
    },
  },
  components: {
      TheHeader,
      Footer
  },
}
</script>

<style>

</style>