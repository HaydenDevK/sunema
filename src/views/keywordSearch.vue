<template>
  <div class="bg-navy-100 min-height-100vh">
    <header class="header">
      <router-link to="" class="btn-back">
        <img src="../assets/images/keyword_search/icon-back.png" alt="" />
      </router-link>
    </header>

    <!-- 키워드 버튼 -->
    <section id="wrapper-keyword">
      <button
        v-for="item in $store.state.keywordSearch.mediaKeywords"
        :class="{ active: item.id === keywordId }"
        :key="item.id"
        @click="getInitMedia(item.id)"
      >
        {{ item.name }}
      </button>
    </section>

    <!-- 작품 리스트 -->
    <main class="wrapper-poster">
      <router-link
        v-for="item in $store.state.keywordSearch.keywordMedia"
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
  name: 'KeywordSearch',
  data() {
    return {
      keywordId: 0
    };
  },
  computed: {
    keywords() {
      // return this.$store.state.detail.movieKeywords;
      return this.$store.state.keywordSearch.movieKeywords;
      // todo data에서 가져올지 computed에서 가져올지 판단
    }
  },
  async mounted() {
    // todo async await 필요한 거 맞는지
    await this.$store.dispatch('keywordSearch/getMediaKeywords').then(() => {
      this.getInitMedia();
    });

    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMedia(keywordId) {
      this.setKeywordId(keywordId);
      this.$store.dispatch('keywordSearch/getKeywordMedia');
      // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    setKeywordId(keywordId) {
      if (keywordId) {
        this.keywordId = Number(keywordId);
      } else {
        this.keywordId = Number(this.$route.params.keywordId);
      }

      this.$store.commit('keywordSearch/SET_KEYWORD_ID', this.keywordId);
    },
    getImage(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
      } else {
        return require('../assets/images/global/no-image.png');
        // todo 메인 프로필, 참여 작품, 프로필 사진 등에서 활용할 img-default.png로 수정
      }
    },
    scrollCallback() {
      this.$store.dispatch('keywordSearch/getKeywordMediaMore');
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

main {
  padding: 2.4rem 2.4rem 7rem 2.4rem;
}

/* mobile */
#wrapper-keyword {
  padding-left: 2.4rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
}

#wrapper-keyword button {
  min-width: fit-content;
  margin-right: 0.8rem;
  text-align: center;
  padding: 0.8rem 1.6rem;
  border: 0.075rem solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 2.1rem;
  background-color: #212634;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: -0.02em;
}

#wrapper-keyword button:last-of-type {
  margin-right: 2.4rem;
}

#wrapper-keyword button.active {
  background-color: white;
  color: #13131b;
}

/* tablet */
@media (min-width: 1024px) {
  main {
    padding: 2.4rem 4.8rem 8.2rem 4.8rem;
  }

  #wrapper-keyword {
    padding-left: 4.8rem;
  }

  #wrapper-keyword button {
    font-size: 2.1rem;
    line-height: 2.6rem;
    letter-spacing: 0.025rem;
    padding: 1.6rem 3.2rem;
    border-radius: 3rem;
  }
}
</style>
