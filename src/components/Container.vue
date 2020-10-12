<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>

.container {
  padding-top: 40px;
}

</style>