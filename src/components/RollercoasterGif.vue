<template>
  <figure :title="direction === 'up' ? 'Wheeee!' : 'Whooo!'">
    <div class="rollercoaster" :class="'rollercoaster--' + direction">
      <img
        src="../assets/bitcoin-rollercoaster.gif"
        alt="Rollercoaster gif"
        class="h-5/6 md:h-full"
      />
    </div>
    <figcaption class="mt-5">
      Viewing trend from last
      <select v-model="txTrendLimit" class="bg-gray-200 rounded px-1">
        <option v-for="value in [15, 50, 100]" :key="value" :value="value">
          {{ value }}
        </option>
        <option :value="undefined">All</option>
      </select>
      orders
    </figcaption>
  </figure>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { direction: "up", txTrendLimit: 15 };
  },
  computed: {
    ...mapGetters(["buysAndSells", "getPriceTrendByTxs"]),
    priceTrend() {
      return this.getPriceTrendByTxs(this.txTrendLimit);
    },
  },
  methods: {
    updateDirection() {
      this.direction = this.priceTrend;
    },
  },
  mounted() {
    setInterval(this.updateDirection, 2500);
  },
};
</script>
