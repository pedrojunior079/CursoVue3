const TwoWayBinding = {
    data(){
        return{
            message: "Olá Vue.js!"
        }
    }
}

Vue.createApp(TwoWayBinding).mount("#two-way-binding");