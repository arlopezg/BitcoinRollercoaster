<template>
  <figure class="flex items-center p-3">
    <img src="https://i.imgur.com/PUlUEFh.png" class="w-10 h-10" />
    <figcaption>
      <span class="text-xs">Consider making a donation 🥳</span>
      <br />
      <span class="text-sm">{{ publicAddress }}</span>
    </figcaption>
  </figure>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
      return {
        publicAddress: process.env.VUE_APP_BTC_DONATION_ADDRESS,
      };
    },
  computed: {
    ...mapGetters(["getPriceTrendByTxs"]),
    action() {
      const { getPriceTrendByTxs } = this;
      return getPriceTrendByTxs(15) === "up" ? "HODL" : "buy the dip";
    },
  },
};
</script>
