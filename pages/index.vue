<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <h1 class="text-white text-6xl font-semibold text-center mt-5">Welcome</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  middleware: "auth"
};
</script>

<style></style>
