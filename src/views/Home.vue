<template>
<div class="home">
    <Header></Header>
    <div class="container">
        <Section></Section>
        <Portafolio></Portafolio>
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
import Header from "../components/Header.vue";
import Section from "../components/Section.vue";
import Portafolio from "../components/Apps-desarrolladas.vue";
import Contactenos from "../components/Contactenos.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        Header,
        Section,
        Portafolio,
        Contactenos,
        Footer
    }
}
</script>

<style scoped>
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
