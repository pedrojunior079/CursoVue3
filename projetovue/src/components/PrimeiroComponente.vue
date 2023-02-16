<template>
    <div>
      <h1>Olá Vue 3</h1>
      <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p> 
      <MultiplosEventos/>
      <Reutilizacao/>
      <Reutilizacao/>
      <Reutilizacao/>
      <Reutilizacao/>
    </div>
</template>

<script>
    import MultiplosEventos from "./MultiplosEventos.vue";
    import Reutilizacao from "./Reutilizacao.vue";
    export default{
        name: 'primeiroComponente',
        components:{
          MultiplosEventos,
          Reutilizacao
        },
        data(){
          return{
            nome: "PedroJr",
            profissao: "Programador"
          }  
        }
    }
</script>