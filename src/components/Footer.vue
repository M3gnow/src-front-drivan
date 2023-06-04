<template>
    <footer id="footer">
        <p>Drivan &copy; 2023</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #footer {
        min-height: 150px;
        background-color: #222;
        position: absolute;
        border-top: 4px solid #111;
        color: #fcba03;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>