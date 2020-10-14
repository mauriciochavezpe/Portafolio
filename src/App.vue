<template>
<div id="app">
    <Nav></Nav>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <Header></Header>
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/service">Service</router-link> |
        <router-link to="/about">About</router-link>
    </div>
        <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <router-view />
</div>
</template>

<script>
import Nav from "./components/Nav.vue";
// import Headerx from "./components/Headerx.vue";

export default {
    name: "App",
    components: {
        Nav
        // Headerx
    }
}
</script>

<style>
/**#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}*/
</style>
