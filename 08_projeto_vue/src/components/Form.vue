<template>
    <div>
        <h2>Meu Formulário</h2>
         <form action="">
         <div>
           <InputText/>
         </div>
         <div>
           <InputText/> 
         </div>
           <Submit/>    
        </form>
    </div>
</template>

<script>
import InputText from './Form/InputText.vue'
import Submit from './Form/Submit.vue'
   export default{
      name: 'Form',
      components:{
          InputText,
          Submit
      }
   }
</script>