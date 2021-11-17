<template>
  <div class="wrapper-poster">
    <div
      v-for="item in Media"
      :key="item.id"
    >
      <router-link
        :to="`/detail/${item.id}?link=${$store.state.keywordSearch.mediaType}`"
      >
        <img :src="getImage(item.poster_path)" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Media: Array
  },
  mounted() {
    this.$route.name === 'TvToday'
    ? this.$store.commit('keywordSearch/SET_MEDIA_TYPE', 'tv')
    :this.$store.commit('keywordSearch/SET_MEDIA_TYPE', 'movie');
  },
  methods: {
    getImage(poster_path) {
      return poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : require('../assets/images/global/no-image.png');
    }
  }
}
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
