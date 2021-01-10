<template>
<footer class="bg-gray-200 " style=" height:150px">
    <div class="container mx-auto">
        <div class="flex flex-col"> 
            <div class="w-1/3 mx-auto py-5">
               <p style="color:#000000" class="text-sm">Si llegaste hasta aquí, ya conoces parte de mí, a lo que me dedico, si gustas trabajar conmigo contactame para comunicarnos.
            </p>
            </div>
            <div>
                <div class="flex justify-between">
                    <div>
                            <p style="color:#000000">© {{actual}} - Web desarrollada por <a class="owner" href="#">Mauricio Chávez</a></p>
       
                    </div>
                    <div class="w-1/12 flex justify-between">
                           <div><a target="_blank" href="https://github.com/mauriciochavezpe"><img class="w-4" src="../assets/resources/github.svg"/></a></div>
                            <div><a target="_blank" href="https://www.linkedin.com/in/mauricio-chavez-pelayo-28b0ab133/"><img class="w-4" src="../assets/resources/linkedin.svg"/></a></div>
                            <div><a target="_blank" href="tel:+51944606812"><img class="w-4" src="../assets/resources/smartphone.svg"/></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
export default {
    name:"Footer",
data(){
    return{
        actual: new Date().getFullYear()
    }

}
}
</script>
