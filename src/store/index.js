import { createStore } from "vuex";
import { formatMoney } from "../utils";

export default createStore({
  state: {
    price: 0,
    direction: "",
    txs: [],
  },
  getters: {
    formattedPrice({ price }) {
      return formatMoney(price);
    },
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with;
    },
  },
  actions: {
    setDirection({ commit }, direction = "") {
      commit("mutate", { property: "direction", with: direction });
    },
    setSpeed({ commit }, speed = "") {
      commit("mutate", { property: "speed", with: speed });
    },
    logTx({ commit, state }, tx = {}) {
      const { txs } = state;
      commit("mutate", { property: "price", with: Number(tx.price) || 0 });
      commit("mutate", { property: "txs", with: [...txs, tx] });
    },
  },
});
