/*
  Podemos utilizar a diretiva v-for para renderizar uma lista de elementos com base nos dados de um Array. 
  A diretiva v-for requer uma sintaxe especial na forma de item in items, onde items é a fonte de dados e 
  item é um apelido para o elemento que estiver sendo iterado:  
*/
 Vue.createApp({
    data(){
      return{
        items: [{message: 'Vue'}, {message: 'Javascript'}]  
      }  
    } 
 }).mount('#array-rendering')   