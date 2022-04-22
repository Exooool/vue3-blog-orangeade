import { createStore } from "vuex";

export default createStore({
  state: {
    number: 0,
    name: "MR Zhang",
  },
  getters: {
    getName() {
      return "this is MyName: " + this.name;
    },
  },
  mutations: {
    add(state, payload) {
      state.number++;
    },
  },
  actions: {},
  modules: {},
});
