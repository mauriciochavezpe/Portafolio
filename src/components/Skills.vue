<template>
<div>
    <div>
        <h2>Mis Habilidades</h2>
    </div>
    <div class="grilla__Skills">
        <div>
            <div class="skills__owner"><span><strong>Front-end Developer</strong></span></div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">JS vanilla </li>
                    <li class="list-group-item">Html 5</li>
                    <li class="list-group-item">css 3</li>
                    <li class="list-group-item">mobile First</li>
                    <li class="list-group-item">Web Responsive</li>
                    <li class="list-group-item">sapUI5</li>
                    <li class="list-group-item">VUE.JS</li>
                </ul>
            </div>
        </div>
        <div>
            <div class="skills__owner"><span><strong>Back-end Developer</strong></span></div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Node Js</li>
                    <li class="list-group-item">ExpressJS</li>
                    <!--<li class="list-group-item">Java</li>-->
                </ul>
            </div>
        </div>
        <div>
            <div class="skills__owner"><span><strong>Data Base</strong></span></div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">SQL Server</li>
                    <li class="list-group-item">PostgreSQL</li>
                    <li class="list-group-item">Hana DB</li>
                </ul>
            </div>
        </div>
        <div>
            <div class="skills__owner"><span><strong>Ohers tools</strong></span></div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">UIpath</li>
                    <li class="list-group-item">Chatbot SAP CAI</li>
                    <li class="list-group-item">Chatbot Dialogflow</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.grilla__Skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    margin: 20px 0;
}

.skills__owner {
    margin: .7rem 0;
}

@media (min-width:350px) and (max-width: 599px) {
    .grilla__Skills>div {
        grid-column: 1/-1;
    }
}
</style>
