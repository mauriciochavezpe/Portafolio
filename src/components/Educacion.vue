<template>
<div class="container">
    <div class="row">
        <div>
            <div>
                <h2>Educación</h2>
            </div>
            <div class="dgrid" v-for="educacion in info_educaciones" v-bind:key="educacion.name_school">
                <div class="experience_place">
                    <div>
                        <p><strong>{{educacion.name_school +" - "+ educacion.name_country}}</strong> </p>
                    </div>
                    <div>
                        <p>
                            {{educacion.fecha_inicio +" - "+ educacion.fecha_fin}}
                        </p>
                    </div>
                </div>
                <div class="experience__img">
                    <div class="img-placeholder">
                        <img lazy="loaded" :src="educacion.logo_school" />
                    </div>
                </div>
                <div class="experience__panel">
                    <div class="experience__position">
                        <strong><span>{{educacion.carrer_school}}</span></strong>
                    </div>
                    <div class="description__work">
                        <p>{{educacion.descripcion_carrer}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import img__upc from "../assets/upc.png"
import img__senati from "../assets/senati.png"
export default {
    data() {
        return {
            info_educaciones: [{
                "name_school": "UPC",
                "name_country": "Perú",
                "fecha_inicio": "2016",
                "fecha_fin": "2018",
                "logo_school": img__upc,
                "carrer_school": "Ingenieria de Sistemas",
                "descripcion_carrer": "Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP, fue un reto importante para mi, poder ayudar y aprender al mismo tiempo. "
            }, {
                "name_school": "SENATI",
                "name_country": "Perú",
                "fecha_inicio": "2019",
                "fecha_fin": "2024",
                "logo_school": img__senati,
                "carrer_school": "Desarrollo de software",
                "descripcion_carrer": "Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP, fue un reto importante para mi, poder ayudar y aprender al mismo tiempo. "
            }]
        }
    }
}
</script>

<style scoped>
.experience__img {
    position: relative;
    z-index: 0;
    display: block;
}

._active::after {
    border-color: blue;
}

.experience__im1g::after {
    content: " ";
    display: block;
    position: absolute;
    border-radius: 100%;
    background: #fff;
    border: 2px solid #e4e4e4;

    width: calc(100% + 6px);
}

.experience__img img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    margin-left: 0;
    text-emphasis: center;
}

img {
    max-width: 100%;
    height: auto;
    border-style: none;

}

.title_Exp_lab {
    margin: 2rem 0;
}

@media(min-width: 350px) and (max-width:600px) {
    img {
        width: 16.6% !important;
    }

    .experience__panel {
        position: relative;
        margin-top: -2.1rem;

    }

    .experience__position {
        position: relative;
        padding: .3rem 0 0 22%;
    }

    .description__work {
        margin-top: .5rem;
    }
}

@media (max-width: 699px) {
    .experience_place {
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 700px) {
    .dgrid {
        margin-top: 10px;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 120px 100px auto;
        grid-template-rows: 1fr;
        grid-gap: 20px
    }

    .experience__img {
        display: flex;
        align-items: center;
    }

    .experience_place {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .experience_place p {
        font-weight: 300;
    }

    .description__work {
        margin-top: 10px;
    }
}
</style><style>
</style>
