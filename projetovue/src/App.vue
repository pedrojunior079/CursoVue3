<template>
    <Header :estaLogado="true"/>
    <PrimeiroComponente/>
    <p class="paragrafoPai">O dado do app é: {{ testando }}</p>
    <LifeCycle/>
    <Pessoa/>
</template>

<script>
    import Header from './components/Header.vue';
    import PrimeiroComponente from './components/PrimeiroComponente.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue'; 

    export default{
      name: 'App',
      components:{
        Header,
        PrimeiroComponente,
        LifeCycle,
        Pessoa
      },
      data(){
        return{
          testando: "Programando em VueJs"  
        }
      }
    }
</script>

<style>
  body{
    background-color: #333;
    color: #fff;
  }

  a{
    color: red;
  }

  .teste{
    background-color: #000;
  }
</style>
