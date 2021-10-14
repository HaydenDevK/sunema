<template>
  <div class="bg-navy-100">
    <!-- 배경 블러 이미지 -->
    <div
      class="bg-blurred"
      :style="{ backgroundImage: `url(${profile})` }"
    ></div>

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
            <button>더보기</button>
          </div>
          <!-- todo
            가져올 내용 제한하는 방법 적용하고
            더보기 버튼으로 추가로 더 불러오게
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

      <div class="separator-black-2" />

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

        <div class="wrapper-more">
          <button>더보기</button>
        </div>
        <!-- todo
          가져올 내용 제한하는 방법 적용하고
          더보기 버튼으로 추가로 더 불러오게
        -->

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
        <!-- todo
          가져올 내용 제한하는 방법 적용하고
          더보기 버튼으로 추가로 더 불러오게
        -->
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
      return age;
    },
    profile() {
      // 메인 프로필 사진
      if (this.actorDetail.profile_path) {
        return `https://image.tmdb.org/t/p/w300${this.actorDetail.profile_path}`;
      } else {
        return require('../assets/images/global/no-image.png');
        // todo 메인 프로필, 참여 작품, 프로필 사진 등에서 활용할 img-default.png로 수정
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
      this.personID = Number(this.$route.params.personId);
      this.$store.commit('actorDetail/SET_PERSON_ID', this.personID);
    },
    getInitDetail() {
      this.$store.dispatch('actorDetail/getActorDetail').then(() => {
        this.actorDetail = this.$store.state.actorDetail.actorDetail;
      });
    },
    getInitCredits() {
      this.$store.dispatch('actorDetail/getActorCredits').then(() => {
        this.actorCredits = this.$store.state.actorDetail.actorCredits;
      });
    },
    getInitImages() {
      this.$store.dispatch('actorDetail/getActorImages').then(() => {
        this.actorImages = this.$store.state.actorDetail.actorImages;
      });
    },
    getImage(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
      } else {
        return require('../assets/images/global/no-image.png');
        // todo 메인 프로필, 참여 작품, 프로필 사진 등에서 활용할 img-default.png로 수정
      }
    },
    getYear(release_date) {
      const splitArr = release_date.split('-');
      const year = splitArr[0];
      return year;
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

#contents {
  position: relative;
  margin-top: -45.2rem;
}

#wrapper-profile img {
  display: block;
  width: 22.6rem;
  margin: 0 auto;
  border-radius: 0.5rem;
}

#wrapper-profile-top {
  padding: 2.4rem;
  color: white;
}

#profile-title {
  display: flex;
  align-items: center;
  padding-bottom: 2.4rem;
}

#profile-title #profile-name {
  font-size: 2.1rem;
  line-height: 2.6rem;
  font-weight: bold;
  padding-right: 0.8rem;
}

#profile-title #profile-job {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

#profile-further {
  font-size: 1.6rem;
  line-height: 2.3rem;
}

#filmography .profile-subtitle,
#photography .profile-subtitle {
  padding: 4rem 0 1.6rem 2.4rem;
}

#works {
  padding: 4.8rem 2.4rem;
}

.profile-subtitle {
  font-size: 2.1rem;
  line-height: 2.6rem;
  letter-spacing: 0.025rem;
  color: white;
  font-weight: bold;
  padding-bottom: 1.6rem;
}

.works-category {
  padding-bottom: 0.8rem;
  font-size: 1.8rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
}

.works-category-space {
  margin-top: 3rem;
}

.separator-black-2 {
  background: #000000;
  height: 0.2rem;
  width: 100%;
}

.wrapper-list {
  display: grid;
  grid-template-columns: 5.6rem 1fr;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: white;
}

.wrapper-movie-slide {
  display: grid;
  grid-auto-columns: max-content;
  grid-column-gap: 1.6rem;
  grid-auto-flow: column;
  overflow-x: auto;
  white-space: nowrap;
}

.wrapper-movie-slide a {
  font-size: 0;
  overflow: hidden;
  border-radius: 0.5rem;
}

.wrapper-movie-slide a:first-child {
  margin-left: 2.4rem;
}

.wrapper-movie-slide a:last-child {
  margin-right: 2.4rem;
}

.wrapper-movie-slide img {
  height: 22.2rem;
}

.bg-blurred {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 45.2rem;
  filter: blur(4rem);
}

/* 1024px */
@media screen and (min-width: 1024px) {
  .bg-blurred {
    height: 66.4rem;
  }

  #contents {
    margin-top: -66.4rem;
  }
  #wrapper-profile-top {
    padding: 4.8rem;
  }

  #wrapper-profile img {
    width: 38.1rem;
  }

  #profile-title #profile-name {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: 0.025rem;
  }

  #profile-title #profile-job {
    font-size: 2.1rem;
    line-height: 2.6rem;
  }

  #profile-further {
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: 0.025rem;
    margin-bottom: 1.6rem;
  }

  #filmography .profile-subtitle,
  #photography .profile-subtitle {
    padding: 5.4rem 0 1.8rem 4.8rem;
  }

  #works {
    padding: 5.4rem 0 4.8rem 4.8rem;
  }

  .profile-subtitle {
    font-size: 3rem;
    line-height: 3.8rem;
    padding-bottom: 1.8rem;
  }

  .works-category {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  .wrapper-more {
    display: none;
  }

  .wrapper-list {
    grid-template-columns: 9.4rem 1fr;
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: 0.025rem;
  }

  .wrapper-movie-slide {
    grid-column-gap: 2.4rem;
  }

  .wrapper-movie-slide img {
    height: 25.6rem;
  }

  .wrapper-movie-slide a:first-child {
    margin-left: 4.8rem;
  }

  .wrapper-movie-slide a:last-child {
    margin-right: 4.8rem;
  }
}
</style>
