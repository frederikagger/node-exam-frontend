<template>
  <div class="container mx-auto">
    <h1 class="text-white mt-4 text-5xl text-center">Users</h1>
    <user-card v-for="user in users" :user="user" :key="user._id" />
  </div>
</template>

<script>
import pagination from "../../components/pagination.vue";
import UserCard from "../../components/userCard.vue";
export default {
  components: { pagination, UserCard },
  middleware: "auth",
  data() {
    return {
      users: [],
      limit: 10,
      page: 1
    };
  },
  async created() {
    try {
      this.users = await this.$axios.$get(
        "/users?limit=" + this.limit + "&page=" + this.page
      );
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
