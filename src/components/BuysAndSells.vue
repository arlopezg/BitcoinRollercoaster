<template>
  <ul class="flex flex-col md:flex-row md:w-1/4 justify-between mx-auto">
    <li>Buys: {{ buysAndSells.buys }}</li>
    <li>Sells: {{ buysAndSells.sells }}</li>
    <li>Buys per sell: {{ buysPerSell }}</li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["buysAndSells"]),
    buysPerSell() {
      const { buys, sells } = this.buysAndSells;
      return (buys / sells).toFixed(2);
    },
  },
};
</script>
