<template>
    <div>
        <!--<p>{{compEmail}} - {{email}}</p>-->
        <p v-if="procurando_trabalho">Procurando trabalhando no momento</p>
        <p v-else> Estou em busca de novas oportunidades!</p>
        <p class="paragrafo-pai">Utilizo as seguintes tecnologias para back-end:</p>
        <ul> 
          <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{technology}}</li>
       </ul>
       <p>Utilizo as seguintes tecnologias para Front-end</p>
       <ul>
          <li v-for="technology in frontend_technologies" :key="technology.id">
             {{technology.language}}
          </li>
       </ul>
       <div>
          <button @click="showEmail">{{textoBotao}}</button>
       </div>
       <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
       <p>Para acessar meu portifólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
       <Picture/>
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
  components: { 
     Picture 
   },
   props:{
     //compEmail: String
     email: String,
     procurando_trabalho: Boolean 
   },
   name: 'info',
   data(){
      return{
         //procurando_trabalho: false,
         mostrar_email: false,
         //email: 'pedrojunior@email.com',
         meu_link: 'https://google.com.br',
         textoBotao: 'mostrar e-mail',
         backend_technologies:['JavaScript','HTML5','CSS','PHP'],
         frontend_technologies:[
           {id: 1, language: 'Node.js'},
           {id: 2, language: 'Vue.js'},
           {id: 3, language: 'Angular.js'},
           {id: 4, language: 'C++'}
         ]
      }
   },
   methods:{
      showEmail(){
         this.mostrar_email = !this.mostrar_email
         if(!mostrar_email){
            this.textoBotao = 'Mostrar e-mail'
         }else{
            this.textoBotao = 'Esconder e-mail'
         }
      }
   } 
}
</script>

<style>
  .paragrafo-pai{
     color:red;
  }
</style>