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
        :class="{ active: item.isActive }"
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
      keywordId: 0,
      keywordMovie: []
    };
  },
  computed: {
    movieType() {
      // return this.$store.state.detail.movieType;
      return 'movie';
    },
    keywordList() {
      // return this.$store.state.detail.movieKeywords;
      return [
        {
          keyword_id: 18035,
          keyword_name: 'family',
          isActive: false
        },
        {
          keyword_id: 3667,
          keyword_name: 'time',
          isActive: false
        }
        // todo mounted 시점에 첫번째 keyword_id의 isActive가 자동으로 true가 되는 이유 이해하기
        // 받아오는 keywordList 배열 안 객체에는 isActive 프로퍼티가 없을텐데, 어떻게 넣을지?
      ];
    }
  },
  mounted() {
    this.keywordId = Number(this.$route.params.keywordId);
    this.getInitMovie();

    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMovie(keywordId) {
      this.setkeywordId(keywordId); // 함수 호출 시에 넘겨받은 keywordId가 있으면 그 값을 로컬에 저장하고 state에도 올리고
      this.handleActive(); // 변경된 keywordId 가지고 일치하는 keywordId 찾아서 클래스 연동하고
      this.$store.dispatch('keywordSearch/getKeywordMovie'); // 영화 불러다가 스토어에 붙임 // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    setkeywordId(keywordId) {
      if (keywordId) {
        this.keywordId = Number(keywordId);
      }
      this.$store.commit('keywordSearch/SET_KEYWORD_ID', this.keywordId);
    },
    handleActive() {
      this.keywordList.map((obj) => {
        if (obj.keyword_id === this.keywordId) {
          obj.isActive = true;
        } else {
          obj.isActive = false;
        }
      });
    },
    getImage(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
      } else {
        return 'test'; // 성주님께 디폴트 이미지 제작 요청 후 붙이기 룰루리랄라
      }
    },
    scrollCallback() {
      this.$store.dispatch('keywordSearch/getKeywordMovieMore');
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

#wrapper-keyword button.active {
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
