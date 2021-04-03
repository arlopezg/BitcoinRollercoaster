<template>
  <ul class="flex flex-col align-start">
    <li>Buys: {{ buysAndSells.buys }}</li>
    <li>Sells: {{ buysAndSells.sells }}</li>
    <li class="mb-2">Buys per sell: {{ buysPerSell }}</li>
    <li v-for="(range, rangeKey) in formattedPriceRange" :key="rangeKey">
      <strong class="capitalize">{{ rangeKey }}:</strong>
      {{ range }}
      <small
        v-show="closerToCurrent === rangeKey"
        class="text-opacity-50 font-bold"
      >CLOSER TO CURRENT</small>
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
      const { high, low, average } = this.priceRange;
      return { high, low, average };
    },
    closerToCurrent() {
      const { price, priceRange } = this;
      const { averageNumeric: average } = priceRange;

      return price > average ? "high" : "low";
    },
  },
};
</script>
