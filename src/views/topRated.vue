<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
      <p class="font-page-title">높은 평점</p>
    </header>

    <!-- 버튼 -->
    <section class="wrapper-btn-type">
      <button class="btn-type" @click="getInitMedia('movie')">
        <p :class="{ active: $store.state.topRated.mediaType === 'movie' }">
          영화
        </p>
      </button>
      <button class="btn-type" @click="getInitMedia('tv')">
        <p :class="{ active: $store.state.topRated.mediaType === 'tv' }">
          티비 프로그램
        </p>
      </button>
    </section>

    <!-- 작품 리스트 -->
    <ListScroll :Media="$store.state.topRated.topRated" />
  </div>
</template>

<script>
import ListScroll from '../components/ListScroll.vue';

export default {
  name: 'TopRated',
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
    async getInitMedia(mediaType) {
      if (mediaType) {
        await this.$store.commit('topRated/SET_MEDIA_TYPE', mediaType);
      }
      this.$store.dispatch('topRated/getTopRated');
      // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    scrollCallback() {
      this.$store.dispatch('topRated/getTopRatedMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
