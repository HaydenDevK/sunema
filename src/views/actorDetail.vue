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

      <!-- 기본 정보 -->
      <section id="wrapper-profile">
        <img :src="profile" alt="" />

        <div id="wrapper-profile-top">
          <div id="profile-title">
            <span id="profile-name">
              {{ actorDetail.name }}
            </span>
            <span id="profile-job">{{
              `${actorDetail.known_for_department === 'Acting' ? '배우' : ''}`
            }}</span>
          </div>

          <div id="profile-further">
            {{ actorDetail.biography }}
          </div>

          <div class="wrapper-more">
            <button class="font-white font-white-70 font-md-h5">더보기</button>
          </div>
          <!-- todo
            가져올 내용 제한하는 방법 적용하고
            더보기 버튼으로 추가로 더 불러오게끔
          -->

          <div class="wrapper-list">
            <span class="font-white-70">성별</span>
            <span>{{ `${actorDetail.gender === 1 ? '여성' : '남성'}` }}</span>

            <span class="font-white-70">생일</span>
            <span>{{ actorDetail.birthday }} ({{ age }} years old)</span>

            <span class="font-white-70">출생지</span>
            <span>{{ actorDetail.place_of_birth }}</span>
          </div>
        </div>
      </section>

      <div class="seperator-black-2" />

      <!-- 참여 작품 -->
      <section id="filmography">
        <div class="profile-subtitle">
          참여 작품
        </div>

        <div class="wrapper-movie-slide">
          <router-link
            v-for="item in $store.state.actorDetail.actorCredits.cast"
            :key="item.id"
            to=""
          >
            <img :src="getImage(item.poster_path)" alt="" />
          </router-link>
          <!-- todo
            공백
          -->
        </div>
      </section>

      <!-- 프로필 사진 -->
      <section id="photography">
        <div class="profile-subtitle">
          프로필 사진
        </div>
        <div class="wrapper-movie-slide">
          <router-link
            v-for="item in $store.state.actorDetail.actorImages"
            :key="item.id"
            to=""
          >
            <img :src="getImage(item.file_path)" alt="" />
          </router-link>
          <!-- todo
            공백
          -->
        </div>
      </section>

      <!-- 전체 작품 활동 -->
      <section id="works">
        <div class="profile-subtitle">
          전체 작품 활동
        </div>

        <div class="works-category font-primary">연기</div>
        <div
          v-for="item in $store.state.actorDetail.actorCredits.cast"
          :key="item.id"
          class="wrapper-list"
        >
          <span class="font-white-70">{{
            item.release_date ? getYear(item.release_date) : ''
          }}</span>
          <span>{{ item.title }}</span>
        </div>
        <!-- todo
          공백
        -->

        <div class="wrapper-more">
          <button>더보기</button>
        </div>

        <div class="works-category font-primary works-category-space">제작</div>
        <div
          v-for="item in $store.state.actorDetail.actorCredits.crew"
          :key="item.credit_id"
          class="wrapper-list"
        >
          <span class="font-white-70">{{
            item.release_date ? getYear(item.release_date) : ''
          }}</span>
          <span>{{ item.title }}…{{ item.job }}</span>
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
  name: 'ActorDetail',
  data() {
    return {
      personID: 0,
      actorDetail: {},
      actorCredits: {
        cast: [],
        crew: []
      },
      actorImages: {}
    };
  },
  computed: {
    age() {
      let age = 0;
      if (this.actorDetail.birthday) {
        const birthday = this.actorDetail.birthday.split('-');
        const today = new Date();
        const birthDate = new Date(birthday[0], birthday[1], birthday[2]);

        age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      }
      // console.log(age);
      return age;
    },
    profile() {
      // 메인 프로필 사진
      if (this.actorDetail.profile_path) {
        return `https://image.tmdb.org/t/p/w300${this.actorDetail.profile_path}`;
      } else {
        return 'test'; // 성주님께 디폴트 이미지 제작 요청 후 붙이기 룰루리랄라
      }
    }
  },
  mounted() {
    this.setPersonId();
    this.getInitDetail();
    this.getInitCredits();
    this.getInitImages();
  },
  methods: {
    setPersonId() {
      // console.log(this.personID);
      // console.log(this.$route.params.personId);
      this.personID = Number(this.$route.params.personId); // todo 왜 형변환 해야하는지 다시 이해
      // console.log(this.personID);
      this.$store.commit('actorDetail/SET_PERSON_ID', this.personID);
    },
    getInitDetail() {
      this.$store.dispatch('actorDetail/getActorDetail').then(() => {
        this.actorDetail = this.$store.state.actorDetail.actorDetail;
        // console.log(this.actorDetail);
      });
    },
    getInitCredits() {
      this.$store.dispatch('actorDetail/getActorCredits').then(() => {
        this.actorCredits = this.$store.state.actorDetail.actorCredits;
        // console.log(this.actorCredits);
      });
    },
    getInitImages() {
      this.$store.dispatch('actorDetail/getActorImages').then(() => {
        this.actorImages = this.$store.state.actorDetail.actorImages;
        // console.log(this.actorImages);
      });
    },
    getImage(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
      } else {
        return 'test';
      }
    },
    getYear(release_date) {
      const splited = release_date.split('-');
      const year = splited[0];
      return year;
    }
  }
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
  grid-template-columns: repeat(6, 148px);
  /* grid-template-columns: repeat(auto-fill, 148px); */
  grid-column-gap: 16px;
  grid-auto-flow: column;
  overflow-x: auto;
  white-space: nowrap;
}
.wrapper-movie-slide a {
  font-size: 0;
  overflow: hidden;
  border-radius: 5px;
}

.wrapper-movie-slide img {
  height: 222px;
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
    /* grid-template-columns: repeat(auto-fill, 166px); */
    /* grid-template-columns: repeat(auto-fill, minmax(166px, auto)); */
    grid-template-columns: repeat(10, 166px);
    grid-column-gap: 24px;
  }

  .wrapper-movie-slide img {
    height: 256px;
  }
}
</style>
