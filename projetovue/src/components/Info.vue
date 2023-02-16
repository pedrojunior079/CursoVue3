<template>
  <div>
    <p v-if="procuraDeEmprego">Estou a procura de emprego no momento como programador.</p>
    <p v-else>Em busca de novos aprendizados na area!</p>
    <p>Tenho conhecimento nas seguintes tecnologias para back-end:</p>
    <ul>
      <li v-for="(tecnologia, index) in backEndTecnologias" v-bind:key="index">
        {{ tecnologia }}</li>
    </ul>
    <p>Tenho conhecimento nas segintes tecnologias front-end:</p>
    <ul>
      <li v-for="tecnologia in frontEndTecnologias" :key="tecnologia.id">
         {{ tecnologia.linguagem }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">Para acessar meu portfólio <a v-bind:href="meuLink" target="_blank">basta clicar aqui</a></p>
    <Picture/>
  </div>
</template>
<script>
import Picture from './Picture.vue';

  export default{
    name: 'Info',
    components:{
      Picture
    },
    props:{
       email: String,
       procuraDeEmprego: Boolean
    },
    data(){
      return{
        mostrarEmail: true,
        meuLink: 'https://google.com.br',
        textoBotao: 'Mostrar e-mail',
        backEndTecnologias: ['Spring boot java'],
        frontEndTecnologias:[
          {id: 1, linguagem: 'HTML5 e CSS3'},
          {id: 2, linguagem: 'React'},
          {id: 3, linguagem: 'Vue'}
        ]
      }
    },
    methods:{
      showEmail(){
        this.mostrarEmail = !this.mostrarEmail
        if(!this.mostrarEmail){
          this.textoBotao = 'Mostrar e-mail'
        }else{
          this.textoBotao = 'Esconder e-mail'
        }
      }
    }
  }
</script>

<style>
   .paragrafoPai{
     color: red;
   }
</style>