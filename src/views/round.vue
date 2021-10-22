<template>
  <div id="wrap">
    <header id="header">
      <router-link to="">
        <img src="../assets/images/round/icon_back.png" alt="" />
      </router-link>
      <p>{{ $store.state.round.tv_name.name }}</p>
    </header>
    <!-- header -->

    <section id="episode">
      <ul class="ep-list">
        <li v-for="item in $store.state.round.movieRound" :key="item.id">
          <router-link to="">
            <img :src="getImage(item.still_path)" alt="" />
            <div class="ep-list-text">
              <div>
                시즌{{ item.season_number }} {{ item.episode_number }}화
              </div>
              <p>{{ item.air_date }}</p>
            </div></router-link
          >
        </li>
      </ul>
    </section>
    <!-- episode-list -->
  </div>
</template>

<script>
export default {
  name: 'Round',
  mounted() {
    this.getInitMovie();
    this.getName();
    // console.log(this.$route.params.idx);
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
  },
  methods: {
    getInitMovie() {
      //api사용하는 코드
      this.$store.dispatch('round/getMovieList', this.$route.params.tv_id);
    },
    getImage(still_path) {
      // console.log(still_path)
      return `https://image.tmdb.org/t/p/w300${still_path}`;
    },
    getName() {
      this.$store.dispatch('round/getTvName');
    },
    scrollCallback() {
      console.log('callback');
    }
  }
};
</script>

<style scoped>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  background: #181727;
}

#wrap {
  width: 100%;
  min-height: 100vh;
}

/* header */

#header {
  width: 100%;
  height: 80px;
  display: flex;
  background: #181727;
  position: fixed;
  top: 0;
}
#header a {
  display: block;
  width: 64px;
  padding: 42px 0 0 31px;
}
#header img {
  height: 17px;
}

#header p {
  color: #fff;
  font-size: 18px;
  margin-top: 38px;
  font-weight: bold;
}

/* episode-list */

#episode {
  width: 100%;
}
#episode ul {
  margin-left: 24px;
  margin-right: 24px;
}
#episode ul li:nth-child(1) {
  margin-top: 80px;
}
#episode ul li + li {
  margin-top: 16px;
}
#episode ul li:nth-last-child(1) {
  margin-bottom: 53px;
}
#episode ul li a {
  display: flex;
}
#episode ul li a img {
  width: 35%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
#episode ul li div.ep-list-text {
  flex: 2;
  background: #212634;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 14px 0 18px 22px;
  align-items: center;
}
#episode ul li div.ep-list-text div {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background: #212634;
}
#episode ul li div.ep-list-text p {
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  background: #212634;
}
</style>
