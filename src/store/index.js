import { createStore } from "vuex";

export default createStore({
  state: {
    price: 0,
    direction: "",
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with;
    },
  },
  actions: {
    setDirection({ commit }, direction = "") {
      commit("mutate", {
        property: "direction",
        with: direction,
      });
    },
    setSpeed({ commit }, speed = "") {
      console.log("Speed", speed);
      commit("mutate", {
        property: "speed",
        with: speed,
      });
    },
  },
});
