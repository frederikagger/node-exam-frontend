<template>
  <div class="container mx-auto">
    <div
      class="flex flex-col mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
    >
      <h1
        class="text-5xl mx-auto font-mono text-white mt-5 sm:mt-10 xl:mb-10 mb-5 font-semibold"
      >
        Private chat
      </h1>
      <textarea
        v-model="chat"
        class="bg-white rounded-lg mb-10 mx-auto w-full h-64 sm:h-96 p-2 overflow-auto"
      ></textarea>

      <input
        class="py-1 px-4 focus:placeholder-gray-600 mx-auto w-full border mb-2 placeholder-gray-400 text-lg text-black  bg-white rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        v-model="message"
        type="text"
        autocomplete="off"
        placeholder="Message.."
      />
      <button
        type="button"
        class="py-2 px-4 bg-blue-500 text-white text-lg mx-auto w-full font-semibold rounded-lg shadow-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-75"
        @click="send"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      chat: "",
      message: ""
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({});
    this.socket.on("connect", ()=> console.log(this.socket.id));
    this.socket.on("server emit", (msg, cb) => {
      const { message } = msg;
      this.chat = this.chat + message;
    });
  },
  computed: {
    user() {
      this.$store.getters.user;
    }
  },
  methods: {
    send() {
      if (this.message) {
        this.socket.emit(
          "chat message",
          {
            message: this.message
          },
          resp => {
            console.log(resp);
            /* Handle response, if any */
          }
        );
        this.message = "";
      }
    }
  }
};
</script>
