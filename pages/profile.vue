<template>
  <div>
    <div class="flex flex-col md:absolute relative inset-y-10 left-0">
      <nuxt-link :to="'/profile/picture'" class="text-indigo-700 font-semibold border-b-2 border-gray-800 tracking-wide text-2xl m-2 p-2 hover:text-white">Picture</nuxt-link>
      <nuxt-link :to="'/profile/data'" class="text-indigo-700 font-semibold border-b-2 border-gray-800 tracking-wide text-2xl m-2 p-2 hover:text-white">Profile data</nuxt-link>
    </div>
    <div>
          <nuxt-child/>
    </div>
  
  </div>
</template>

<script>
export default {
      middleware: "auth",
};
</script>

<style></style>
