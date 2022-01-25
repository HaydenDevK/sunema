<template>
  <div id="page-search" class="bg-navy">
    <!-- Header -->
    <header>
      <div class="window">
        <input
          id="name"
          @keyup.enter="find(inputText)"
          v-model="inputText"
          type="text"
          placeholder="영화, TV프로그램, 배우 검색"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='영화, TV프로그램, 배우 검색'"
          style="width: 186px;"
        />
      </div>

      <button class="cancel" v-if="inputText !== ''" @click="inputText = ''">취소</button>

    </header>
    <!-- 검색 순위 -->
    <section class="ranking">
      <p>최다 검색</p>
      <div class="rank-padding">
        <div class="rank" v-for="(item, index) in searchedKeyword" :key="item.text">
          <a @click="find(item.text)">
            <span class="num-mint">{{ index + 1 }}</span> {{ item.text }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    searchedKeyword() {
      // 10위까지만 가져오기
      return this.$store.state.keyword.searchKeyword.slice(0, 10);
    }
  },
  methods: {
    find(text) {
      if (text.length < 2) {
        alert('검색 키워드는 최소 2글자 이상이어야 합니다.');
        return;
      }
      this.$store.dispatch('keyword/find', text);
      this.$router.push('/tvmovieSearch/' + text);
    },
    sort(a, b) {
      // 검색어 순위 정렬
      if (a.counter >= b.counter) {
        return 1;
      }
      return -1;
    }
  }
};
</script>

<style scoped>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

:root {
  --navy-color: #181727;
  --dark-navy-color: #13131b;
  --white-color: #ffffff;
  --mint-color: #42ff8f;
  --grey-color: #2e323e;
  --padding: 24px;
}
* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  letter-spacing: 0.25px;
}

.bg-navy {
  width: 100%;
  min-height: 100vh;
  background-color: #181727;
}
button,
input,
button:focus {
  border: none;
  cursor: pointer;
  outline: none;
  background-color: unset;
  color: #ffffff;
}
header {
  height: 80px;
  width: 100vw;
  padding: 23px 0 17px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
header .window {
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #2e323e;
  position: relative;
  margin: 0 16px;
}
header .window::before {
  content: '';
  position: absolute;
  top: 13px;
  left: 16px;
  background: url("../assets/images/search/magnifier.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 13px;
  height: 14px;
}

header input::placeholder {
  color: #ffffff;
}
header img {
  height: 13.56px;
  margin-left: 66.96px;
  margin-top: 13.22px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
header input {
  margin-left: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  margin-top: 8.5px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
  font-style: normal;
  font-weight: normal;
}
header .cancel {
  width: 52px;
  height: 100%;
  margin-right: 16px;
}
header .cancel button {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
.ranking {
color: #ffffff;
font-size: 18px;
line-height: 20px;
letter-spacing: -0.02em;
font-style: normal;
font-weight: normal;
display: inline-block;
text-overflow: ellipsis;
white-space: nowrap;
overflow: scroll;
width: 100vw;
height: calc(100vh - 139px);
}
.ranking p {
margin-left: 13px;
margin-top: 17px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 23px;
text-align: center;
letter-spacing: -0.02em;
width: 92px;
}

p {
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
}
.rank-padding {
width: 100%;
height: 395.11px;
padding: 0 26px;
margin-top: 12.89px;
}
.ranking div a {
display: block;
height: 40px;
line-height: 40px;
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
font-size: 18px;
}
.num-mint {
display: inline-block;
color: #42ff8f;
padding-left: 10px;
width: 40px;
}

.font-mint {
color: #42ff8f;
}
</style>
