<template>
    <div class="container mx-auto">
      <h1 class="text-white mt-4 text-5xl text-center">Users</h1>

      <div v-for="user in users" :key="user._id">
        <div
          v-show="loggedInUser._id !== user._id"
          class="max-w-sm mx-auto flex justify-between bg-indigo-700 p-5 my-3 rounded-lg cursor-pointer"
        >
          <div class="flex flex-col">
            <div class="text-white text-xl">
              {{ user.firstname + " " + user.lastname }}
            </div>
            <div class="text-gray-200">
              {{ user.country }}
            </div>
          </div>

          <img
            class="h-14 w-14 rounded-full"
            :src="[
              user.profilePicURL
                ? user.profilePicURL
                : require('~/assets/anonymous.svg')
            ]"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
</template>

<script>
export default {
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
