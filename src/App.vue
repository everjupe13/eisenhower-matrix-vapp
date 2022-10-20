<template>
  <div class="app">
    <header-element style="flex-grow: 0" />
    <router-view style="flex-grow: 1; padding-top: 20px;" />
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement.vue";

export default {
  components: {
    HeaderElement
},
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

:root {
  --accent-color: #fa9c3d;
  --border-color: #cbcbcb;
  --text-black: #343333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}
</style>
