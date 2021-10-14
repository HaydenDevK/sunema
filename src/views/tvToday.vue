<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
      <p class="font-page-title">오늘 방영할 TV 프로그램</p>
    </header>

    <!-- 작품 리스트 -->
    <main class="wrapper-poster">
      <router-link
        v-for="item in $store.state.tvToday.tvToday"
        :key="item.id"
        to=""
      >
        <img :src="getImage(item.poster_path)" alt="" />
      </router-link>
    </main>
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
        return require('../assets/images/global/no-image.png');
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
