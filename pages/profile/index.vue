<template>
  <div>
    <myHeader />
    <div class="container mx-auto">
      <div
        id="card"
        class="max-w-xs mt-10 md:mt-24 p-5 mx-auto flex flex-col bg-white rounded-xl h-80 lg:h-96 shadow-2x md:p-10 md:max-w-lg"
      >
        <h4 class="text-4xl mb-6 font-bold text-center text-indigo-500">
          Profile
        </h4>
        <div class="flex">
          <input
           v-model="user.firstname"
          
            id="firstname"
            class="p-1 placeholder-black w-1/2 mr-3 focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            required
          />
          <input
            v-model="user.lastname"
            id="lastname"
            class="p-1 placeholder-black w-1/2 focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            required
          />
        </div>
        <input
          v-model="user.email"
          id="email"
          class="p-1 placeholder-black focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
        />
        <input
          v-model="user.password"
          id="password"
          class="p-1 placeholder-black focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="password"
        />
        <input
          v-model="user.birthday"
          id="birthday"
          class="p-1 placeholder-black focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="date"
        />
        <select
          name="countries"
          id="country"
          class="p-1 placeholder-black focus:placeholder-grey-300 border mb-4 text-black text-lg bg-indigo-100 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          
        >
          <option :value="user.country" disabled hidden>Country</option>
          <option
            v-for="country in countries"
            :key="country"
            :value="country"
            >{{ country }}</option
          >
        </select>
        <button
          @click="updateProfile"
          class="bg-indigo-500 mb-4 shadow-md text-lg text-white font-medium h-10 rounded-md hover:bg-indigo-400"
        >
          Update profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "../../components/Header.vue";
export default {
  components: { myHeader },
  middleware: "auth",
  async created() {
    try {
      this.user = await this.$axios.$get("/user");
      this.user.birthday = this.user.birthday.slice(0,10);
      console.log(this.user.birthday);
    } catch(error){
      console.log(error);
    }
  },
  data() {
    return {
       user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        birthday: null,
        country: ""
      },
      countries: ["Denmark", "Sweden", "Norway", "Finland"]
    };
  },
  methods: {
    async updateProfile() {
      try {
        const response = await this.$axios.patch("/user", {
          user: this.user
        });
        //console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
