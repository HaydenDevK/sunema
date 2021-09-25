<template>
  <div>detail</div>
</template>

<script>
export default {
  data() {
    return {
      movieId: null,
    };
  },
  mounted() {
    console.log('mouted');
    console.log(this.$route.params.idx);

    this.movieId = this.$route.params.idx;
  },
  methods: {
    initMovie() {},
  },
};
</script>

<style scoped></style>
