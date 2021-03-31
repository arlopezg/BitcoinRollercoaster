<template>
  <div>
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
};
</script>
