<template>
    <TheHeader/>

    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <h1 class="textWhite">
                        Meus passageiros
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div class="container card p-3 cardColorBorderItinerary mt-3">
        <div class="d-flex justify-content-between">
            <div class="input-container input70PercentSpace">
                <label for="phoneSchool" class="textWhite">Passageiro</label>
                <input class="m-1 input70PercentSpace" v-model="address.id" placeholder="Descrição">
            </div>

            <div class="d-flex mt-5 flex-wrap">
                <div>
                    <h4 class="textWhite">
                        {{ labelTimeNow }}
                    </h4>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <div class="input-container">
                <label for="phoneSchool" class="textWhite">Embarque</label>
                <input class="m-1" v-model="address.id" placeholder="Descrição">
            </div>

            <div class="input-container">
                <label for="phoneSchool" class="textWhite">Destino</label>
                <input class="m-1" v-model="address.id" placeholder="Descrição">
            </div>
            <div class="mt-4">
                <button class="btn btn-outline-danger m-1">
                    Cancelar embarque
                </button>
            </div>
        </div>
    </div>

    <div class="mt-5">
        <Footer />
    </div>
  </template>
  
<script>
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'
export default {
    data() {
        const labelTimeNow = '';

        return { address: {}, labelTimeNow}
    },
    components: {
        TheHeader,
        Footer
    },
    mounted() {
        const date = new Date();
        const labelDateTimeNow = this.formatDate(date);
        this.labelTimeNow = labelDateTimeNow
    },
    methods: {
        formatDate(dateForFormat) {
            const dateTime = new Date(dateForFormat);
            const day = dateTime.getDate() > 9 ? dateTime.getDate() : `0${dateTime.getDate()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

            const date = `${day}/${mounth}/${year} - ${hours}:${minutes}`

            return date;
        }
    },
};
</script>
  
<style>

.namePassenger {
    width: 100% !important;
}

.input70PercentSpace {
    width: 70% !important;
}

</style>