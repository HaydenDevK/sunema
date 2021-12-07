<template>
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
      <img src="../assets/images/keyword_search/icon-popular.png" class="imgicon">
      <p>인기콘텐츠</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'BottomMenu',
};
</script>

<style scoped>
/* doc-bar */
.doc-bar {
  position: fixed;
  bottom: 0;
  height: 5.4rem;
  width: 100%;
  background-color: #13131b;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
}

.doc-bar a {
  padding: 0.8rem 0;
}

.doc-bar a img {
  width: 2.4rem;
}

.doc-bar p {
  font-weight: bold;
  color: white;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: -0.02em;
}

.doc-bar-item {
  display: grid;
  justify-items: center;
  width: 100%;
}

/* tab */
@media screen and (min-width: 1024px) {
  .doc-bar {
    padding: 0 22rem;
    height: 6rem;
  }
}

</style>
