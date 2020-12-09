<template>
  <div class="rounded-full h-10 w-10 cursor-pointer bg-blue-600 hover:bg-blue-800 m-1 p-1 text-white text-center text-xl">
    {{ pageNumber }}
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: Number
  }
};
</script>
