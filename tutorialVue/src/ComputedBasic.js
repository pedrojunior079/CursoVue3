Vue.createApp({
   data(){
     return{
       author:{
         name: 'John Doe',
         books:[
           'Vue 2 - Guia Avançado',
           'Vue 3 - Guia Básico',
           'Vue 4 - O Mistério'  
         ]  
       }  
     }  
   },
   computed:{
     // uma função "getter" computada (computer getter)
     publishedBooksMessage(){
       // `this` aponta para a instancia Vue `vm` de `Vue.createApp(...)`
       return this.author.books.length > 0 ? 'Sim' : 'Não'  
     }  
   } 
}).mount('#computed-basics');