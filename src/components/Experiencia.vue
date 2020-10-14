<template>
<div class="container">
    <div class="row">
        <div class="title_Exp_lab">
            <h2>Experiencia Laboral</h2>
        </div>
        <div class="dgrid" v-bind:key="experiencia.name_company" v-for="experiencia in info_experiencias">
            <div class="experience_place">
                <div>
                    <p><strong>{{experiencia.name_company}}</strong> </p>
                </div>
                <div>
                    <p>{{experiencia.fecha_ingreso +" - "+ experiencia.fecha_salida }}</p>
                </div>
            </div>
            <div class="experience__img ">
                <div class="img-placeholder">
                    <img lazy="loaded" :src="experiencia.logo_company" />
                </div>
            </div>
            <div class="experience__panel">
                <div class="experience__position">
                    <strong><span>{{experiencia.cargo_company}}</span></strong>
                </div>
                <div class="description__work">
                    <p>{{experiencia.descripcion_trabajo}}</p>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import img__csti from '../assets/csti.png'
import img__intelecta from '../assets/intelecta.png'
import img__sistemasuni from '../assets/sistemasuni.png'
export default {
    data() {
        return {
            info_experiencias: [{
                    "name_company": "CSTI",
                    "fecha_ingreso": "Jun'19",
                    "fecha_salida": "ACT",
                    "logo_company": img__csti,
                    "cargo_company": "Developer SCP",
                    "descripcion_trabajo": "Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."
                },
                {
                    "name_company": "Intelecta",
                    "fecha_ingreso": "Ene'19",
                    "fecha_salida": "Jun'19",
                    "logo_company": img__intelecta,
                    "cargo_company": "Trainee Developer SCP",
                    "descripcion_trabajo": "Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."
                }, {
                    "name_company": "SistemasUNI",
                    "fecha_ingreso": "Jun'18",
                    "fecha_salida": "Dic'18",
                    "logo_company": img__sistemasuni,
                    "cargo_company": "Programador",
                    "descripcion_trabajo": "Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."
                }
            ]

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
        height: 1.5rem !important;
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
