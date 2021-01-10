<template>
      <div class="tool flex justify-between w-full">
        <div class="text-left mx-2 w-1/3">
          <h4>{{stack.tecnologia}}</h4>
        </div>
        <div class="flex w-2/3">
          <div class="w-full">
            <div class="shadow w-full bg-gray-100 rounded-md">
              <div
                class="bg-blue-500 text-xs leading-none py-1 text-center text-white"
                v-bind:style="{width:stack.porcentaje}"
              >
                {{stack.porcentaje}}
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name:"Skill",
    props:["stack"]
}
</script>