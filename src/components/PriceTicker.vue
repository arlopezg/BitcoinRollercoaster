<template>
  <div>
    <span class="price">{{ price }}</span>
    <PriceArrowIndicator :price="price" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import PriceArrowIndicator from "./PriceIndicatorArrow";

export default {
  components: { PriceArrowIndicator },
  computed: { ...mapState(["price"]) },
};
</script>
