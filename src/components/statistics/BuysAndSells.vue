<template>
  <ul class="flex flex-col md:w-1/2 align-start">
    <li>Buys: {{ buysAndSells.buys }}</li>
    <li>Sells: {{ buysAndSells.sells }}</li>
    <li class="mb-2">Buys per sell: {{ buysPerSell }}</li>
    <li>High: {{ priceRange.high }}</li>
    <li>Low: {{ priceRange.low }}</li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["buysAndSells", "priceRange"]),
    buysPerSell() {
      const { buys, sells } = this.buysAndSells;
      return (buys / sells).toFixed(2);
    },
  },
};
</script>
