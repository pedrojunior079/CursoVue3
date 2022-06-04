const MyNameApp = {
    data(){
        return{
            name: "PedroJr",
            idade: 42
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");