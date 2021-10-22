<template>
  <div id="wrap">
    <header id="header">
      <router-link to="/">
        <img src="../assets/images/round/icon_back.png" alt="" />
      </router-link>
      <p>인기배우</p>
    </header>
    <!-- header -->
    <section id="actor">
      <ul class="actor-list">
        <li v-for="item in $store.state.actor.popularActor" :key="item.id">
          <router-link :to="`/actordetail/${item.id}`">
            <img :src="getImage(item.profile_path)" alt="" />
            <div class="actor-list-text">
              <div>
                {{ item.name }}
              </div>
              <p v-for="item1 in item.known_for" :key="item1.id">
                {{ item1.name ? item1.name : item1.title }}
              </p>
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
  data() {
    return {};
  },
  mounted() {
    this.getInitActor();
    // console.log(this.$route.params.idx);
    //  스크롤 하단 이동 체크하기
    //  하단 이동하면 콜백 함수 실행
    this.$isScrollBottomCheck(this.scrollCallback);
    // console.log(this.item);
  },
  methods: {
    getInitActor() {
      //api사용하는 코드
      this.$store.dispatch('actor/getPopularActor', this.$route.params.idx);
    },
    getImage(profile_path) {
      if (profile_path) {
        return `https://image.tmdb.org/t/p/w300${profile_path}`;
      } else {
        return require('../assets/images/global/no-image.png');
      }
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

#actor {
  width: 100%;
}
#actor ul {
  margin-left: 24px;
  margin-right: 24px;
}
#actor ul li:nth-child(1) {
  margin-top: 80px;
}
#actor ul li + li {
  margin-top: 16px;
}
#actor ul li:nth-last-child(1) {
  margin-bottom: 53px;
}
#actor ul li a {
  display: flex;
}
#actor ul li a img {
  width: 20%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
#actor ul li div.actor-list-text {
  flex: 2;
  background: #212634;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 14px 0 18px 22px;
  align-items: center;
}
#actor ul li div.actor-list-text div {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background: #212634;
}

#actor ul li div.actor-list-text p {
  float: left;
  padding-right: 8px;
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  background: #212634;
}
#actor ul li div.actor-list-text span {
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
}
</style>
