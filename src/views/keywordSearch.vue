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
        v-for="item in keywordList"
        :key="item.keyword_id"
        @click="getInitMovie(item.keyword_id)"
      >
        {{ item.keyword_name }}
      </button>
    </section>

    <!-- 영화 리스트 -->
    <main class="wrapper-poster">
      <router-link
        v-for="item in $store.state.keywordSearch.keywordMovie"
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
      keywordList: [
        {
          keyword_id: 18035,
          keyword_name: 'family'
        },
        {
          keyword_id: 3667,
          keyword_name: 'time'
        }
      ],
      keywordMovie: []
    };
  },
  mounted() {
    this.getInitMovie(18035);
  },
  methods: {
    getInitMovie(keyword_id) {
      console.log(keyword_id);
      this.$store.dispatch('keywordSearch/getKeywordMovie', keyword_id);
    },
    getImage(poster_path) {
      // console.log(poster_path)
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

main {
  padding: 24px 24px 70px 24px;
}

/* mobile */
#wrapper-keyword {
  padding-left: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#wrapper-keyword button {
  min-width: fit-content;
  margin-right: 8px;
  text-align: center;
  padding: 8px 16px;
  border: 0.75px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 21px;
  background-color: #212634;
  color: #ffffff;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.02em;
}

#wrapper-keyword button:last-of-type {
  margin-right: 0;
}

#wrapper-keyword button:focus {
  background-color: white;
  color: #13131b;
}

/* tablet */
@media (min-width: 1024px) {
  main {
    padding: 24px 48px 82px 48px;
  }

  #wrapper-keyword {
    padding-left: 48px;
  }

  #wrapper-movies {
    padding: 24px 48px;
  }

  #wrapper-keyword button {
    font-size: 21px;
    line-height: 26px;
    letter-spacing: 0.25px;
    padding: 16px 32px;
    border-radius: 30px;
  }
}
</style>
