<template>
  <figure class="flex items-center p-3">
    <a
      :href="'bitcoin:' + publicAddress"
      target="_blank"
      rel="noopener noreferrer"
    >
      <QRCode :value="publicAddress" class="w-10 h-10" />
    </a>
    <figcaption>
      <span class="text-xs">Consider making a donation 🥳</span>
      <br />
      <a :href="'bitcoin:' + publicAddress" class="text-sm text-blue-500">{{
        publicAddress
      }}</a>
    </figcaption>
  </figure>
</template>

<script>
import { mapGetters } from "vuex";
import QRCode from "./QRCode";

export default {
  components: { QRCode },
  data() {
    return {
      publicAddress: process.env.VUE_APP_BTC_DONATION_ADDRESS || "unset",
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
