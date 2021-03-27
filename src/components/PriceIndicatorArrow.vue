<template>
  <div class="price-arrow">
    <span :class="'price-arrow__' + variance"></span>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: Number, required: true },
  },
  data() {
    return {
      variance: "",
    };
  },
  watch: {
    price(newVal, previous) {
      this.variance = newVal > previous ? "up" : "down";
      console.log("Changes:", newVal - previous, this.variance);
    },
  },
};
</script>
