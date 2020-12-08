<template>
  <div
    @click="chat"
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
</template>

<script>
export default {
  props: {
    user: Object
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.user;
    }
  },
  methods: {
    chat() {
      this.$router.push("/users/chat/" + this.user._id);
    }
  }
};
</script>
