<template>
<div>
    <div>
        <h2>Acerca de mí</h2>
    </div>
    <div class="description__owner">
        <p>Soy Desarrollador, Técnico en desarrollo de software, actualmente trabajo en consultoria relacionada al ecosistema SAP y tecnologias emergentes (Chatbot, RPA).
            Continuo mis estudios de Ingenieria en la Universidad UPC, me gusta el deporte tanto como correr, fútbol y natación entre otros. Tengo 21 años. Actualmente vivo en Lima - Perú.
        </p>
    </div>
    <experiencia></experiencia>
    <educacion></educacion>
</div>
</template>

<script>
import experiencia from './Experiencia.vue'
import educacion from './Educacion.vue'
export default {
    components: {
        experiencia,
        educacion
    }
}
</script>

<style scoped>
.description__owner {
    text-align: justify;
}
</style>
