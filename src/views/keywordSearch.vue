<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </router-link>
    </header>

    <!-- 키워드 리스트 -->
    <ListKeyword View="keywordSearch" />

    <!-- 키워드 없을 경우 -->
    <div
      v-if="$store.state.keywordSearch.mediaKeywords.length === 0"
      class="font-white-70"
      style="font-size: 1.8rem; padding: 2.4rem;"
    >
      해당하는 영화가 없거나,<br/>
      키워드가 없는 영화입니다.
    </div>

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
