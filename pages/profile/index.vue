<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <h1
        class="text-center text-white font-semibold tracking-wide text-2xl md:text-4xl mt-4"
      >
        Profile
      </h1>
      <div
        class="bg-white rounded-md max-w-lg md:max-w-3xl p-4 m-4 flex flex-col mx-auto leading-0"
      >
        <h3 class="text-2xl">
          Name: {{ user.firstname + " " + user.lastname }}
        </h3>
        <h3 class="text-2xl">Email: {{ user.email }}</h3>
        <h3 class="text-2xl">Birthday: {{ user.birthday | formatDate }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  components: { Header },
  middleware: "auth",
  computed: {
    user() {
      return this.$store.getters.user;
    },
  }
};
</script>

<style></style>
