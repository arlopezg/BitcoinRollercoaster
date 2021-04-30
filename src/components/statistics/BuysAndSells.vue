<template>
  <ul class="flex flex-col align-start">
    <li>There have been {{ buysAndSells.buys }} buy orders and {{ buysAndSells.sells }} sell orders.</li>
    <li class="my-3">Current buy:sell ratio is {{ buysPerSell }}.</li>
    <li v-for="(range, rangeKey) in formattedPriceRange" :key="rangeKey">
      <strong class="capitalize">{{ rangeKey }}:</strong>
      {{ range }}
      <small
        v-show="closerToCurrent === rangeKey"
        class="text-opacity-50 font-bold bg-yellow-400 px-1 rounded"
        >CLOSER TO CURRENT</small
      >
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["price"]),
    ...mapGetters(["buysAndSells", "priceRange"]),
    buysPerSell() {
      const { buys, sells } = this.buysAndSells;
      return (buys / sells).toFixed(2);
    },
    formattedPriceRange() {
      const { high, low, spread } = this.priceRange;
      return { high, low, spread };
    },
    closerToCurrent() {
      const { price, priceRange } = this;
      const { averageNumeric: average } = priceRange;

      return price > average ? "high" : "low";
    },
  },
};
</script>
