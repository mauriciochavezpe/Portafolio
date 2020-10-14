<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light menuFixed">
    <a class="navbar-brand" href="#">TEST PE</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">
                    <router-link to="/">Home</router-link>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <router-link to="/service">Service</router-link>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link " tabindex="-1" aria-disabled="true">
                    <router-link to="/about">About</router-link>
                </a>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped>
.menuFixed {
    position: fixed;
    z-index: 10;
    width: 100%;
}

@media (min-width: 992) {
    .navbar-expand-lg .lstMenu {
        justify-content: flex-end !important;
        width: 100%;
        background: red;
    }
}
</style>
