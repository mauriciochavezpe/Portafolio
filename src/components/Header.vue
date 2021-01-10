
<template>
  <div class="w-full h-96 bg-gray-200">
    <div class="container mx-auto">
    <div class="p-5">

    <div class="flex my-5 justify-between">
      <div>
        <span class="text-3xl">MCHAVEZ.PE</span>
      </div>
      <div class="w-1/2 flex justify-end">
        <a href="#about" class="mx-5">Acerca de </a>
        <a href="#servicios" class="mx-5">Servicios</a>
        <a href="#contacto" class="mx-5">Contacto</a>
           <a href="#" class="mx-5">Blog</a>
      </div>
    </div>
    </div>

    
    <div class="grid grid-cols-3 gap-2">
      <div class="col-span-2 w-full">
        <img class="w-full " style="height:80%"   src="../assets/resources/js.svg" alt="" />
      </div>
      <div class="w-full">
        <h2 class="text-5xl" id="info_owner" />
      </div>
    </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Header",
  data() {
    return {
      info_owner: "Hola soy Mauricio, \nFront-end developer.",
    };
  },
  methods: {
    maquina_escribir: function () {
      let i = 0;
      let descp_owner = this.info_owner;
      let chartInfo = descp_owner.split("");
      let that = this;
 
      // if(typeof document === "object") document.getElementById("info_owner").innerText="";
      let writeDescFor = setInterval(
        function () {
          let nodo = document.getElementById("info_owner");
          if (chartInfo[i] === " ") {
            nodo.innerText += " "; //chartInfo[i];
            nodo.innerText += ` ${chartInfo[i + 1]}`;
            i += 2;
          } else {
            nodo.innerText += `${chartInfo[i]}`;
            i++;
          }
          if (i === chartInfo.length) {
            clearInterval(writeDescFor);
            let writeDescForRever = setInterval(
              function () {
                chartInfo = descp_owner.slice(0, i);
                nodo.innerText = chartInfo;
                if (i == 0) {
                  clearInterval(writeDescForRever);
                  that.maquina_init();
                }
                i--;
              }.bind(this),
              250
            );
          }
        }.bind(this),
        250
      );
    },
    maquina_init: function () {
      this.maquina_escribir();
    },
  },
  created: function () {
       this.maquina_init();
  },
};
</script>
<style scoped>
#info_owner::after {
  content: "|";
  color: "";
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
</style>