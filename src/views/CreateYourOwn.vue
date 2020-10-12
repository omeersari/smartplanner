<template>
  <div>
    <Container>
      <h1>create your own</h1>
      <router-link to="/">Go back</router-link>
      <div class="menu">
        <div class="actions">
          
        </div>
        <div class="table">

        </div>
      </div>



    </Container>

  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
name: "CreateYourOwn",
  components: {
  Container
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: #2c3e50;
}

</style>