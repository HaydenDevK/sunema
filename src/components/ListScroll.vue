<template>
  <div class="wrapper-poster">
    <router-link v-for="item in Media" :key="item.id" :to="`/detail/${item.id}`">
      <img :src="getImage(item.poster_path)" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    Media: Array
  },
  methods: {
    getImage(poster_path) {
      return poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : require('../assets/images/global/no-image.png');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
