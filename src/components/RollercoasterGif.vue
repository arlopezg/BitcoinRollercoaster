<template>
  <div class="rollercoaster" :class="'rollercoaster--' + direction">
    <img
      src="https://i0.wp.com/www.diariobitcoin.com/wp-content/uploads/2015/05/bitcoin-tren.gif?resize=415%2C477"
      alt="Rollercoaster gif"
      class="h-5/6 md:h-full"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["direction", "isSlow"]) },
};
</script>
