<template>
  <figure :title="shout">
    <div class="rollercoaster" :class="'rollercoaster--' + direction">
      <video autoplay loop autobuffer muted playsinline class="h-5/6 md:h-full">
        <source src="../assets/bitcoin-rollercoaster.webm" type="video/webm" />
        {{ shout }}
      </video>
    </div>
    <figcaption class="mt-5">
      Viewing trend from last
      <select v-model="txTrendLimit" class="bg-gray-200 rounded px-1">
        <option v-for="value in [15, 50, 100]" :key="value" :value="value">
          {{ value }}
        </option>
        <option :value="undefined">All</option>
      </select>
      orders
    </figcaption>
  </figure>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { direction: "up", txTrendLimit: 15 };
  },
  computed: {
    ...mapGetters(["buysAndSells", "getPriceTrendByTxs"]),
    priceTrend() {
      return this.getPriceTrendByTxs(this.txTrendLimit);
    },
    shout() {
      const { direction } = this;

      const onUp = "To the moon!";
      const onDown = "Buy the dip!";

      const shout = direction === "up" ? onUp : onDown;
      return shout.toUpperCase();
    },
  },
  methods: {
    updateDirection() {
      this.direction = this.priceTrend;
    },
  },
  mounted() {
    const videoEl = this.$el.querySelector("video");
    videoEl.play()
    console.log('videoEl', videoEl)
    setInterval(this.updateDirection, 2500);
  },
};
</script>
