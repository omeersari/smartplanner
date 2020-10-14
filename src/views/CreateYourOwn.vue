<template>
  <div>
    <Container>
      <h1>create your own</h1>
      <router-link to="/">Go back</router-link>
      <div class="menu">
        <div class="actions">
          <button>Add Item</button>
          <button>Edit Item</button>
          <button>Download as PDF</button>
          <button>Restart</button>
        </div>
        <div class="table"  >
          MY TABLE
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

.menu {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 4fr;

}
.actions {
  display: grid;
  grid-template-rows: 1fr;
  gap: 10px;
  justify-items: start;
}

.actions button {
  width: 120px;
  padding: 20px;
  font-family: "Indie Flower", cursive;
  background-color: #2708a0;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  transition: 300ms all;
}

.actions button:hover {
  background-color: white;
  color: black;
}

</style>