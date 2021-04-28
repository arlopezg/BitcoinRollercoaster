<template>
  <div class="price--ticker">
    <strong class="block">Current price:</strong>
    <span class="price" v-show="price">{{ formattedPrice }}</span>
    <PriceArrowIndicator :price="price" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import PriceArrowIndicator from "./PriceIndicatorArrow";

export default {
  components: { PriceArrowIndicator },
  computed: {
    ...mapState(["price"]),
    ...mapGetters(["formattedPrice"]),
  },
  watch: {
    formattedPrice(currentPrice = 0) {
      const { head } = document;
      const title = head.querySelector("title");

      title.innerText = `${currentPrice} - Bitcoin Rollercoaster`;
    },
  },
};
</script>

<style scoped>
.price--ticker {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 9;
}
</style>
