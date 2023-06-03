<template>
    <TheHeader/>

    <div class="container">
        <div class="mt-2">
            <div class="d-flex">
                <h1 class="m-2">
                    <i class="bi bi-mortarboard" />
                </h1>
                <h1 class="m-2">
                    Escolas
                </h1>
            </div>
        </div>
    </div>

    <div class="card mt-3">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        Endereços de entrega
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <!-- <div class="card cardForm mt-3" v-for="address of deliveryAddress">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-9">
                                        <div class="form=label">
                                            {{ address.nameIdentifier }}
                                        </div>
                                        <div class="form-text">
                                            {{ address.publicPlaceAddress }}, {{ address.numberAddress }}
                                        </div>
                                        <div class="form-text">
                                            {{ address.cepAddress }} - {{ address.stateAddress }} - {{ address.cityAddress }}
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <RouterLink :to="{ path: `/client/${ params.client_id }/address/${ address.id }` }" class="btn btn-outline-warning">Editar</RouterLink>
                                    </div>

                                    <div class="col-sm-1 ms-2">
                                        <RouterLink to="/cliente/enderecos/editar" class="btn btn-outline-warning">Excluir</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <div class="row d-flex justify-content-between m-3">
                        <router-link to="/client/address/new" type="button" class="btn btn-warning">Adicionar Endereço</router-link>
                    </div>
                </div>
            </div>
        </div>
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

        return { params }
    },
    components: {
        TheHeader,
        Footer
    },
}
</script>

<style>

</style>