<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/keyword_search/icon-back.png" alt="" />
      </router-link>
      <p class="font-page-title">오늘 방영할 TV 프로그램</p>
    </header>

    <!-- 컨텐츠 리스트 -->
    <main class="wrapper-poster">
      <router-link
        v-for="item in $store.state.tvToday.tvToday"
        :key="item.id"
        to=""
      >
        <img :src="getImage(item.poster_path)" alt="" />
      </router-link>
    </main>

    <!-- 독 바 -->
    <footer class="doc-bar">
      <router-link to="" class="doc-bar-item">
        <img src="../assets/images/keyword_search/icon-home.png" alt="" />
        <p>홈</p>
      </router-link>
      <router-link to="" class="doc-bar-item">
        <img src="../assets/images/keyword_search/icon-nowplaying.png" alt="" />
        <p>상영중</p>
      </router-link>
      <router-link to="" class="doc-bar-item">
        <img src="../assets/images/keyword_search/icon-upcoming.png" alt="" />
        <p>개봉예정</p>
      </router-link>
      <router-link to="" class="doc-bar-item">
        <img src="../assets/images/keyword_search/icon-search.png" alt="" />
        <p>검색</p>
      </router-link>
      <router-link to="" class="doc-bar-item">
        <img src="../assets/images/keyword_search/icon-popular.png" alt="" />
        <p>인기콘텐츠</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TvToday',
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // todo async await 필요한 거 맞는지
    this.getInitMedia();
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMedia() {
      this.$store.dispatch('tvToday/getTvToday');
      // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    getImage(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
      } else {
        return require('../assets/images/keyword_search/movie-thumb-default.png');
        // todo 메인 프로필, 참여 작품, 프로필 사진 등에서 활용할 img-default.png로 수정
      }
    },
    scrollCallback() {
      this.$store.dispatch('tvToday/getTvTodayMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

main {
  padding: 0 2.4rem 7rem 2.4rem;
}

/* tablet */
@media (min-width: 1024px) {
  main {
    padding: 2.4rem 4.8rem 8.2rem 4.8rem;
  }
}
</style>
