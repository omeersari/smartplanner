<template>
  <div class="menu">
    <form action="">
      <div class="question">
        <label for="">How many hours do you have for free ?</label>
        <input type="number" placeholder="Hours" />
      </div>
      <div class="question">
        <label for="">Please let us know when you are free ?</label>
        <select name="">
          <option value="Select" disabled selected>Select</option>
          <option value="">All day</option>
          <option value="">5PM - To sleep</option>
          <option value="">8AM - 5PM</option>
        </select>
        <i class="fas fa-cog"></i>
      </div>
      <div class="question">
        <label for="">How many hours do you sleep ?</label>
        <input type="number" placeholder="Hours" />
      </div>
      <div class="question">
        <label for="">Tell us the things you want to do !</label>
        <div class="items">
          <input type="text" v-model="item.name" placeholder="What to do" />
          <input type="text" v-model="item.hour" />
        </div>
        <div class="buttons">
          <button class="add" @click="addItem(item)" type="button">Add</button>
          <span class="list" @click="isList">See the list</span>
        </div>
      </div>
      <div class="myList" v-if="isListTrue">
        <div v-for="item in itemList" :key="item.id"> {{item.name}}, {{item.hour}} hours </div>
      </div>
    </form>

  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';


export default {
  name: "Questions",
  data() {
    return {
      freeHours: 0,
      sleepTime: 0,
      item: {
        name: "",
        hour: 0,
      },
      isListTrue: false,
    }
  },
  methods: {
    ...mapMutations(["addToItem"]),
    addItem(item) {
      this.addToItem(item)
      this.clear()
    },
    clear() {
      this.item.name = "";
      this.item.hour = 0;
    },
    isList() {
      this.isListTrue = !this.isListTrue
    }
  },
  computed: {
    ...mapGetters(["itemList"])
  }
};
</script>

<style scoped>
.menu {
  margin-top: 50px;
}

.question {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 15px;
}

.question label {
  font-size: 20px;
  justify-self: start;
}

.question input {
  height: 30px;
  padding: 0 20px;
  border: 2px solid rgb(219, 219, 219);
  width: 200px;
  border-radius: 3px;
  margin-right: 15px;
  justify-self: end;
}

.question select {
  height: 30px;
  padding: 0 20px;
  border: 2px solid rgb(219, 219, 219);
  width: 200px;
  border-radius: 3px;
  margin-right: 15px;
  justify-self: end;
}

.items {
  display: flex;
  justify-content: flex-end;
}

.items input:nth-child(1) {
  width: 130px;
}

.items input:nth-child(2) {
  width: 55px;
}

.buttons {
  display: flex;
  align-items: center;
}
.buttons .add {
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  background-color: black;
  color: white;
}

.list {
  margin-left: 10px;
  font-size: 20px;
}

.list:hover {
  cursor: pointer;
  text-decoration: underline;
}

.question i {
  justify-self: start;
  font-size: 22px;
}

.myList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  font-size: 22px;
  justify-items: start;
  margin-top: 30px;
}



</style>
