<template>
<div class="row">
    <div class="txt--contactenos">
        <div>
            <h2>¡Contactenos!</h2>
        </div>
    </div>
    <div class="dgrid-contactenos">
        <div class="container-img">
            <img src="../assets/img--bg-contact.svg" />
        </div>
        <div class="contact__form">
            <div class="form-group"><input class="form-control" type="text" placeholder="Nombre" /></div>
            <div class="form-group"><input class="form-control" type="email" placeholder="correo" /></div>
            <div class="form-group"><TextArea class="form-control" type="text" cols="1" rows="4" placeholder="asunto" /></div>
            <div class="form-group"><button class="form-control">Enviar</button></div>
        </div>
    </div>
</div>
</template>

<style scoped>
.dgrid-contactenos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 20px 0;
    width: 100%;
}

.contact__form {
    width: 100%;
}

.txt--contactenos {
    width: 100%;
    margin: 2rem 0;
}

.txt--contactenos h2 {
    text-align: center;
}

.contact__form TextArea {
    resize: none;
}

.contact__form button {
    border-radius: 2rem;
    background: skyblue;
    color: #ffffff;
    font-weight: 600;
}

.contact__form button:hover {
    background: slateblue;
    transition: 0.5s all ease;
}

@media (min-width: 350px) and (max-width: 599px) {
    .container-img {
        display: none;
    }

    .contact__form {
        grid-column: 1/-1;
    }

    .dgrid-contactenos {
        margin: 20px;
    }
}
</style>
