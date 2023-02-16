<template>
   <ul>
     <li><a href="">Home</a></li>
     <li><a href="">Projetos</a></li>
     <li><a href="">Contatos</a></li>
     <li v-if="estaLogado"><a href="">Meu Perfil</a></li>
   </ul>
</template>
<script>
    export default{
      name: 'Header',
      props: ["estaLogado"]  
    }
</script>

<style scoped>
   ul{
     list-style: none;
     display: flex;
     background: #999;
   }

   li{
     margin-right: 10px;
   }

   a{
     color: #DDD;
     text-decoration: none;
     transition: .5s;
   }

   a:hover{
     color: turquoise;
   }
</style>