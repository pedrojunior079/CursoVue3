Vue.createApp({
   data(){
     return{
       name: 'Vue.js'  
     }  
   } ,
   methods:{
     greet(event){
         // `this` dentro de métodos aponta para a atual instanacia Vue ativa
         alert('Olá ' + this.name + '!')
         // `event` é o evento DOM nativo
         if(event){
            alert(event.target.tagName) 
         }
     }   
   }
}).mount('#event-with-method')