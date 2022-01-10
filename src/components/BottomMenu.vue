<template>
  <div>
    <!-- 독 바 -->
    <footer class="doc-bar">
      <router-link to="/" class="doc-bar-item">
        <icon-base iconColor="white" icon-name="home">
          <IconPopular/>
        </icon-base>
        <p :class="[tab === 'home' ? 'font-primary': 'font-white']">홈</p>
      </router-link>
      <router-link to="/movienow" class="doc-bar-item">
        <icon-base
          :iconColor="tab === 'movienow' ? '#42ff8f' : 'white'" icon-name="movienow">
          <IconPopular/>
        </icon-base>
        <p :class="[tab === 'movienow' ? 'font-primary': 'font-white']">상영중</p>
      </router-link>
      <router-link to="/movieupcoming" class="doc-bar-item">
        <icon-base
          :iconColor="tab === 'movieupcoming' ? '#42ff8f' : 'white'" icon-name="movieupcoming">
          <IconPopular/>
        </icon-base>
        <p :class="[tab === 'movieupcoming' ? 'font-primary': 'font-white']">개봉예정</p>
      </router-link>
      <router-link to="/search" class="doc-bar-item">
        <icon-base
          :iconColor="tab === 'search' ? '#42ff8f' : 'white'" icon-name="search">
          <IconPopular/>
        </icon-base>
        <p :class="[tab === 'search' ? 'font-primary': 'font-white']">검색</p>
      </router-link>
      <router-link to="/popular" class="doc-bar-item">
        <icon-base
          :iconColor="tab === 'popular' ? '#42ff8f' : 'white'" icon-name="popular">
          <IconPopular/>
        </icon-base>
        <p :class="[tab === 'popular' ? 'font-primary': 'font-white']">인기콘텐츠</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
import IconPopular from "./svg/IconPopular.vue"

export default {
  components: {
    IconPopular
  },
  computed: {
    tab () {
      return (this.$route.name)
        ?  this.$route.name.toLowerCase('en-US')
        : '';
    }
  },
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

/* doc-bar */
.doc-bar {
  position: fixed;
  bottom: 0;
  height: 5.4rem;
  width: 100%;
  background-color: #13131b;
  display: flex;
ㅐ  z-index: 999;
}

.doc-bar-item {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.6rem 0;
}

.doc-bar-item p {
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: -0.02em;
  text-align: center;
}

/* tab */
@media screen and (min-width: 1024px) {
  .doc-bar {
    padding: 0 22rem;
    height: 6rem;
  }
}
</style>
