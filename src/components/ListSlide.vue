<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in Media" :key="item.credit_id">
      <a @click="handleFunc(item.id)">
        <img :src="getImage(item[`${Path}`])" alt="" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    Media: [Object, Array],
    Path: String,
    Type: String
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 16,
        slidesPerView: 2.2,
        freeMode: true,
        breakpoints: {
          414: {
            slidesPerView: 2.6219
          },
          1024: {
            slidesPerView: 5.381,
            spaceBetween: 24
          }
        }
      }
    };
  },
  methods: {
    getImage(path) {
      return path
        ? `https://image.tmdb.org/t/p/w300${path}`
        : require('../assets/images/global/no-image.png');
    },
    handleFunc(id) {
      this.Type === 'filmography'
        ? this.$router.push({ path: `/detail/${id}` })
        : ''; // todo 크게 보기?
    }
  }
};
</script>

<style scoped>
.swiper {
  margin-left: 2.4rem;
}

.swiper-slide:last-child {
  margin-right: 2.4rem;
}

.swiper-slide a {
  font-size: 0;
  display: block;
  cursor: pointer;
}

.swiper-slide img {
  border-radius: 0.5rem;
  width: 100%;
}

/* tablet */
@media screen and (min-width: 1024px) {
  .swiper {
    margin-left: 4.8rem;
  }
}
</style>
