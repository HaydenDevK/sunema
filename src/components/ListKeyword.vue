<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="item in $store.state.keywordSearch.mediaKeywords"
      :key="item.id"
    >
      <button
        :class="{ active: item.id === keywordId }"
        @click="getNewMedia(item.id)"
      >
        #{{ item.name }}
      </button>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    // mediaKeywords: Array // todo 재사용성 개선
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      keywordId: 0,
      swiperOption: {
        spaceBetween: 8,
        slidesPerView: 'auto',
        freeMode: true,
        breakpoints: {
          1024: {
            spaceBetween: 24
          }
        }
      }
    };
  },
  async mounted() {
    await this.$store
      .dispatch('keywordSearch/getMediaKeywords')
      .then(() => {
        this.setKeywordId();
      })
      .then(() => {
        this.getInitMedia();
      });
  },
  methods: {
    setKeywordId(newKeywordId) {
      newKeywordId
        ? (this.keywordId = Number(newKeywordId))
        : (this.keywordId = Number(this.$route.params.keywordId));
      this.$store.commit('keywordSearch/SET_KEYWORD_ID', this.keywordId);
    },
    getInitMedia() {
      this.$store.dispatch('keywordSearch/getKeywordMedia');
      // todo 스토어 정보가 바뀌면 템플릿에 바인딩도 다시 되는 이유 이해
    },
    getNewMedia(newKeywordId) {
      this.setKeywordId(newKeywordId);
      this.getInitMedia();
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

/* mobile */
.swiper {
  padding-left: 2.4rem;
  /* padding-bottom: 1.2rem; */
}

.swiper-slide {
  width: auto;
  padding-bottom: 1.2rem;
}

.swiper-slide button {
  min-width: fit-content;
  text-align: center;
  padding: 0.8rem 1.6rem;
  border: 0.075rem solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 2.1rem;
  background-color: #212634;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: -0.02em;
}

.swiper-slide:last-of-type {
  margin-right: 2.4rem;
}

.swiper-slide button.active {
  background-color: white;
  color: #13131b;
}

/* tablet */
@media (min-width: 1024px) {
  .swiper {
    padding-left: 4.8rem;
  }

  .swiper-slide {
    padding-bottom: 1.8rem;
  }

  .swiper-slide button {
    font-size: 2.1rem;
    line-height: 2.6rem;
    letter-spacing: 0.025rem;
    padding: 1.6rem 3.2rem;
    border-radius: 3rem;
  }
}
</style>
