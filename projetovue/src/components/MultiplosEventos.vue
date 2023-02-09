<template>
   <div>
     <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()">Ativar multiplos eventos</button>
     <p>{{ multiplosEventos }}</p>
   </div>
</template>
<script>
export default{
  name: 'MultiplosEventos',
  data(){
    return{
      multiplosEventos: "",
      txt1: "Primeiro evento",
      txt2: "Segundo evento"  
    }
  },
  methods:{
    primeiro(txt, e){
      this.multiplosEventos = txt;  
    },
    segundo(txt, e){
      setTimeout(() => this.multiplosEventos = txt, 5000)  
    },
    terceiro(){
      setTimeout(() => this.multiplosEventos = "", 1500) 
    }
  }
}
</script>
<style scoped>
   div{
     margin: 100px;
   }
</style>