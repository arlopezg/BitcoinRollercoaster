<template>
  <img :src="url" />
</template>

<script>
export default {
  props: {
    value: { type: String, required: true },
    size: { type: Number, default: 100 },
  },
  data() {
    return { url: null };
  },
  methods: {
    getQrURL(value = "") {
      const baseURL = "https://chart.googleapis.com/chart?";
      const size = [this.size, this.size].join("x");
      const params = `chs=${size}&cht=qr&chl=${value}&choe=UTF-8`;
      return baseURL + params;
    },
  },
  mounted() {
    this.url = this.getQrURL(this.value);
  },
};
</script>
