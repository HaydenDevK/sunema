<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <a class="btn-back" @click="$router.go(-1)">
        <img src="../assets/images/global/icon-back.png" alt="" />
      </a>
    </header>

    <!-- 버튼 -->
    <TabMediaType />

    <!-- 키워드 리스트 -->
    <ListKeyword View="keywordSearch" class="list-keyword" />

    <!-- 키워드 없을 경우 -->
    <div
      v-if="
        $store.state.keywordSearch.mediaKeywords.length === 0 &&
          $store.state.keywordSearch.keywordMedia.length === 0
      "
      class="no-media-keywords"
    >
      해당하는 작품이 없거나, 해당 키워드에 맞는 작품이 없습니다.
    </div>

    <!-- 작품 리스트 -->
    <ListScroll
      v-if="
        $store.state.keywordSearch.mediaKeywords.length > 0 &&
          $store.state.keywordSearch.keywordMedia.length > 0
      "
      :Media="$store.state.keywordSearch.keywordMedia"
      class="list-scroll"
    />

    <div
      v-if="
        $store.state.keywordSearch.mediaKeywords.length > 0 &&
          $store.state.keywordSearch.keywordMedia.length === 0
      "
      class="no-keyword-media"
    >
      해당 키워드에 맞는
      {{ $store.state.keywordSearch.mediaType === 'movie' ? '영화' : '티비 프로그램' }}
      작품이 없습니다.
    </div>
  </div>
</template>

<script>
import ListScroll from '../components/ListScroll.vue';
import ListKeyword from '../components/ListKeyword.vue';
import TabMediaType from '../components/TabMediaType.vue';

export default {
  name: 'KeywordSearch',
  components: {ListScroll, ListKeyword, TabMediaType},
  async mounted() {
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    // this.$store.commit('keywordSearch/SET_MEDIA_TYPE', 'movie');
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

/* mobile */
.list-keyword {
  padding-left: 2.4rem;
}

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
  .list-keyword {
    padding-left: 4.8rem;
  }

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
