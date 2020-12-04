<template>
  <div class="bg-gradient-to-l from-indigo-500 to-pink-500 min-h-screen h-full">
    <myHeader v-if="token"/>
    <Nuxt />
  </div>
</template>

<script>
import myHeader from '../components/Header.vue'
export default {
  components: { myHeader },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  }
  
}
</script>
