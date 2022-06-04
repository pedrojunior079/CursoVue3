const Contador = {
    data(){
        return{
            contador: 0
        }
    },
    mounted(){
        setInterval(() =>{
            this.contador++
        }, 1000)
    }
}

Vue.createApp(Contador).mount("#contador");