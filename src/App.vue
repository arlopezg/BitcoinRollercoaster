<template>
  <section>
    <header class="w-full">
      <PriceTicker />
    </header>
    <main>
      <RollercoasterGif />
    </main>
    <footer>
      <PoweredBy />
    </footer>
  </section>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import PoweredBy from "./components/PoweredBy";
import PriceTicker from "./components/PriceTicker";
import RollercoasterGif from "./components/RollercoasterGif";

import { PriceService } from "./services/api";

export default {
  name: "App",
  components: { PoweredBy, PriceTicker, RollercoasterGif },
  data() {
    return {
      price: 0,
      priceService: new PriceService(),
    };
  },
  methods: {
    ...mapMutations(["mutate"]),
    ...mapActions(["logTx"]),
  },
  created() {
    this.priceService.getLivePrice(this.logTx);
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
