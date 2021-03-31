<template>
  <div class="price-arrow">
    <template v-if="dataIsLoaded">
      <span :class="'price-arrow__' + direction"></span>
      <small :class="'price-arrow--text__' + direction">{{ variance }}</small>
    </template>
    <span v-else>Waiting for data...</span>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { PriceService } from "../services/api";

export default {
  data() {
    return {
      oldPrice: null,
      priceService: new PriceService(),
    };
  },
  computed: {
    ...mapState(["price", "direction"]),
    variance() {
      return (this.price - this.oldPrice).toFixed(2);
    },
    dataIsLoaded() {
      return [this.price, this.oldPrice].every(
        (value) => typeof value === "number"
      );
    },
  },
  methods: { ...mapActions(["setDirection", "setSpeed"]) },
  watch: {
    price(current, previous) {
      const { direction, speed } = this.priceService.getVarianceInfo(
        current,
        previous
      );
      this.setDirection(direction);
      this.setSpeed(speed);
      this.oldPrice = previous;
    },
  },
};
</script>
