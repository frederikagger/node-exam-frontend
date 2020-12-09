<template>
  <div class="flex flex-row items-center p-1">
      <pagination-item v-for="n in 5" :key="n" :pageNumber="n" @click="nav(event)"/>
  </div>
</template>

<script>
import paginationItem from './paginationItem.vue'
export default {
  components: { paginationItem },
  methods: {
      nav(event) {
          console.log(event.target.value);
      }
  }

}
</script>

<style>

</style>