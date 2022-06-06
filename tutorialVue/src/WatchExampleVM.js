const watchExampleVM = Vue.createApp({
   data(){
     return{
       question: '',
       answer: 'Perguntas possuem pontos de interrogação ;-)'  
     }  
   },
   watch: {
     // sempre que 'question' sofrer alterações, esta função sera executada
     question(newQuestion, oldQuestion) {
         if(newQuestion.indexOf('?') > -1)
         {
            // apenas chamará this.getAnswer() se o novo valor de 'question'
            // (newQuestion) possui um ponto de interrogação
            this.getAnswer() 
         }
     } 
   },
   methods:{
     getAnswer(){
       this.answer = 'Pensando...'
       axios.get('https://yesno.wtf/api').then(response => {
         const responseAnswer = response.data.answer
         this.answer = responseAnswer === 'yes' ? 'Sim' :  
         responseAnswer === 'no' ? 'Não' : 'Talvez?'  
       })
       .catch(error => {
         this.answer = 'Erro! Não foi possivel adquirir resultados da API: ' +error  
       })         
     }  
   } 
}).mount('#watch-example')