<template>
  <div class="rollercoaster" :class="'rollercoaster--' + direction">
    <img
      src="../assets/bitcoin-rollercoaster.gif"
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
