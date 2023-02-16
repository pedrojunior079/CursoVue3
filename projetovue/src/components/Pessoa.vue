<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <Info :email="email" :procuraDeEmprego=true />
    <Form/>
  </div>
</template>
<script>
import Info from "./Info.vue";
import Form from "./Form.vue";
   export default {
     name: 'Pessoa', 
     components:{
       Info,
       Form
     },
     data(){
       return{
         nome: 'PedroJr',
         email: 'pedrojr@email.com'
       } 
     } 
   }
   
</script>