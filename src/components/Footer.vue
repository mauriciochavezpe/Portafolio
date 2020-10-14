<template>
<footer class="footer">
    <div class="contenedor footer__main">
        <div>
            <p class="message__footer_contact">Si llegaste hasta aquí, ya conoces parte de mí, a lo que me dedico, si gustas trabajar conmigo contactame para comunicarnos.
            </p>
        </div>
    </div>
    <div class="footer__contact">
        <div class="footer__contact_owner">
            <p>© {{actual}} - Web programada por <a class="owner" href="#">Mauricio Chávez</a> con Vue.js </p>
        </div>
        <div class="redirect__contact">
            <div><a target="_blank" href="https://github.com/MCHAVEZ-PE"><i class="fa fa-github"></i></a></div>
            <div><a target="_blank" href="https://www.linkedin.com/in/mauricio-chavez-pelayo-28b0ab133/"><i class="fa fa-linkedin"></i></a></div>
            <div><a target="_blank" href="tel:+51944606812"><i class="fa fa-phone"></i></a></div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            actual: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer {
    background: #000;
    color: #fff;
    padding: 1px;

}

.contenedor {
    display: flex;
    justify-content: center;
}

.footer__contact .footer__contact_owner p a {
    color: tomato !important;
}

.footer__contact .redirect__contact a {
    color: #fff;
}

@media (min-width: 700px) {
    .contenedor>div {
        width: 500px;
    }

    .message__footer_contact {
        text-align: center;
    }

    .footer__main {
        padding: 50px;
    }

    .footer__contact {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .redirect__contact {
        display: flex;
    }

    .redirect__contact>div {
        margin: 20px
    }

    .redirect__contact a {
        color: #fff;
    }
}

@media (min-width:350px) and (max-width:600px) {
    .message__footer_contact {
        text-align: center;
        margin: 2rem;
    }

    .footer__contact {
        display: block;

    }

    .footer__contact>div {
        display: flex;
        justify-content: center;
    }

    .footer__contact_owner {
        font-size: small;
    }

    .footer__contact .redirect__contact div {
        margin: 1rem 2rem;
    }
}
</style>
