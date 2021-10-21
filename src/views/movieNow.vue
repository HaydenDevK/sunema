<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
      <p class="font-page-title">현재 상영중</p>
    </header>

    <!-- 작품 리스트 -->
    <ListScroll :Media="$store.state.movieNow.movieNow" />
  </div>
</template>

<script>
import ListScroll from '../components/ListScroll.vue';

export default {
  name: 'MovieNow',
  components: { ListScroll },
  mounted() {
    this.getInitMedia();
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMedia() {
      this.$store.dispatch('movieNow/getMovieNow');
      // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    scrollCallback() {
      this.$store.dispatch('movieNow/getMovieNowMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
