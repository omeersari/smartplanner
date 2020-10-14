<template>
  <div>
    <Container>
      <router-link to="/">Go back</router-link>
      <Questions />
    </Container>

  </div>
</template>

<script>
import Container from "@/components/Container";
import Questions from "@/components/Questions";


export default {
name: "LetUsDo",
  components: {
  Container, Questions
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: #2c3e50;
}

.menu {
  margin-top: 50px;
}

.question {
  display: flex;
  justify-content: center;
  align-items: center;
}

.question label {
  font-size: 20px;
  margin-right: 15px;
}

.question input {
  height: 30px;
  padding: 0 20px;
  border: 2px solid rgb(219, 219, 219);
  width: 190px;
  border-radius: 3px;
  margin-right: 15px;
}

.question span:hover {
  cursor: pointer;
  text-decoration: underline;
}


</style>