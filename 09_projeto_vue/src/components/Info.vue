<template>
    <div>
        <p v-if="estou_trabalhando">Estou trabalhando no momento</p>
        <p v-else> Estou em busca de novas oprotunidades!</p>
        <p>Tenho conhecimento nas seguintes tecnologias:</p>
        <ul>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>C++</li>
          <li>Arduino</li>
       </ul>
       <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
    </div>
</template>

<script>
export default {
   name: 'info',
   data(){
      return{
         estou_trabalhando: false,
         mostrar_email: true,
         email: 'andreluiz@email.com'
      }
   } 
}
</script>