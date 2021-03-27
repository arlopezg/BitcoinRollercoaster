<template>
  <div>
    {{ price }}
    <PriceArrowIndicator :price="price" />
    <RollercoasterGif />
    <PoweredBy />
  </div>
</template>

<script>
import RollercoasterGif from "./components/RollercoasterGif";
import PoweredBy from "./components/PoweredBy";
import PriceArrowIndicator from "./components/PriceIndicatorArrow";

import { PriceService } from "./services/api";

export default {
  name: "App",
  components: { PoweredBy, PriceArrowIndicator, RollercoasterGif },
  data() {
    return {
      price: 0,
      priceService: new PriceService(),
    };
  },
  created() {
    this.priceService.getLivePrice((price) => (this.price = price));
  },
  beforeUnmount() {
    this.priceService.stopListening();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
