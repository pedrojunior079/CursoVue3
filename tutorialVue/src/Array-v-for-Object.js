/*
  /*
  Você também pode utilizar v-for para iterar pelas propriedades de um objeto.
*/
Vue.createApp({
   data(){
     return{
       myObject:{
         titulo: 'Como fazer listas no Vue',
         autor: 'Jane Doe',
         publicadoEm: '22-03-2020'  
       }  
     }  
   } 
}).mount('#v-for-object')