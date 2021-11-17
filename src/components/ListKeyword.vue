<template>
  <swiper
    v-if="$store.state.keywordSearch.mediaKeywords.length > 0"
    class="swiper"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="item in $store.state.keywordSearch.mediaKeywords"
      :key="item.id"
    >
      <button
        :class="{ active: item.id === keywordId }"
        @click="handleFunc(item.id)"
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
    View: String
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      mediaId: 0,
      keywordId: 0,
      swiperOption: {
        spaceBetween: 8,
        slidesPerView: 'auto',
        freeMode: true,
        slideToClickedSlide: true, // todo 가끔 안먹는 버그 해결
        breakpoints: {
          1024: {
            spaceBetween: 24
          }
        }
      }
    };
  },
  async mounted() {
    this.mediaId = Number(this.$route.params.idx);
    await this.$store.commit('keywordSearch/SET_MEDIA_ID', this.mediaId);
    await this.$store.dispatch('keywordSearch/getMediaKeywords');
    // todo await 필요한지?

    // todo 중첩문 함수형으로 축약
    if (this.View === 'keywordSearch') {
      if (this.$route.params.keyword) {
        this.setKeywordId(this.$route.params.keyword); // Number로 형변환 안해도되네
      } else if (this.$store.state.keywordSearch.mediaKeywords.length !== 0) {
        this.setKeywordId(this.$store.state.keywordSearch.mediaKeywords[0].id);
      }
      this.getInitMedia();
    }
  },
  methods: {
    setKeywordId(keywordId) {
      this.keywordId = Number(keywordId);
      this.$store.commit('keywordSearch/SET_KEYWORD_ID', this.keywordId);
    },
    getInitMedia() {
      this.$store.dispatch('keywordSearch/getKeywordMedia');

    },
    handleFunc(keywordId) {
      if (this.View === 'keywordSearch') {
        this.setKeywordId(keywordId);
        this.getInitMedia();
      } else
        this.$router.push({
          name: 'KeywordSearch',
          params: { idx: this.mediaId, keyword: keywordId }
        });
    }
  }
};
</script>

<style scoped>
@import '../assets/css/sophie.css';

/* mobile */
.swiper-slide {
  width: auto;
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
  opacity: 0.5;
  cursor: pointer;
}

.swiper-slide:last-of-type {
  margin-right: 2.4rem;
}

.swiper-slide button.active {
  background-color: white;
  color: #13131b;
  opacity: 1;
}

/* tablet */
@media (min-width: 1024px) {
  .swiper-slide button {
    font-size: 2.1rem;
    line-height: 2.6rem;
    letter-spacing: 0.025rem;
    padding: 1.6rem 3.2rem;
    border-radius: 3rem;
  }
}
</style>
