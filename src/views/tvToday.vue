<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="/" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
      <p class="font-page-title">오늘 방영할 TV 프로그램</p>
    </header>

    <!-- 작품 리스트 -->
    <ListScroll :Media="$store.state.tvToday.tvToday" />
  </div>
</template>

<script>
import ListScroll from '../components/ListScroll.vue';

export default {
  name: 'TvToday',
  components: { ListScroll },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.getInitMedia();
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMedia() {
      this.$store.dispatch('tvToday/getTvToday');

    },
    scrollCallback() {
      this.$store.dispatch('tvToday/getTvTodayMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
