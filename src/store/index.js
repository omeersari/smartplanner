import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemList : []
  },
  getters: {
    itemList: state => state.itemList
  },
  mutations: {
    addToItem(state, item) {
      state.itemList.push(item)
    }
  },
  actions: {},
  modules: {}
});
