<template>
    <TheHeader />

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-house-heart"></i>
                </h1>
                <h1 class="m-2">
                    Endereco
                </h1>
            </div>
        </div>
    </div>
    
    <div class="container mt-4">
        <div class="layoutFormnDefault">
            <div class="input-container">
                <label for="streetAddress">Rua</label>
                <input type="text" id="streetAddress" name="streetAddress" v-model="adress.streetAddress" placeholder="Rua">
            </div>

            <div class="input-container">
                <label for="numberStreetAddress">Número</label>
                <input type="text" id="numberStreetAddress" name="numberStreetAddress" v-model="adress.numberStreetAddress" placeholder="Número">
            </div>

            <div class="input-container">
                <label for="cepAddress">CEP</label>
                <input type="text" id="cepAddress" name="cepAddress" v-model="adress.cepAddress" placeholder="CEP">
            </div>

            <div class="input-container col-md-6">
                <label for="period">Selecione o Estado</label>
                <v-select 
                    class="input-select"
                    v-model="adress.stateAddress" 
                    :options="states" 
                    @search="doSearchPeriod">
                </v-select>
            </div>

            <div class="input-container col-md-5">
                <label for="period">Selecione o UF</label>
                <v-select 
                    class="input-select"
                    v-model="adress.ufAddress" 
                    :options="ufsStates" 
                    @search="doSearchPeriod">
                </v-select>
            </div>

            <div class="input-container">
                <label for="bairroAddress">Bairro</label>
                <input type="text" id="bairroAddress" name="bairroAddress" v-model="adress.bairroAddress" placeholder="Bairro">
            </div>

            <div class="input-container">
                <label for="cityAddress">Cidade</label>
                <input type="text" id="cityAddress" name="cityAddress" v-model="adress.cityAddress" placeholder="Cidade">
            </div>

            <div class="input-container">
                <label for="complementAddress">Complemento</label>
                <input type="text" id="complementAddress" name="complementAddress" v-model="adress.complementAddress" placeholder="Complemento">
            </div>
        </div>
    </div>

    <div class="container mt-2 d-flex justify-content-end">
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
    data : () => {
        const { params } = useRoute();
        const adress = {
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

      return {
          params,
          adress,
          states,
          ufsStates

      }
  },
  components: {
      TheHeader,
      Footer
  },
}
</script>

<style>

</style>