<template>
  <section>
    <header class="w-full">
      <PriceTicker />
    </header>
    <div content class="flex flex-col md:flex-row justify-between items-center">
      <Statistics class="column__secondary order-2 md:order-1 m-3" />
      <main class="column_primary order-1">
        <RollercoasterGif />
      </main>
      <Transactions class="column__secondary order-3 md:order-3" />
    </div>

    <footer class="md:flex justify-between w-full md:px-10 md:fixed bottom-0">
      <Donate class="text-left" />
      <PoweredBy class="py-3 w-full md:w-1/5" />
    </footer>
  </section>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import Donate from "./components/Donate";
import PoweredBy from "./components/PoweredBy";
import PriceTicker from "./components/PriceTicker";
import RollercoasterGif from "./components/RollercoasterGif";
import Statistics from "./components/statistics/Statistics";
import Transactions from "./components/transactions/Transactions";

import { PriceService } from "./services/api";

export default {
  name: "App",
  components: {
    Donate,
    PoweredBy,
    PriceTicker,
    RollercoasterGif,
    Statistics,
    Transactions,
  },
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
