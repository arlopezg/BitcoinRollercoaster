import { createStore } from "vuex";
import { formatMoney } from "../utils";

export default createStore({
  state: {
    direction: "",
    price: 0,
    txs: []
  },
  getters: {
    formattedPrice({ price }) {
      return formatMoney(price);
    },
    priceRange({ txs }) {
      const prices = txs
        .filter(({ price }) => price)
        .map(({ price }) => +price);

      const high = Math.max(...prices);
      const low = Math.min(...prices);
      const average = (high + low) / 2;
      const spread = (high - low) / high * 100;
      return {
        average: formatMoney(average),
        averageNumeric: average,
        high: formatMoney(high),
        highNumeric: high,
        low: formatMoney(low),
        lowNumeric: low,
        spread: spread.toFixed(2) + "%"
      };
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
    getPriceTrendByTxs({ txs, price }) {
      return (limitTo = txs.length) => {
        const recentTxs = txs.reverse().slice(0, limitTo);

        const sum = recentTxs.reduce((total, tx) => (total += tx.price), 0);
        const avg = sum / limitTo;

        return price > avg ? "up" : "down";
      };
    }
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.with;
    }
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
      tx.price = Number(tx.price);
      commit("mutate", { property: "price", with: Number(tx.price) || 0 });
      commit("mutate", { property: "txs", with: [...txs, tx] });
    }
  }
});
