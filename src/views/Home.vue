<template>
  <div>
    <div class="home">
      <h1>smartplanner</h1>
      <p>an application where you can create your schedules</p>
    </div>
    <div class="cards">
      <div class="card" @click="createOwn">
        <div class="header">
          <h1>create your own</h1>
        </div>
        <div class="menu">
          in this option you will basically create your own schedule.
        </div>
      </div>
      <div class="card" @click="smartPlanner">
        <h1>let us do the work</h1>
        <div class="menu">
          answer a few questions and let us do the work.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    createOwn() {
      this.$router.push({ name: "CreateYourOwn" });
    },
    smartPlanner() {}
  }
};
</script>

<style scoped>
.home h1 {
  margin-top: 50px;
}

.home p {
  font-size: 20px;
}

.cards {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  height: 50vh;
  align-items: center;
}

.card {
  width: 500px;
  border: 1px solid #3a5683;
  padding: 20px;
  font-family: "Indie Flower", cursive;
  border-radius: 3px;
  transition: 300ms all;
}

.card:hover {
  background-color: #2708a0;
  color: white;
}

.card:nth-child(1) {
  margin-right: 30px;
}
</style>
