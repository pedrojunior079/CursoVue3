/*
  Dentro de blocos v-for temos acesso completo às propriedades do escopo pai. 
  v-for também suporta um segundo argumento opcional para o índice do item atual.
*/
Vue.createApp({
   data(){
     return{
       parentMessage: 'Pai',
       items: [{message: 'Vue'}, {message: 'JavaScript'}]
     }  
   } 
}).mount('#array-with-index')