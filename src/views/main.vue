<template>
  <div id="wrap">
    <header>
      <h1 class="logo">
        <router-link to="">SUNEMA</router-link>
      </h1>
      <nav>
        <router-link to="">영화</router-link>
        <router-link to="">TV프로그램</router-link>
        <router-link to="">카테고리</router-link>
      </nav>
    </header>
    <div id="container">
      <swiper class="visual" :options="swiperOption">
        <swiper-slide v-for="item in $store.state.main.trendingContents" :key="item.id">
          <img :src="getImage(item.poster_path)" alt="" />
          <div class="banner-text">
            <strong>{{ item.title }}</strong>
            <p>{{ item.original_title }}</p>
            <router-link :to="`/detail/${item.id}`" class="btn-more">자세히 보기</router-link>
          </div>
        </swiper-slide>
      </swiper>
      <div class="contents">
        <SlidePoster
          class="popular"
          title="인기 콘텐츠"
          type="pop"
          streaming="T"
          rank="T"
          rink="popular"
          :movie="$store.state.main.popularMovie"
        />
        <SlidePoster
          class="now-playing"
          title="현재 상영중"
          type="now"
          streaming="F"
          rank="F"
          rink="nowmovie"
          :movie="$store.state.main.nowPlayingMovie"
        />
        <SlideVideo
          class="upcoming"
          title="개봉 예정"
          type="upcoming"
          :movie="$store.state.main.upcomingMovie"
        />
        <SlideBigPoster
          class="trending"
          title="지금 뜨는 콘텐츠"
          type="trending"
          tab1="영화"
          tab2="TV"
          rink="trending"
          :movie="$store.state.main.trendingContents"
        />
        <SlidePoster
        class="today-tv"
        title="오늘 방영할 TV프로그램"
        type="today"
        streaming="F"
        rank="F"
        rink="tvtoday"
        :movie="$store.state.main.todayTv"
        />
        <PopularActor
        class="popular-actor"
        title="인기 배우"
        type="actor"
        :actor="$store.state.actor.popularActor"
        />
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import SlidePoster from '@/components/SlidePoster.vue';
import SlideVideo from '@/components/SlideVideo.vue';
import SlideBigPoster from '@/components/SlideBigPoster.vue';
import PopularActor from'@/components/PopularActor.vue';

export default {
  name: 'Main',
  components: {
    SlidePoster,
    SlideVideo,
    SlideBigPoster,
    PopularActor,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: { 
        slidesPerView: 1,
        autoplay: {
          "delay": 5000,
          "disableOnInteraction": false
        }
      }
    };
  },
  mounted() {
    // this.$store.dispatch('main/testCall');
    this.getMovieInfo();
  },
  methods: {
    getMovieInfo() {
      console.log('getMovieInfo 호출');
      this.$store.dispatch('main/getPopularMovie');
      this.$store.dispatch('main/getNowPlayingMovie');
      this.$store.dispatch('main/getUpcomingMovie');
      this.$store.dispatch('main/getTrendingContents');
      this.$store.dispatch('main/getTodayTv');
    },
    getImage(poster_path) {
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    }
  },
};
</script>

<style scoped>
@import url('../assets/css/reset.css');
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}

#wrap {
  width: 100%;
  min-width: 320px;
  background: #181727;
}

/* 로고,네비 */
header {
  width: 100%;
  min-width: 320px;
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
}
header .logo {
  padding: 16px 0 0 31px;
}
#wrap header .logo a {
  font-size: 4.35vw;
  letter-spacing: -0.02em;
  color: #43ff8e;
  line-height: 6.28vw;
  font-weight: 900;
}
#wrap header nav {
  padding-top: 15.5px;
  width: calc(100% - 84px);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
#wrap header nav a {
  font-size: 4.35vw;
  line-height: 5.56vw;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/****************** 본문 ******************/
#continaer {
  width: 100%;
}

