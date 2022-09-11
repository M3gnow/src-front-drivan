<template>
    <header class="header">
        <div class="routerItens">
            <router-link to="/dashboard" class="routerItem">
                Dashboard
            </router-link>

            <router-link to="/conductor" class="routerItem">
                Condutor
            </router-link>

            <router-link to="/passengers" class="routerItem">
                Passageiros
            </router-link>

            <router-link to="/itinerary" class="routerItem">
                Itinerário
            </router-link>

            <router-link to="/schools" class="routerItem">
                Escolas
            </router-link>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    .header {
        background: #000;
        color: #fff;
        height: 100px;
        text-align: center;
        align-content: center;
    }

    .routerItens {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 40px;
    }

    .routerItem {
        background-color: yellow;
        border-radius: 20px;
        width: 120px;
        align-content: center;
        padding-top: 5px;
        height: 30px;
    }

</style>