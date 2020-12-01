<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <h1 class="text-white text-5xl font-semibold text-center mt-5">Welcome to the coolest social network!</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  middleware: "auth",
  async created() {
        const user = await this.$axios.$get("/user");
        this.$store.dispatch("saveUser", user);
  }
};
</script>

<style></style>
