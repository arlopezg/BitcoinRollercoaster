<template>
  <div>
    <span class="price" v-show="price">{{ formattedPrice }}</span>
    <PriceArrowIndicator :price="price" />
    <BuysAndSells />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import PriceArrowIndicator from "./PriceIndicatorArrow";
import BuysAndSells from "./BuysAndSells";

export default {
  components: { BuysAndSells, PriceArrowIndicator },
  computed: {
    ...mapState(["price"]),
    ...mapGetters(["formattedPrice"]),
  },
};
</script>
