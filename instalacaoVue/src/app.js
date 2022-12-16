const MyNameApp = {
    data(){
        return{
            name: "",
            input_name: ""
        }
    },
    methods:{
        siubmitForm(e){

            e.preventDefault()

            console.log(this.input_name);
            
            this.name = this.input_name; 
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");