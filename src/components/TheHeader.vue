<template>
    <nav class="header d-flex justify-content-between p-5">
        <div class="routerItens" v-if="this.user">
            <router-link :to="{ path: `/conductor/${ user.id }`}" class="itemNav">
                Meu perfil
            </router-link>
            
            <router-link :to="{ path: `/conductor/${ user.id }/itineraries`}" class="itemNav">
                Itinerário
            </router-link>

            <router-link :to="{ path: `/conductor/${ user.id }/schools`}" class="itemNav">
                Escolas
            </router-link>
        </div>

        <div class="buttonsAcess" v-if="this.user">
            <button type="button" class="btn btn-outline-warning" @click="logoutLogin()">
                <i class="bi bi-box-arrow-right"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { getUserStorage, deleteUserStorage } from '../storage/UserStorage'

export default {
    data: () => {
        const { params } = useRoute();
        const user = {};

        return {
            params,
            user
        }
    },
    mounted() {
        this.user = getUserStorage();
    },
    methods: {
        logoutLogin() {
            deleteUserStorage();

            setTimeout(() => this.$router.push('/'), 1000)
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
        padding: 5px 10px;
        margin: 10px 20px;
        border-left: 4px solid #FCBA03;
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