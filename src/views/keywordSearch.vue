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
        v-for="item in $store.state.keywordSearch.contentsKeywords"
        :class="{ active: item.id === keywordId }"
        :key="item.id"
        @click="getInitContents(item.id)"
      >
        {{ item.name }}
      </button>
    </section>

    <!-- 영화 리스트 -->
    <main class="wrapper-poster">
      <router-link
        v-for="item in $store.state.keywordSearch.keywordContents"
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
    await this.$store.dispatch('keywordSearch/getContentsKeywords').then(() => {
      this.getInitContents();
    });

    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitContents(keywordId) {
      this.setKeywordId(keywordId);
      this.$store.dispatch('keywordSearch/getKeywordContents');
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
        return require('../assets/images/keyword_search/movie-thumb-default.png');
        // todo 성주님께 디폴트 이미지 제작 요청 후 붙이기 룰루리랄라
      }
    },
    scrollCallback() {
      this.$store.dispatch('keywordSearch/getKeywordContentsMore');
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
