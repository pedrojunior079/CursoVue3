<template>
  <div>
    
    <p v-if="procuraDeEmprego">Estou a procura de emprego no momento como programador.</p>
    <p v-else>Em busca de novos aprendizados na area!</p>
    <p>Tenho conhecimento nas seguintes tecnologias:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>NodeJs</li>
      <li>VueJs</li>
      <li>ReactJs</li>
      <li>Angular</li>
      <li>Laravel</li>
      <li>Banco de Dados</li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
    <p>Para acessar meu portfólio <a v-bind:href="meuLink" target="_blank">basta clicar aqui</a></p>
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
    data(){
      return{
        procuraDeEmprego: false,
        mostrarEmail: true,
        email: 'pedrojr@email.com',
        meuLink: 'https://google.com.br',
        textoBotao: 'Mostrar e-mail'
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