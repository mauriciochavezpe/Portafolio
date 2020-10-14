<template>
<div id="carouselExampleSlidesOnly" data-ride="carousel" class="carousel slide">
    <div class="carousel-inner tamano">
        <div class="carousel-item active">
            <!-- <div class="d-block bg-negro w-100"></div>-->
            <img src="https://image.freepik.com/vector-gratis/diseno-moderno-fondo-negro-3d_53876-89865.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="caja-typing ">
            <div class="maquina-escribir">
                <h1 id="text-descriptivo" class="descrip">
                    <span></span>

                </h1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            info: "Hola soy Mauricio Chávez, Front-end developer.", //$("#text-descriptivo").text()
        };
    },
    methods: {
        inter: function () {
            var i = 0;
            var dscripcio = this.info;
            let that = this;
            var dta = dscripcio.split("");
            var interval = setInterval(function () {
                if (dta[i] === " ") {
                    document.getElementById("text-descriptivo").innerText += ` ${dta[i + 1]}`;
                    i += 2;
                } else {
                    document.getElementById("text-descriptivo").innerText += dta[i];
                    i++;
                }
                // console.log("el tamaño es" + dta.length)
                if (i === dta.length) {
                    clearInterval(interval);
                    var interReverse = setInterval(function () {
                        var txt = that.info.slice(0, i);
                        that.info;
                        document.getElementById("text-descriptivo").innerText = txt;
                        if (i === 0) {
                            clearInterval(interReverse);
                            this.inter();
                        }
                        i--;
                    }.bind(this), 250);
                }
            }.bind(this), 250);
        },
        maquinaEscribir: function () {
            this.inter();
        },
    },
    created: function () {
        this.maquinaEscribir();
    },
};
</script>

<style scoped>
.bg-negro {
    background: #000;
}

.tamano {
    height: 500px;
}

.carousel-item>img {
    width: 100%;
    height: 100%;
}

.caja-typing {
    width: 380px;
    height: auto;
    position: absolute;
    z-index: 5;
}

.m-topx {
    margin-top: 250px;
    margin-left: 500px;
}

.descrip {
    background: #f8f9fa;
    line-height: 50px;
    font-size: 30px;
    width: 100%;
}

#text-descriptivo {
    position: relative;
}

#text-descriptivo::after {
    content: "|";
    color: "#6c5cff";
    animation: blink 0.5s infinite;
    animation-timing-function: ease;
    animation-direction: normal;
    animation-name: blink;
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }

}

h1 {
    position: relative;
}

h1>span {
    position: absolute;
    right: 0;
    width: 0;
    background: blue;
    border-left: 1px solid #000;
    animation: maquina 5s infinite alternate steps(46);
}

@media (min-width: 601px) {
    .carousel-item {
        width: 100%;
        height: 450px;
    }

    .caja-typing {
        top: 250px;
        left: calc(100% / 3.5);
    }
}

@media (min-width: 350px) and (max-width: 600px) {

    .tamano {
        height: auto;
    }

    .caja-typing {
        position: absolute;
        top: 200px;
        display: flex;
        justify-content: center;
    }

    .descrip {
        font-size: medium;
        line-height: initial;
    }

    .maquina-escribir {
        width: 200px;
    }

    .m-top {
        margin-top: 0;
        margin-left: 0;
    }
}
</style>
