const ListRendering = {
    data(){
      return{
        todos:[
            {text: "Aprender Javascript"},
            {text: "Aprender Vue"},
            {text: "Criar algo incrivel"}
        ]  
      }  
    }
}

Vue.createApp(ListRendering).mount("#list-rendering");