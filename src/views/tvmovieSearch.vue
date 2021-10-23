<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <a class="btn-back" @click="$router.go(-1)">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </a>
    </header>

    <!-- 버튼 -->
    <section class="wrapper-btn-type">
      <button class="btn-type">
        <p :class="{active: tab === 'movie'}" @click="tabChange('movie')">
          영화
        </p>
      </button>
      <button class="btn-type">
        <p :class="{active: tab === 'tv'}" @click="tabChange('tv')">
          티비 프로그램
        </p>
      </button>
    </section>

    <div v-if="moieList.length > 0" class="wrapper-poster">
      <a v-for="item in moieList" :key="item.id">
        <img :src="getImage(item.poster_path)" alt="" />
      </a>
    </div>
    <div v-else class="no-media-keywords">
      해당하는 작품이 없거나, 해당 키워드에 맞는 작품이 없습니다.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: this.$route.params.keyword,
      tab: 'movie'
    };
  },
  computed: {
    moieList() {
      return this.$store.state.tvmoviesearch.movieList;
    }
  },
  mounted() {
    this.searchMovie();
  },
  methods: {
    searchMovie() {
      this.$store.dispatch('tvmoviesearch/searchMovie', {
        keyword: this.keyword,
        tab: this.tab
      });
    },
    getImage(poster_path) {
      return poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : require('../assets/images/global/no-image.png');
    },
    tabChange(tab) {
      this.tab = tab;
      this.searchMovie();
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

/* mobile */
.list-scroll {
  padding-top: 2rem;
}

.no-media-keywords {
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  opacity: 0.5;
  text-align: center;
  line-height: calc(100vh - 13.9rem);
}

.no-keyword-media {
  color: #ffffff;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  opacity: 0.5;
  text-align: center;
  line-height: calc(100vh - 23.6rem);
}

/* tablet */
@media screen and (min-width: 1024px) {
  .list-scroll {
    padding-top: 3.2rem;
  }

  .no-media-keywords {
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    opacity: 0.5;
    text-align: center;
    line-height: calc(100vh - 24.7rem);
  }

  .no-keyword-media {
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    opacity: 0.5;
    text-align: center;
    line-height: calc(100vh - 26.7rem);
  }
}
</style>
