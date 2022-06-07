const app = Vue.createApp({
   data(){
     return{
       newTodoText: '',
       todos:[
         {
             id: 1,
             title: 'Lavar a louça'
         },
         {
             id: 2,
             title: 'Tirar o lixo'
         },
         {
             id: 3,
             title: 'Cortar a grama'
         }  
       ],
       nextTodoId: 4  
     }  
   } ,
   methods:{
     addNewTodo(){
       this.todos.push({
         id: this.nextTodoId++,
         title: this.newTodoText  
       })
       this.newTodoText = ''  
     }  
   }
})

app.component('todo-item', {
   template: `
     <li> 
       {{title}}
       <button @click="$emit('remove')">Remover</button>
     </li> 
   `,
   props:['title'],
   emits:['remove'] 
})

app.mount('#todo-list-example')