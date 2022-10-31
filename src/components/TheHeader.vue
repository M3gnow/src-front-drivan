<template>
    <nav class="header">
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
        </div>
        <div class="buttonsAcess">
            <router-link to="/conductor" tag="button" class="btn btn-light">Entrar</router-link>
            <router-link to="/conductor" tag="button" class="btn btn-warning m-2">Registre-se</router-link>
        </div>
    </nav>
</template>

<script>
export default {

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