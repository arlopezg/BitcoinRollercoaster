<template>
  <div class="text-left">
    <strong>Recent transactions:</strong>
    <ul class="transactions--list">
      <li v-for="tx in recentTxs" :key="tx.id">
        <span :class="tx.side === 'buy' ? 'text-green-500' : 'text-red-500'">
          {{ tx.side }}
        </span>
        {{ tx.last_size }}
        @ {{ tx.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["txs"]),
    recentTxs() {
      const { txs = [] } = this;
      const MAX_RECENT_TXS = 15;
      const startAt = Math.max(txs.length - MAX_RECENT_TXS, 1);
      return txs.slice(startAt, txs.length);
    },
  },
};
</script>
