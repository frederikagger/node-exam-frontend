<template>
  <div>
    <myHeader />
    <div class="container mx-auto">
        
      <h1 class="text-white mt-10 text-5xl text-center">Users</h1>

      <div v-for="user in users" :key="user._id">
        <div v-show="loggedInUser._id !== user._id" class="max-w-sm mx-auto bg-indigo-700 p-5 my-3 rounded-lg">
          <div class="text-white text-xl">
            {{ user.firstname + " " + user.lastname }}
          </div>
          <img
                class="h-8 w-8 rounded-full"
                :src="[user.profilePicURL ? user.profilePicURL : require('~/assets/anonymous.svg')]"
                alt="profile picture">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "../../components/Header.vue";
export default {
  components: { myHeader },
  middleware: "auth",
  computed: {
     loggedInUser() {
      return this.$store.getters.user;
    }
  },
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      this.users = await this.$axios.$get("/users");
      console.log(this.users);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
