<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in Array" :key="item.id">
      <router-link to="">
        <img :src="getImage(item.poster_path)" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    Array: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.33,
        spaceBetween: 16,
        freeMode: true
      }
    };
  },
  mounted() {
    console.log(this.Array);
  },
  methods: {
    getImage(poster_path) {
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    }
  }
};
</script>

<style scoped>
/* .swiper-slide {
  font-size: 0;
}

.swiper-slide > a {
  display: block;
  font-size: 0;
}

.swiper-slide a:first-child {
  margin-left: 2.4rem;
}

.swiper-slide a:last-child {
  margin-right: 2.4rem;
}

.swiper-slide img {
  height: 25.6rem;
} */
</style>
