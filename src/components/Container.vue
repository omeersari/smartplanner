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
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-top: 40px;

}

</style>