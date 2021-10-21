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
        <a class="btn-back" @click="$router.go(-1)">
          <img src="../assets/images/global/icon-back.png" alt="" />
        </a>
      </header>

      <!-- 기본 정보 -->
      <section id="wrapper-profile">
        <img :src="profile" alt="" />

        <div id="wrapper-profile-top">
          <div id="profile-title">
            <span id="profile-name">
              {{ $store.state.actorDetail.actorDetail.name }}
            </span>
            <span id="profile-job">{{
              `${
                $store.state.actorDetail.actorDetail.known_for_department ===
                'Acting'
                  ? '배우'
                  : ''
              }`
            }}</span>
          </div>

          <div
            v-if="$store.state.actorDetail.actorDetail.biography"
            id="profile-biography"
            :class="{ ellipsis: ellipsis === true }"
          >
            {{ $store.state.actorDetail.actorDetail.biography }}
          </div>

          <div
            v-if="$store.state.actorDetail.actorDetail.biography"
            class="wrapper-more"
          >
            <button @click="ellipsis = !ellipsis">
              {{ ellipsis === true ? '펼치기' : '닫기' }}
            </button>
          </div>

          <div class="wrapper-list">
            <span class="font-white-70">성별</span>
            <span>
              {{
                `${
                  $store.state.actorDetail.actorDetail.gender === 1
                    ? '여성'
                    : '남성'
                }`
              }}
            </span>

            <span class="font-white-70">생일</span>
            <span>
              {{ $store.state.actorDetail.actorDetail.birthday || '정보 없음' }}
              {{ age ? `(만 ${age}세)` : '' }}
            </span>

            <span class="font-white-70">출생지</span>
            <span>
              {{
                $store.state.actorDetail.actorDetail.place_of_birth ||
                  '정보 없음'
              }}
            </span>
          </div>
        </div>
      </section>

      <div class="separator-black-2" />

      <!-- 참여 작품 -->
      <section
        v-if="$store.state.actorDetail.actorCredits.cast > 0"
        id="filmography"
      >
        <div class="profile-subtitle">
          참여 작품
        </div>

        <ListSlide
          :Media="$store.state.actorDetail.actorCredits.cast"
          Path="poster_path"
          Type="filmography"
        />
      </section>

      <!-- 프로필 사진 -->
      <section
        v-if="$store.state.actorDetail.actorImages.length > 0"
        id="photography"
      >
        <div class="profile-subtitle">
          프로필 사진
        </div>

        <ListSlide
          :Media="$store.state.actorDetail.actorImages"
          Path="file_path"
          Type="photography"
        />
      </section>

      <!-- 전체 작품 활동 -->
      <section
        v-if="actorCredits.cast.length > 0 || actorCredits.crew.length > 0"
        id="works"
      >
        <div class="profile-subtitle">
          전체 작품 활동
        </div>

        <div v-if="actorCredits.cast.length > 0">
          <div class="works-category font-primary">연기</div>
          <div
            v-for="item in actorCredits.cast"
            :key="item.id"
            class="wrapper-list"
          >
            <span class="font-white-70">{{
              item.release_date ? getYear(item.release_date) : ''
            }}</span>
            <span>{{ item.title }}</span>
          </div>

          <div v-if="castMore" class="wrapper-more">
            <button @click="getCreditsMore('cast')">더보기</button>
          </div>
        </div>

        <div v-if="actorCredits.crew.length > 0">
          <div class="works-category font-primary works-category-space">
            제작
          </div>
          <div
            v-for="item in actorCredits.crew"
            :key="item.credit_id"
            class="wrapper-list"
          >
            <span class="font-white-70">
              {{ item.release_date ? getYear(item.release_date) : '' }}
            </span>
            <span>{{ item.title }}…{{ item.job }}</span>
          </div>

          <div v-if="crewMore" class="wrapper-more">
            <button @click="getCreditsMore('crew')">더보기</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ListSlide from '../components/ListSlide.vue';

export default {
  name: 'ActorDetail',
  components: {
    ListSlide
  },
  data() {
    return {
      personID: 0,
      actorCredits: {
        cast: [],
        crew: []
      },
      ellipsis: true,
      castCounter: 1,
      crewCounter: 1,
      castMore: false,
      crewMore: false
    };
  },
  computed: {
    age() {
      let age = 0;
      if (this.$store.state.actorDetail.actorDetail.birthday) {
        const birthday = this.$store.state.actorDetail.actorDetail.birthday.split(
          '-'
        );
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
      return this.$store.state.actorDetail.actorDetail.profile_path
        ? `https://image.tmdb.org/t/p/w300${this.$store.state.actorDetail.actorDetail.profile_path}`
        : require('../assets/images/global/no-image.png');
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
      this.$store.dispatch('actorDetail/getActorDetail');
    },
    getInitCredits() {
      this.$store.dispatch('actorDetail/getActorCredits').then(() => {
        if (this.$store.state.actorDetail.actorCredits.cast.length >= 15) {
          this.actorCredits.cast = this.$store.state.actorDetail.actorCredits.cast.slice(
            0,
            10
          );
          this.castMore = true;
        } else
          this.actorCredits.cast = this.$store.state.actorDetail.actorCredits.cast;

        if (this.$store.state.actorDetail.actorCredits.crew.length >= 15) {
          this.actorCredits.crew = this.$store.state.actorDetail.actorCredits.crew.slice(
            0,
            10
          );
          this.crewMore = true;
        } else
          this.actorCredits.crew = this.$store.state.actorDetail.actorCredits.crew;
      });
      // todo 모든 데이터와 함수를 스테이트로 옮길지 판단해서 수정
    },
    getInitImages() {
      this.$store.dispatch('actorDetail/getActorImages');
    },
    setCreditsCounter(type) {
      type === 'cast' ? this.castCounter++ : this.crewCounter++;
    },
    getCreditsMore(type) {
      this.setCreditsCounter(type);

      if (
        this.$store.state.actorDetail.actorCredits[`${type}`].length >=
        this[`${type}Counter`] * 15
      ) {
        this.actorCredits[
          `${type}`
        ] = this.$store.state.actorDetail.actorCredits[`${type}`].slice(
          0,
          this[`${type}Counter`] * 15
        );
      } else {
        this.actorCredits[
          `${type}`
        ] = this.$store.state.actorDetail.actorCredits[`${type}`];
        this[`${type}More`] = false;
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

#profile-biography {
  font-size: 1.6rem;
  line-height: 2.3rem;
}

#profile-biography.ellipsis {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  height: 6.9rem;
  overflow: hidden;
}

#filmography .profile-subtitle,
#photography .profile-subtitle {
  padding: 4rem 0 1.6rem 2.4rem;
}

#works {
  padding: 4.8rem 2.4rem 7.2rem 2.4rem;
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

/* tablet */
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

  #profile-biography {
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
    padding: 5.4rem 4.8rem 7.2rem 4.8rem;
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

  .wrapper-list {
    grid-template-columns: 9.4rem 1fr;
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: 0.025rem;
  }

  .wrapper-movie-slide {
    grid-column-gap: 2.4rem;
  }

  .wrapper-movie-slide a:first-child {
    margin-left: 4.8rem;
  }

  .wrapper-movie-slide a:last-child {
    margin-right: 4.8rem;
  }

  .wrapper-movie-slide img {
    height: 25.6rem;
  }
}
</style>
