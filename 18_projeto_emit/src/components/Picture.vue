<template>
    <div>
      <img :src="avatar" :alt="descricao">
      <MudarImagem @mudar-imagem="MudarImagem"/>
    </div>  
</template>

<script>
import MudarImagem from './MudarImagem.vue';

export default {
    name: 'Picture',
    components:{
      MudarImagem
    },
    data(){
        return{
            avatar: "/img/avatar.png",
            descricao: "Pedro Junior"
        }
    },
    methods:{
        MudarImagem(){
            this.avatar = "/img/avatar2.png"
        }
    }

}
</script>