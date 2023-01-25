<template>
  <div>
    
    <p v-if="procuraDeEmprego">Estou a procura de emprego no momento como programador.</p>
    <p v-else>Em busca de novos aprendizados na area!</p>
    <p>Tenho conhecimento nas seguintes tecnologias:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>NodeJs</li>
      <li>VueJs</li>
      <li>ReactJs</li>
      <li>Angular</li>
      <li>Laravel</li>
      <li>Banco de Dados</li>
    </ul>
    <p v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
  </div>
</template>
<script>
  export default{
    name: 'Info',
    data(){
      return{
        procuraDeEmprego: false,
        mostrarEmail: true,
        email: 'pedrojr@email.com'
      }
    }
  }
</script>