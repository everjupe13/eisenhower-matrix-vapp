<template>
  <div class="container" >
    <slot />
  </div>
</template>

<script>
export default {
    name: 'container-element',
}
</script>

<style lang="scss">
.container {
  padding: 0 15px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
</style>