const EventHandling = {
    data(){
        return{
            message: "Olá Vue.js!"
        }
    },
    methods:{
        reverseMessage(){
            this.message = this.message
            .split('')
            .reverse()
            .join('')
        }
    }
}

Vue.createApp(EventHandling).mount("#event-handling");