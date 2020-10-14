<template>
<div>
    <div id="carouselExampleSlidesOnly" data-ride="carousel" class="carousel slide">
        <div class="carousel-inner altura--fondo">
            <div class="carousel-item active">
                <img src="https://image.freepik.com/vector-gratis/diseno-moderno-fondo-negro-3d_53876-89865.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="texto--desc--servicio">
                <h1>Diseño y desarrollo web y software a tu medida</h1>
            </div>

        </div>
    </div>
    <div class="container">
        <Appsdesarrolladas></Appsdesarrolladas>
    </div>
    <div class="bg-contactenos">
        <div class="container">
            <Contactenos></Contactenos>
        </div>
    </div>
    <Footer></Footer>

</div>
</template>

<script>
import Appsdesarrolladas from '../components/Apps-desarrolladas.vue';
import Contactenos from '../components/Contactenos.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Appsdesarrolladas,
        Contactenos,
        Footer
    }
}
</script>

<style scoped>
.altura--fondo {
    height: 500px;
}

.bg-contactenos {
    background: #fbfbfb;
}

.texto--desc--servicio {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    top: 350px;
    color: #fff;
}

@media (min-width: 350px) and (max-width: 599px) {
    .altura--fondo {
        height: auto;
    }
}
</style>
