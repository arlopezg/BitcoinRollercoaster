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
    buysAndSells({ txs }) {
      return txs.reduce(
        (counter = {}, tx) => {
          if (tx.side === "buy") {
            counter.buys++;
            return counter;
          }
          counter.sells++;
          return counter;
        },
        { buys: 0, sells: 0 }
      );
    },
    priceRange({ txs }) {
      const prices = txs
        .filter(({ price }) => price)
        .map(({ price }) => +price);

      const high = Math.max(...prices);
      const low = Math.min(...prices);
      const average = (high + low) / 2;
      return {
        high: formatMoney(high),
        low: formatMoney(low),
        average: formatMoney(average),
        averageNumeric: average,
        highNumeric: high,
        lowNumeric: low,
      };
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
