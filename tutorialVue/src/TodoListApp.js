const TodoItem = {
    props:['todo'],
    template: `<li>{{todo.text}}</li>`
}

const TodoList = {
    data(){
      return{
        groceryList:[
          {id: 0, text: 'Vegetais'},
          {id: 1, text: 'Queijo'},
          {id: 2, text: 'Qualquer outra coisa que humanos podem comer'}  
        ]  
      }  
    },
    components:{
      TodoItem  
    }
}

const app = Vue.createApp(TodoList)
app.mount('#todo-list-app')