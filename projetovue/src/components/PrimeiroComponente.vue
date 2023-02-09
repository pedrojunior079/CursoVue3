<template>
    <div>
      <h1>Olá Vue 3</h1>
      <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p> 
      <MultiplosEventos/>
    </div>
</template>

<script>
    import MultiplosEventos from "./MultiplosEventos.vue";
    export default{
        name: 'primeiroComponente',
        components:{
          MultiplosEventos
        },
        data(){
          return{
            nome: "PedroJr",
            profissao: "Programador"
          }  
        }
    }
</script>