/* 비주얼 */
#container .visual {
  width: 100%;
  height: 133.46vw;
  position: relative;
  overflow: hidden;
}
#container .visual::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index:10;
  width: 100%;
  height: 127px;
  background: linear-gradient(180deg, #181727 0%, rgba(25, 25, 64, 0) 100%);
}
#container .visual .swiper-slide::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -1px;
  z-index:10;
  width: 100%;
  height: 301.5px;
  background: linear-gradient(
    359.75deg,
    rgba(24, 23, 39, 0.98) 42.71%,
    rgba(25, 25, 64, 0) 99.82%
  );
}
#container .visual .swiper-slide {
  width: 100%;
  height: 100%;
  font-size: 0;
}
#container .visual .swiper-slide a {
  display: block;
  height: 100%;
}
#container .visual .swiper-slide img {
  width: 100%;
}
#container .visual .swiper-slide .banner-text {
  width: 75%;
  position: absolute;
  left: 50%;
  bottom: 56.5px;
  z-index: 20;
  transform: translateX(-50%);
  word-break:keep-all;
}
#container .visual .swiper-slide .banner-text strong {
  display: block;
  color: #fff;
  font-size: 9.66vw;
  line-height: 11.59vw;
  letter-spacing: 0.25px;
  text-align: center;
}
#container .visual .swiper-slide .banner-text p {
  color: #fff;
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  text-align: center;
}
#container .visual .swiper-slide .banner-text .btn-more {
  display: block;
  width: 36.23vw;
  margin: 18px auto 0;
  padding: 1.93vw 3.86vw;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2.42vw;
  font-size: 4.35vw;
  line-height: 5.56vw;
  color: #fff;
  letter-spacing: -0.02em;
}
#container .visual .swiper-slide .banner-text .btn-more::before {
  content: '';
  display: block;
  float: left;
  width: 3.38vw;
  height: 5.56vw;
  background: url('../assets/images/main/icon_plus.png') no-repeat center center;
  background-size: 3.38vw;
  margin-right: 2.42vw;
}
#container .visual .swiper-slide .banner-text .btn-more::after {
  content: '';
  display: block;
  clear: both;
}

/* 콘텐츠 */
#container .contents {
  width: 100%;
  padding: 0 24px 61px;
}
#container .contents section {
  position: relative;
  width: 100%;
  margin-top: 25.5px;
}
#container .contents section:first-child {
  margin-top: 0;
}
#container .contents section h2 {
  display: block;
  font-size: 5.07vw;
  font-weight: 700;
  line-height: 6.28vw;
  color: #fff;
}
#container .contents section .title-box {
  display: flex;
  justify-content: left;
  align-items: center;
}
#container .contents section .title-box .streaming,
#container .contents section .title-box .tab-btn {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 11px;
}

#container .contents section .title-box .streaming p {
  padding: 5.5px 0;
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  color: #fff;
}
#container .contents section .title-box .streaming input[type='checkbox'] {
  display: none;
}
#container .contents section .title-box .streaming label {
  position: relative;
  display: block;
  width: 8.95vw;
  height: 3.38vw;
  border-radius: 1.69vw;
  background: #8187ad;
  margin-left: 10px;
  transition: 0.1s;
}
#container .contents section .title-box .streaming label p {
  text-indent: -9999px;
}
#container .contents section .title-box .streaming label::after {
  content: '';
  display: block;
  width: 5.26vw;
  height: 4.83vw;
  background: #fff;
  border-radius: 4.83vw;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.1s;
}
#container
  .contents
  section
  .title-box
  .streaming
  input[type='checkbox']:checked
  + label {
  background: #43ff8e;
}
#container
  .contents
  section
  .title-box
  .streaming
  input[type='checkbox']:checked
  + label::after {
  left: 3.86vw;
}

#container .contents section > ul {
  margin-top: 16.5px;
  display: flex;
  justify-content: left;
}
#container .contents section > ul li {
  position: relative;
  width: 40.4%;
  margin-left: 16px;
  font-size: 0;
}
#container .contetns section > ul li > a {
  display: block;
}
#container .contents section > ul li:first-child {
  margin-left: 0;
}
#container .contents section > ul li img {
  width: 100%;
  border-radius: 5px;
}
#container .contents section > ul li .number {
  position: absolute;
  left: 5px;
  top: 0;
  font-size: 8.7vw;
  line-height: 10.39vw;
  color: #fff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
