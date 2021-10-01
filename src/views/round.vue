<template>
  <div id="wrap">
    <header id="header">
      <router-link to="">
        <img src="../assets/images/round/icon_back.png" alt="" />
      </router-link>
      <p>종이의 집(2017)</p>
    </header>
    <!-- header -->

    <section id="episode">
      <ul class="ep-list">
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 10화</div>
              <p>2021</p>
              <button @click="printlog">클릭</button>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 9화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 8화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 7화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 6화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 5화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 4화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 3화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 2화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="">
            <img src="../assets/images/round/list_image00.png" alt="" />
            <div class="ep-list-text">
              <div>시즌3 1화</div>
              <p>2021</p>
            </div></router-link
          >
        </li>
      </ul>
    </section>

    <!-- episode-list -->

    <div id="bottom-bar">
      <router-link to=""
        ><img src="../assets/images/round/icon-home.png" alt="" />
        <p>홈</p>
      </router-link>
      <router-link to=""
        ><img src="../assets/images/round/icon-nowplaying.png" alt="" />
        <p>상영중</p>
      </router-link>
      <router-link to=""
        ><img src="../assets/images/round/icon-upcoming.png" alt="" />
        <p>개봉예정</p>
      </router-link>
      <router-link to=""
        ><img src="../assets/images/round/icon-search.png" alt="" />
        <p>검색</p>
      </router-link>
      <router-link to=""
        ><img src="../assets/images/round/icon-popular.png" alt="" />
        <p>인기콘텐츠</p>
      </router-link>
    </div>
    <!-- bottom-bar -->
  </div>
</template>

<script>
export default {
  name: 'Round',
  mounted() {
    this.getInitMovie();
    console.log(this.$route.params.idx);
    
  },
  methods: {
    getInitMovie() {
      //api사용하는 코드
      this.$store.dispatch('round/getMovieList', this.$route.params.idx);
    },
    printlog() {
      console.log(this.$store.state.round.movieRound);
    }
  }
};
</script>

<style scoped>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}

#wrap {
  width: 100%;
  min-height: 100vh;
  background: #181727;
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
#episode ul li a {
  display: flex;
}
#episode ul li a img {
  width: 20%;
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
}
#episode ul li div.ep-list-text p {
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
}

/* bottom-bar  */

#bottom-bar {
  display: grid;
  width: 100%;
  height: 54px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background: #13131b;
  position: fixed;
  bottom: 0;
  justify-items: center;
}
#bottom-bar a {
  padding: 8px 0;
  justify-items: center;
  text-align: center;
  width: 100%;
}
#bottom-bar p {
  font-size: 11px;
  color: #fff;
  line-height: 15px;
}
#bottom-bar img {
  width: 24px;
}
</style>
