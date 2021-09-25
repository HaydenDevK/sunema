<template>
  <div id="keyword-search" class="bg-navy-100 min-height-100vh">
    <header id="header">
      <router-link to="" class="btn-back">
        <img src="../assets/keyword_search/icon-back.png" alt="" />
      </router-link>
    </header>

    <!-- 키워드 버튼 -->
    <section id="wrapper-keyword" class="wrapper-flex-center">
      <button class="btn-badge font-body-12">#stockholm syndrome</button>
      <button class="btn-badge font-body-12">#spain</button>
      <button class="btn-badge font-body-12">#perfect crime</button>
    </section>

    <!-- 영화 리스트 -->
    <main
      id="wrapper-movies"
      class="wrapper-grid grid-colunms-3 grid-row-gap-16 grid-column-gap-16"
    >
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>

      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>

      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
      <router-link to="">
        <img src="../assets/keyword_search/movie-thumb-1.png" alt="" />
      </router-link>
    </main>

    <!-- 독 바 -->
    <footer
      id="footer"
      class="bg-dark wrapper-grid grid-colunms-5 justify-items-center"
    >
      <router-link to="" class="wrapper-grid justify-items-center width-100">
        <img src="../assets/keyword_search/icon-home.png" alt="" />
        <p class="font-body-12 font-white">홈</p>
      </router-link>
      <router-link to="" class="wrapper-grid justify-items-center width-100">
        <img src="../assets/keyword_search/icon-nowplaying.png" alt="" />
        <p class="font-body-12 font-white">상영중</p>
      </router-link>
      <router-link to="" class="wrapper-grid justify-items-center width-100">
        <img src="../assets/keyword_search/icon-upcoming.png" alt="" />
        <p class="font-body-12 font-white">개봉예정</p>
      </router-link>
      <router-link to="" class="wrapper-grid justify-items-center width-100">
        <img src="../assets/keyword_search/icon-search.png" alt="" />
        <p class="font-body-12 font-white">검색</p>
      </router-link>
      <router-link to="" class="wrapper-grid justify-items-center width-100">
        <img src="../assets/keyword_search/icon-popular.png" alt="" />
        <p class="font-body-12 font-white">인기콘텐츠</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'KeywordSearch',
};
</script>

<style scoped>
/* reset */
* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  letter-spacing: 0.25px;
}

button {
  background-color: unset;
  border: none;
}

/* reuse */
.font-white {
  color: white;
}

.font-dark {
  color: #13131b;
}

.bg-dark {
  background-color: #13131b;
}

.bg-navy-100 {
  background-color: #181727;
}

.bg-navy-80 {
  background: #212634;
}

.font-body-12 {
  font-size: 12px;
  line-height: 15px;
}

.width-100 {
  width: 100%;
}

.min-height-100vh {
  min-height: 100vh;
}

.border-radius-5 {
  border-radius: 5px;
}

.wrapper-grid {
  display: grid;
}

.grid-colunms-3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-colunms-5 {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.grid-column-gap-16 {
  grid-column-gap: 16px;
}

.grid-row-gap-16 {
  grid-row-gap: 16px;
}

.justify-items-center {
  justify-items: center;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.wrapper-flex-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn-back {
  padding: 16px 24px;
}

.btn-back img {
  width: 10px;
}

.btn-badge {
  text-align: center;
  padding: 8px 16px;
  border: 0.75px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 21px;
  background-color: #212634;
  color: #ffffff;
}

.btn-badge:focus {
  text-align: center;
  padding: 8px 16px;
  border: 0.75px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 21px;
  background-color: white;
  color: #13131b;
}

.movie-card {
  border-radius: 5px;
  width: 100%;
  height: 175px;
}

/* keyword-search */

/* HEADER */
#header {
  height: 80px;
  display: flex;
  align-items: flex-end;
}

#wrapper-keyword {
  padding-left: 24px;
}

#wrapper-keyword button {
  margin-right: 8px;
}

#wrapper-keyword button:last-of-type {
  margin-right: 0;
}

/* wrapper-movies */
#wrapper-movies {
  padding: 24px;
}

#wrapper-movies a {
  font-size: 0;
}

#wrapper-movies a img {
  width: 100%;
  border-radius: 5px;
}

/* FOOTER */
#footer {
  position: fixed;
  bottom: 0;
  height: 54px;
  width: 100%;
}

#footer a {
  padding: 8px 0;
}

#footer a img {
  width: 24px;
}
</style>
