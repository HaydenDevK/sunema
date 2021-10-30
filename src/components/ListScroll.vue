<template>
  <div class="wrapper-poster">
    <router-link
      v-for="item in Media"
      :key="item.id"
      :to="`/detail/${item.id}?link=${$store.state.keywordSearch.mediaType}`"
    >
      <!-- a태그로 바꾸던지, 감싸던지 router-link에 직접 v-for 돌리지 말 것 -->
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
    } else {
      this.$store.commit('keywordSearch/SET_MEDIA_TYPE', 'movie');
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
