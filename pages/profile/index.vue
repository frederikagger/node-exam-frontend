<template>
  <div>
    <Header />
    <div class="container mx-auto">
        <h1 class="text-center text-white font-semibold tracking-wide text-2xl md:text-4xl mt-4">Profile</h1>
        <h3 class="">Name: {{user.name}}</h3>

    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  components: { Header },
    middleware: "auth",
};
</script>

<style></style>
