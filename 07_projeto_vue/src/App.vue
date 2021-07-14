<template>
  <div>
    <PrimeiroComponente/>
    <LifeCycle/>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'app',
  components:{
    PrimeiroComponente,
    LifeCycle
  }
}
</script>