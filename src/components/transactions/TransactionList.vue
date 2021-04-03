<template>
  <section class="text-left">
    <strong class="mr-1">Recent orders:</strong>
    <span v-for="(limit, index) in [15, 50, 100]" :key="limit">
      <button type="button" class="text-blue-500" @click="maxRecentTxs = limit">
        {{ limit }}
      </button>
      <span v-if="index < 2">, </span>
    </span>

    <ul class="transactions--list">
      <li v-for="tx in recentTxs.reverse()" :key="tx.id">
        <span :class="tx.side === 'buy' ? 'text-green-500' : 'text-red-500'">
          {{ tx.side }}
        </span>
        {{ tx.last_size }}
        @ {{ tx.price }}
      </li>
    </ul>
    <footer
      v-if="recentTxs.length"
      :class="{ 'invisible': streak.amount < 3 }"
    >
      Streak: {{ streak.amount }} {{ streak.side }}s
    </footer>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      maxRecentTxs: 15,
    };
  },
  computed: {
    ...mapState(["txs"]),
    recentTxs() {
      const { maxRecentTxs, txs = [] } = this;
      const startAt = Math.max(txs.length - maxRecentTxs, 1);
      return txs.slice(startAt, txs.length);
    },
    streak() {
      let { recentTxs } = this;
      let amount = 0;
      let stopCounting;

      recentTxs = recentTxs.reverse();

      const { side } = recentTxs[0];

      recentTxs.forEach((tx) => {
        if (tx.side !== side) {
          stopCounting = true;
        }
        if (!stopCounting) {
          amount++;
        }
      });

      return { side, amount };
    },
  },
};
</script>
