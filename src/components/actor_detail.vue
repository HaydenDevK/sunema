<template>
  <div id="actor_detail" class="bg-navy-100">
    <!-- 배경 블러 이미지 -->
    <div class="bg-blured"></div>

    <!-- 컨텐츠 -->
    <div class="contents">
      <header id="header">
        <router-link to="" class="btn-back">
          <img src="../assets/keyword_search/icon-back.png" alt="">
        </router-link>
      </header>

      <section id="wrapper-profile">
        <img class="center-img margin-0-auto border-radius-5" src="../assets/actor_detail/img-actor-1.png" alt="">
        
        <div class="padding-24 font-white">
          <div class="text-align-middle padding-b-24">
            <span class="font-h5-bold padding-r-8">Margot Robbie</span>
            <span class="font-body-12">배우</span>
          </div>

          <div class="font-body-16">
            Margot Elise Robbie (born 2 July 1990) is an Australian actress and producer. She has received nominations for two Academy Awards and five 
          </div>

          <div class="wrapper-more padding-y-16">
            <button class="font-white font-white-70">더보기</button>
          </div>

          <div class="wrapper-list">
            <span class="font-white-70">성별</span>
            <span>여성</span>

            <span class="font-white-70">생일</span>
            <span>1990-07-02 (31 years old)</span>

            <span class="font-white-70">출생지</span>
            <span>Dalby, Queensland, Australia</span>
          </div>
        </div>
      </section>

      <div class="seperator-black-2"/>

      <section id="filmography" class="padding-t-24 padding-l-24">
        <div class="font-h5-bold font-white padding-b-8">참여 작품</div>
        <div class="wrapper-movie-slide">
          <img src="" alt="">
          <img src="assets/images/actor_detail/img-filmo-1.png" alt="">
          <img src="assets/images/actor_detail/img-filmo-1.png" alt="">
        </div>
      </section>

      <section id="photography" class="padding-t-24 padding-l-24">
        <div class="font-h5-bold font-white padding-b-8">이미지?</div>
        <div class="wrapper-movie-slide">
          <img src="assets/images/actor_detail/img-photography-1.png" alt="">
          <img src="assets/images/actor_detail/img-photography-1.png" alt="">
          <img src="assets/images/actor_detail/img-photography-1.png" alt="">
        </div>
      </section>

      <section id="works" class="padding-t-24 padding-x-24 padding-b-24">
        <div class="font-h5-bold font-white padding-b-24">전체 작품 활동</div>

        <div class="font-primary font-h6 padding-b-8">연기</div>
        <div class="wrapper-list font-white">
          <span class="font-white-70">—</span>
          <span>Untitled Wes Anderson Film</span>

          <span class="font-white-70">—</span>
          <span>Untitled Pirates of the Caribbean Re</span>

          <span class="font-white-70">—</span>
          <span>바비 Barbie 역</span>

          <span class="font-white-70">2022</span>
          <span>바빌론</span>

          <span class="font-white-70">2021</span>
          <span>더 수어사이드 스쿼드 Harleen Quinzel / Harley Quinn 역</span>

          <span class="font-white-70">2020</span>
          <span>Joker: Put on a Happy Face Self 역</span>

          <span class="font-white-70">2020</span>
          <span>버즈 오브 프레이: 할리 퀸의 황홀한 해방 Harleen Quinzel / Harley Quinn 역</span>

          <span class="font-white-70">2019</span>
          <span>밤쉘: 세상을 바꾼 폭탄선언 Kayla Posp..</span>
        </div>

        <div class="wrapper-more padding-y-16">
          <button class="font-white font-white-70">더보기</button>
        </div>

        <div class="font-primary font-h6 padding-b-8">제작</div>
        <div class="wrapper-list font-white">
          <span class="font-white-70">—</span>
          <span>Til Death … 제작자</span>

          <span class="font-white-70">—</span>
          <span>The Paper Bag Princess … 제작자</span>

          <span class="font-white-70">—</span>
          <span>Dangerous Odds … 제작자</span>

          <span class="font-white-70">—</span>
          <span>My Year of Rest and Relaxation … 제작..</span>

          <span class="font-white-70">—</span>
          <span>Fool's Day … 책임 프로듀서</span>

          <span class="font-white-70">—</span>
          <span>Beautiful Things … 제작자</span>

          <span class="font-white-70">—</span>
          <span>Barbed Wire Heart … 제작자</span>

          <span class="font-white-70">—</span>
          <span>Bad Monkeys … 제작자</span>

          <span class="font-white-70">—</span>
          <span>Big Gay Jamboree … 제작자</span>

          <span class="font-white-70">—</span>
          <span>바비 … 제작자</span>
        </div>

        <div class="wrapper-more padding-y-16">
          <button class="font-white font-white-70">더보기</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ActorDetail'
  }
</script>

<style scoped>
/* @import '../assets/css/reset.css'; index.html에 넣은 reset.css 적용 안됨 */

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
  color: #13131B;
}

.font-white-70 {
  color: rgba(255, 255, 255, 0.7);
}

.font-primary {
  color: #43FF8E;
}

.font-body-12 {
  font-size: 12px;
  line-height: 15px;
}

.font-body-16 {
  font-size: 16px;
  line-height: 23px;
}

.font-h5-bold {
  font-weight: bold;
  font-size: 21px;
  line-height: 26px;
}

.font-h6 {
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.02em;
}

.bg-navy-100 {
  background-color: #181727;
}

.width-100 {
  width: 100%;
}

.justify-items-center {
  justify-items: center;
}

.text-align-center {
  text-align: center;
}

.text-align-middle {
  display: flex;
  align-items: center;
}

.wrapper-more {
  display: flex;
  justify-content: flex-end;
}

.wrapper-list {
  display: grid;
  grid-template-columns: 56px 1fr;
}

.wrapper-movie-slide {
  display: grid;
  grid-column-gap: 16px;
  grid-auto-flow: column;
  overflow: hidden;
}

.wrapper-movie-slide img {
  width: 148px;
  border-radius: 5px;
}

.padding-24 {
  padding: 24px;
}

.padding-y-24 {
  padding-top: 24px;
  padding-bottom: 24px; 
}

.padding-t-24 {
  padding-top: 24px;
}

.padding-x-24 {
  padding-left: 24px;
  padding-right: 24px;
}

.padding-l-24 {
  padding-left: 24px;
}

.padding-r-8 {
  padding-right: 8px;
}

.padding-b-8 {
  padding-bottom: 8px;
}

.padding-b-24 {
  padding-bottom: 24px;
}

.padding-y-16 {
  padding-top: 16px;
  padding-bottom: 16px;
}

.padding-b-16 {
  padding-bottom: 16px;
}

.border-radius-5 {
  border-radius: 5px;
}

.seperator-black-2 {
  background: #000000;
  height: 2px;
  width: 100%;
}

.btn-back {
  padding: 16px 24px;
}

.btn-back img {
  width: 10px;
}

.bg-blured {
  background: url("../assets/actor_detail/img-actor-1.png") no-repeat center;
  background-size: cover;
  height: 452px;
  filter: blur(40px);
}

.contents {
  position: relative;
  margin-top: -452px;
}

.center-img {
  display: block;
  margin: 0px auto;
  width: 226px;
}

/* HEADER */
#header {
  height: 80px;
  display: flex;
  align-items: end;
}
</style>