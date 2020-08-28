<template>
  <div id="app">
    <div class="tw-container tw-mx-auto tw-p-4">
      <hello-world></hello-world>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
