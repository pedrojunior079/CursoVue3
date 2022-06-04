const AttributeBinding = {
    
    data(){
        return{
            message: "Voce carregou esta pagina em " + new Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount("#bind-attribute");