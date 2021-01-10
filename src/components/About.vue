<template>
  <div id="about" class="container mx-auto">
    <div class="my-10">
      <h2 class="text-3xl text-left">About me</h2>
      <p class="text-left"
        style="font-family: 'Times New Roman', sans-serif; font-size: 1.667rem"
      >
        Vivo en Lima y tengo 22 años, actualmente trabajo como consultor relacionada al ecosistema de la nube de SAP o  (SCP), he desarrollado soluciones con multiples herramientas, aplicaciones web, chatbots y automatización de procesos con RPA.
        <br/>
        Actualmente me encuentro estudiante las tecnologias de vuejs y Java.
      </p>
    </div>
    <div class="skill-soft">
      <div class="m-10">

      <h2 class="text-5xl ">Skills</h2>
      </div>
    <div class="mt-5">

      <div class="grid grid-cols-3 gap-2">
        <Skill
          v-for="(stack, i) in stacks"
          v-bind:key="i"
          v-bind:stack="stack"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Skill from "./Skill.vue";

export default {
  components: {
    Skill,
  },
  data() {
    return {
      stacks: [
        { tecnologia: "JS", porcentaje: "80%" },
        { tecnologia: "HTML5", porcentaje: "80%" },
        { tecnologia: "CSS3", porcentaje: "80%" },
        { tecnologia: "NODEJS", porcentaje: "60%" },
       
        { tecnologia: "EXPRESS", porcentaje: "60%" },
        { tecnologia: "SAPUI5", porcentaje: "70%" },
        { tecnologia: "SQL", porcentaje: "50%" },
        { tecnologia: "HANADB", porcentaje: "50%" },
        { tecnologia: "RPA", porcentaje: "50%" },
        { tecnologia: "UIPATH", porcentaje: "50%" },
        { tecnologia: "IRPA", porcentaje: "50%" },
        { tecnologia: "DIALOGFLOW", porcentaje: "60%" },
        { tecnologia: "CAI", porcentaje: "60%" },
         { tecnologia: "JAVA", porcentaje: "40%" },
        { tecnologia: "VUE", porcentaje: "40%" }
      ],
    };
  },
};
</script>