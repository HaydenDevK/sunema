<template>
  <div class="wrapper-poster">
    <router-link
      v-for="item in Media"
      :key="item.id"
      :to="`/detail/${item.id}?rink=${$store.state.keywordSearch.mediaType}`"
    >
      <img :src="getImage(item.poster_path)" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    Media: Array
  },
  mounted() {
    console.log(this.$route.name);
    if (this.$route.name === 'TvToday') {
      this.$store.commit('keywordSearch/SET_MEDIA_TYPE', 'tv');
    }
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
