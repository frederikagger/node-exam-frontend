<template>
    <div class="container mx-auto">
      <h1 class="text-white text-4xl font-semibold text-center mt-10">
        Hello {{firstname}}! 
      </h1>
    </div>
</template>

<script>
export default {
  middleware: "auth",
  computed: {
    token() {
      return this.$store.state.token;
    },
    firstname() {
      return this.$store.state.user.firstname;
    }
  },
  async created() {
    try {
      const user = await this.$axios.$get("/user");
      this.$store.dispatch("saveUser", user);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
