<template>
<div class="row">
    <div class="title--portafolio">
        <h2>Portafolio 💻</h2>
    </div>
    <div class="dgrid">
        <articulos class="dgrid-cards"></articulos>
        <articulos class="dgrid-cards"></articulos>
        <articulos class="dgrid-cards"></articulos>
        <articulos class="dgrid-cards"></articulos>
    </div>
    <!-- <div class="title--portafolio">
            <h2>Otros proyectos</h2>
        </div>
        <div class="dgrid--min--column">
            <articulos></articulos>
            <articulos></articulos>
            <articulos></articulos>
            <articulos></articulos>
        </div>-->
</div>
</template>

<script>
import articulos from './Articulos.vue';
export default {
    components: {
        articulos,
    }
}
</script>

<style scoped>
.dgrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 50px;
    margin: 5px;
}

.dgrid--min--column {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;

    grid-gap: 50px;
}

.title--portafolio {
    margin: 20px 0;
    width: 100%;
}

.title--portafolio>h2 {

    text-align: center;
}

@media (min-width: 350px) and (max-width: 599px) {
    .dgrid-cards {
        grid-column: 1/-1;
    }

    .dgrid {
        margin: 20px;
    }
}
</style>
