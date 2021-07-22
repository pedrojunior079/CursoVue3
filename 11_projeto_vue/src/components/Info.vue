<template>
    <div>
        <p v-if="procurando_trabalhando">Procurando trabalhando no momento</p>
        <p v-else> Estou em busca de novas oprotunidades!</p>
        <p>Tenho conhecimento nas seguintes tecnologias:</p>
        <ul>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>C++</li>
          <li>Arduino</li>
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
   name: 'info',
   data(){
      return{
         procurando_trabalhando: false,
         mostrar_email: false,
         email: 'pedrojunior@email.com',
         meu_link: 'https://google.com.br',
         textoBotao: 'mostrar e-mail'
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