<template>
  <div class="container mx-auto">
    <div
      class="max-w-xs md:mt-24 p-5 mx-auto flex flex-col bg-white rounded-xl h-80 lg:h-96 shadow-2x md:p-10 md:max-w-lg"
    >
      <h4 class="text-4xl mb-6 font-bold text-center text-indigo-500">
        Profile image
      </h4>
      <img
        class="mb-6 mx-auto rounded-sm"
        style="height: 150px; width: 150px;"
        :src="[
          user.profilePicURL
            ? user.profilePicURL
            : require('~/assets/anonymous.svg')
        ]"
        alt="profile picture"
      />
      <button
        class="bg-indigo-500 px-3 mb-6 mt-4 max-w-sm mx-auto shadow-sm text-lg text-white font-medium h-10 rounded-md hover:bg-indigo-600"
        @click="showUpload = !showUpload"
      >
        Change profile image?
      </button>
      <div class="text-center " v-show="this.showUpload">
        <input type="file" accept="image/*" @change="fileSelected" />
        <button
          class="bg-indigo-500 px-3 mb-6 mt-4 max-w-sm mx-auto shadow-sm text-lg text-white font-medium h-10 rounded-md hover:bg-indigo-600"
          @click="uploadImage"
        >
          Upload image
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      showUpload: false,
      file: null
    };
  },
  methods: {
    fileSelected(event) {
      this.file = event.target.files[0];
    },
    async uploadImage(event) {
      try {
        const formdata = new FormData();
        formdata.append("avatar", this.file);
        const response = await this.$axios.post("/user/profilepic", formdata, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.$store.dispatch("saveUser", response.data.user);
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style></style>
