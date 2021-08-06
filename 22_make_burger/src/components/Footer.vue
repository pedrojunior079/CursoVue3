<template>
    <footer id="footer">
       <p>Make Your Burger</p>
    </footer>
</template>

<script>
import Footer from '../../../make_burger/src/components/Footer.vue'
export default {
  components: { Footer },
   name: "Footer"
}
</script>

<style scoped>
  #footer{
      height: 200px;
      background-color: #222;
      border-top: 4px solid #111;
      color: #FCBA03;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
  }
</style>