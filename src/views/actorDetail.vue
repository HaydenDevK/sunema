<template>
  <div class="bg-navy-100">
    <!-- 배경 블러 이미지 -->
    <div class="bg-blured"></div>

    <!-- 컨텐츠 -->
    <div id="contents">
      <header class="header">
        <router-link to="" class="btn-back">
          <img src="../assets/images/keyword_search/icon-back.png" alt="" />
        </router-link>
      </header>

      <section id="wrapper-profile">
        <img src="../assets/images/actor_detail/img-actor-1.png" alt="" />

        <div id="wrapper-profile-top">
          <div id="profile-title">
            <span id="profile-name">
              Margot Robbie
            </span>
            <span id="profile-job">배우</span>
          </div>

          <div id="profile-further">
            Margot Elise Robbie (born 2 July 1990) is an Australian actress and
            producer. She has received nominations for two Academy Awards and
            five
          </div>

          <div class="wrapper-more">
            <button class="font-white font-white-70 font-md-h5">더보기</button>
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

      <div class="seperator-black-2" />

      <section id="filmography">
        <div class="profile-subtitle">
          참여 작품
        </div>
        <div class="wrapper-movie-slide">
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
          <img src="../assets/images/actor_detail/img-filmo-1.png" alt="" />
        </div>
      </section>

      <section id="photography">
        <div class="profile-subtitle">
          프로필 사진
        </div>
        <div class="wrapper-movie-slide">
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
          <img src="@/assets/images/actor_detail/img-photo-1.png" alt="" />
        </div>
      </section>

      <section id="works">
        <div class="profile-subtitle">
          전체 작품 활동
        </div>

        <div class="works-category font-primary">연기</div>
        <div class="wrapper-list">
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
          <span
            >버즈 오브 프레이: 할리 퀸의 황홀한 해방 Harleen Quinzel / Harley
            Quinn 역</span
          >

          <span class="font-white-70">2019</span>
          <span>밤쉘: 세상을 바꾼 폭탄선언 Kayla Posp..</span>
        </div>

        <div class="wrapper-more">
          <button>더보기</button>
        </div>

        <div class="works-category font-primary works-category-space">제작</div>
        <div class="wrapper-list">
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

        <div class="wrapper-more">
          <button>더보기</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActorDetail'
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

#contents {
  position: relative;
  margin-top: -452px;
}

#wrapper-profile img {
  display: block;
  margin: 0px auto;
  width: 226px;
  margin: 0 auto;
  border-radius: 5px;
}

#wrapper-profile-top {
  padding: 24px;
  color: white;
}

#profile-title {
  display: flex;
  align-items: center;
  padding-bottom: 24px;
}

#profile-title #profile-name {
  font-size: 21px;
  line-height: 26px;
  font-weight: bold;
  padding-right: 8px;
}

#profile-title #profile-job {
  font-size: 12px;
  line-height: 15px;
}

#profile-further {
  font-size: 16px;
  line-height: 23px;
}

#filmography,
#photography {
  padding: 24px 0 0 24px;
}

#works {
  padding: 24px;
}

.profile-subtitle {
  font-size: 21px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: white;
  font-weight: bold;
  padding-bottom: 16px;
}

.works-category {
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.02em;
}

.works-category-space {
  margin-top: 30px;
}

.seperator-black-2 {
  background: #000000;
  height: 2px;
  width: 100%;
}

.wrapper-list {
  display: grid;
  grid-template-columns: 56px 1fr;
  font-size: 16px;
  line-height: 23px;
  color: white;
}

.wrapper-movie-slide {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 16px;
  grid-auto-flow: column;
  overflow: hidden;
}

.wrapper-movie-slide img {
  width: 148px;
  border-radius: 5px;
}

.bg-blured {
  background: url('../assets/images/actor_detail/img-actor-1.png') no-repeat
    center;
  background-size: cover;
  height: 452px;
  filter: blur(40px);
}

/* 1024px */
@media screen and (min-width: 1024px) {
  .bg-blured {
    height: 664px;
  }

  #contents {
    margin-top: -664px;
  }
  #wrapper-profile-top {
    padding: 48px;
  }

  #wrapper-profile img {
    width: 381px;
  }

  #wrapper-profile-text {
    padding: 48px;
  }

  #profile-title #profile-name {
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.25px;
  }

  #profile-title #profile-job {
    font-size: 21px;
    line-height: 26px;
  }

  #profile-further {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.25px;
    margin-bottom: 16px;
  }

  #filmography,
  #photography {
    padding: 30px 0 0 48px;
  }

  #works {
    padding: 30px 0 48px 48px;
  }

  .profile-subtitle {
    font-size: 30px;
    line-height: 38px;
    padding-bottom: 18px;
  }

  .works-category {
    font-size: 30px;
    line-height: 38px;
  }

  .font-md-h3 {
    font-size: 30px;
    line-height: 38px;
  }

  .wrapper-more {
    display: none;
  }

  .wrapper-list {
    grid-template-columns: 94px 1fr;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.25px;
    font-size: 24px;
    line-height: 35px;
  }

  .wrapper-movie-slide {
    grid-column-gap: 24px;
  }

  .wrapper-movie-slide img {
    width: 195.16px;
  }
}
</style>