#container .contents section > a {
  display: block;
  position: absolute;
  right: 0;
  top: 5.5px;
  font-size: 2.9vw;
  line-height: 3.62vw;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
}
#container .contents .upcoming ul li {
  width: 69.67%;
}
#container .contents .upcoming ul li a {
  display: block;
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;
}
#container .contents .upcoming ul li iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
#container .contents section .tab-btn::after {
  content: '';
  display: block;
  clear: both;
}
#container .contents section .tab-btn li {
  position: relative;
  float: left;
  display: block;
  font-size: 4.35vw;
  font-weight: 700;
  line-height: 6.28vw;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 10px;
  margin-left: 10px;
}
#container .contents section .tab-btn li::after {
  content: '';
  display: block;
  width: 1px;
  height: 4.83vw;
  background: #fff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container .contents section .tab-btn li:first-child {
  padding-left: 0;
  margin-left: 0;
}
#container .contents section .tab-btn li:first-child::after {
  display: none;
}
#container .contents section .tab-btn li.active {
  color: #fff;
}
#container .contents section .tab-contents {
  margin-top: 16.5px;
}
#container .contents section .tab-contents ul {
  display: none;
}
#container .contents section .tab-contents ul.active {
  display: block;
}
#container .contents section .tab-contents ul li {
  width: 80.8%;
}
#container .contents .trending .tab-contents ul li {
  width: 56.5%;
}
#container .contents .trending .tab-contents ul li img {
  width: 100%;
  border-radius: 5px;
}
#container .contents .popular-actor .actor-list {
  display: block;
  width: 100%;
}
#container .contents .popular-actor .actor-list li {
  width: 100%;
  margin-left: 0;
  margin-top: 16px;
}
#container .contents .popular-actor .actor-list li:first-child {
  margin-top: 0;
}
#container .contents .popular-actor .actor-list li figure {
  width: 100%;
  display: flex;
}
#container .contents .popular-actor .actor-list li figure img {
  width: 18.841vw;
  border-radius: 5px 0 0 5px / 5px 0 0 5px;
}
#container .contents .popular-actor .actor-list li figure figcaption {
  width: calc(100% - 18.841vw);
  background: #212634;
  border-radius: 0 5px 5px 0 / 0 5px 5px 0;
  color: #fff;
  padding: 3.38vw 2.05vw 1.76vw;
}
#container .contents .popular-actor .actor-list li figure figcaption strong {
  font-size: 4.35vw;
  font-weight: 700;
  line-height: 5.56vw;
  letter-spacing: -0.02em;
}
#container .contents .popular-actor .actor-list li figure figcaption p {
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  padding: 8px 0 0 2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1024px) {
  /* 로고,네비 */
  header {
    display: flex;
    justify-content: left;
    padding: 11px 31px 16px;
    position: static;
  }
  header .logo {
    padding: 0;
  }
  #wrap header .logo a {
    display: block;
    font-size: 2.34vw;
    line-height: 3.42vw;
  }
  #wrap header nav {
    padding-top: 0;
    width: 32.23vw;
    margin: 0 0 0 17px;
  }
  #wrap header nav a {
    font-size: 2.05vw;
    line-height: 3.42vw;
  }

  /* 비주얼 */
  #container .visual {
    height: 56.25vw;
  }
  #container .visual::before {
    display: none;
  }
  #container .visual::after {
    display: none;
  }
  #container .visual li .banner-text {
    width: auto;
    bottom: 61px;
  }
  #container .visual li .banner-text strong {
    font-size: 5.27vw;
    line-height: 6.35vw;
  }
  #container .visual li .banner-text p {
    font-size: 2.34vw;
    line-height: 3.42vw;
  }
  #container .visual li .banner-text .btn-more {
    width: 20.118vw;
    padding: 0.78vw 3.03vw;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.98vw;
    font-size: 2.34vw;
    line-height: 3.42vw;
    letter-spacing: 0.25px;
  }
  #container .visual li .banner-text .btn-more::before {
    width: 1.37vw;
    height: 3.42vw;
    background-size: 1.37vw;
    margin-right: 0.98vw;
  }

  /* 콘텐츠 */
  #container .contents section {
    margin-top: 29px;
  }
  #container .contents section:first-child {
    margin-top: 29px;
  }
  #container .contents section h2 {
    font-size: 2.93vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming,
  #container .contents section .title-box .tab-btn {
    margin-left: 32px;
  }

  #container .contents section .title-box .streaming p {
    font-size: 2.34vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming label {
    width: 5.27vw;
    height: 2.17vw;
    border-radius: 2.44vw;
  }
  #container .contents section .title-box .streaming label::after {
    width: 3.1vw;
    height: 3.1vw;
    border-radius: 3.1vw;
  }
  #container
    .contents
    section
    .title-box
    .streaming
    input[type='checkbox']:checked
    + label::after {
    left: 2.2vw;
  }
  #container .contents section > ul {
    margin-top: 18px;
  }
  #container .contents section > ul li {
    width: 19.06vw;
    margin-left: 24px;
  }
  #container .contents section > ul li .number {
    left: 5.59px;
    top: -6px;
    font-size: 5.08vw;
    line-height: 6.05vw;
  }
  #container .contents section > a {
    top: 11px;
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
  #container .contents .upcoming ul li {
    width: 41.6vw;
  }
  #container .contents section .tab-btn li {
    font-size: 2.34vw;
    font-weight: 500;
    line-height: 3.42vw;
  }
  #container .contents section .tab-btn li::after {
    height: 1.95vw;
  }
  #container .contents section .tab-contents {
    margin-top: 18px;
  }
  #container .contents section .tab-contents ul li {
    width: 35.35vw;
  }
  
  #container .contents .trending .tab-contents ul li {
    width: 19.06vw;
  }
  #container .contents .popular-actor .actor-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #container .contents .popular-actor .actor-list li {
    width: calc(50% - 10px);
    margin-top: 24px;
  }
  #container .contents .popular-actor .actor-list li:first-child,
  #container .contents .popular-actor .actor-list li:nth-child(2) {
    margin-top: 0;
  }
  #container .contents .popular-actor .actor-list li figure img {
    width: 10.65vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption {
    width: calc(100% - 10.65vw);
    padding: 19.56px 29.42px 23.12px;
  }
  #container .contents .popular-actor .actor-list li figure figcaption strong {
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption p {
    font-size: 1.76vw;
    line-height: 2.25vw;
    font-weight: 700;
    padding: 17.32px 0 0 2px;
  }
}
</style>
