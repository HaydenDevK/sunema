<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
    </header>

    <!-- 키워드 리스트 -->
    <ListKeyword type="keywordSearch" />

    <!-- 작품 리스트 -->
    <ListScroll :Media="$store.state.keywordSearch.keywordMedia" />
  </div>
</template>

<script>
import ListScroll from '../components/ListScroll.vue';
import ListKeyword from '../components/ListKeyword.vue';

export default {
  name: 'KeywordSearch',
  components: { ListScroll, ListKeyword },
  async mounted() {
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    scrollCallback() {
      this.$store.dispatch('keywordSearch/getKeywordMediaMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';
</style>
