<template>
    <nav class="header" v-if="!params.conductor_id">
        <div class="routerItens">
            <router-link to="/dashboard" class="itemNav">
                Dashboard
            </router-link>

            <router-link to="/conductor" class="itemNav">
                Condutor
            </router-link>

            <router-link to="/passengers" class="itemNav">
                Passageiros
            </router-link>

            <router-link to="/itinerary" class="itemNav">
                Itinerário
            </router-link>

            <router-link to="/schools" class="itemNav">
                Escolas
            </router-link>

            <router-link to="/responsible" class="itemNav">
                Responsável
            </router-link>
        </div>
        <div class="buttonsAcess">
            <router-link to="/login" class="btn btn-light">Entrar</router-link>
            <router-link to="/conductor" class="btn btn-warning m-2">Registre-se</router-link>
        </div>
    </nav>

    <nav class="header" v-if="params.conductor_id">
        <div class="routerItens">
            <router-link :to="{ path: `/conductor/${ params.conductor_id }`}" class="itemNav">
                Meu perfil
            </router-link>

            <router-link :to="{ path: `/conductor/${ params.conductor_id }/periods`}" class="itemNav">
                Períodos
            </router-link>

            <router-link :to="{ path: `/conductor/${ params.conductor_id }/itinerary`}" class="itemNav">
                Itinerário
            </router-link>

            <router-link :to="{ path: `/conductor/${ params.conductor_id }/schools`}" class="itemNav">
                Escolas
            </router-link>

            <router-link :to="{ path: `/conductor/${ params.conductor_id }/responsible`}" class="itemNav">
                Responsaveis
            </router-link>
        </div>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    data: () => {
        const { params } = useRoute();

        console.log('the Header', 'headervalor', params);
        
        return {
            params
        }
    }
}
</script>

<style>
    .header {
        background: #000;
        height: 100px;
        display: flex;
        justify-content: space-around;
    }

    .itemNav {
        border-bottom: 4px solid #FCBA03;
        padding: 5px 10px;
        margin: 10px 20px;
    }

    .buttonsAcess {
        align-self: center;
    }

    .routerItens {
        outline: none !important;
        gap: 0.625% !important;
        align-self: center;
    }

    a {
        text-decoration: none;
        outline: none;
        color: black;
        text-decoration-line: blink !important;
        font-size: 20px;
    }

    a:link,
    a:visited,
    a:focus {
        background: transparent;
        color: #FFF;
        outline: none !important;
    }

    a:hover {
        color: white !important;
        background: #FCBA03;
    }

    a:active {
        background: rgb(108, 109, 66);  
        color: white !important;
    }
</style>