<template>
  <section>
    <div class="title-box">
      <h2>{{ title }}</h2>
      <div class="streaming" v-if="streaming === 'T'">
        <p>스트리밍 ON</p>
        <input type="checkbox" id="str" checked />
        <label for="str"><p>선택</p></label>
      </div>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in movie" :key="item.id">
        <router-link :to="`/detail/${item.id}`">
          <img :src="getImage(item.poster_path)" />
          <p class="number" v-if="rank === 'T'">{{ index + 1 }}</p>
        </router-link>
      </swiper-slide>
    </swiper>
    <router-link :to="link">전체보기</router-link>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    title: String,
    movie: Array,
    streaming: String,
    rank: String,
    type: String,
    link: String
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
        freeMode: true,
        breakpoints: {
          1024: {
            slidesPerView: 4.55,
            spaceBetween: 24
          }
        }
      }
    };
  },
  methods: {
    getImage(poster_path) {
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    }
  }
};
</script>

<style scoped>
#container .contents {
  width: 100%;
  padding: 0 24px 61px;
}
#container .contents section {
  position: relative;
  width: 100%;
  margin-top: 25.5px;
}
#container .contents section:first-child {
  margin-top: 0;
}
#container .contents section h2 {
  display: block;
  font-size: 5.07vw;
  font-weight: 700;
  line-height: 6.28vw;
  color: #fff;
}
#container .contents section .title-box {
  display: flex;
  justify-content: left;
  align-items: center;
}
#container .contents section .title-box .streaming,
#container .contents section .title-box .tab-btn {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 11px;
}

#container .contents section .title-box .streaming p {
  padding: 5.5px 0;
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  color: #fff;
}
#container .contents section .title-box .streaming input[type='checkbox'] {
  display: none;
}
#container .contents section .title-box .streaming label {
  position: relative;
  display: block;
  width: 8.95vw;
  height: 3.38vw;
  border-radius: 1.69vw;
  background: #8187ad;
  margin-left: 10px;
  transition: 0.1s;
}
#container .contents section .title-box .streaming label p {
  text-indent: -9999px;
}
#container .contents section .title-box .streaming label::after {
  content: '';
  display: block;
  width: 5.26vw;
  height: 4.83vw;
  background: #fff;
  border-radius: 4.83vw;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.1s;
}
#container .contents section .title-box .streaming input[type='checkbox']:checked + label {
  background: #43ff8e;
}
#container .contents section .title-box .streaming input[type='checkbox']:checked + label::after {
  left: 3.86vw;
}

#container .contents section .swiper-container {
  margin-top: 16.5px;
  margin-right: -24px;
  padding-right: 24px;
}
#container .contents section .swiper-container .swiper-slide {
  font-size: 0;
}
#container .contetns section .swiper-container .swiper-slide > a {
  display: block;
}
#container .contents section .swiper-container .swiper-slide img {
  width: 100%;
  border-radius: 5px;
}
#container .contents section .swiper-container .swiper-slide .number {
  position: absolute;
  left: 5px;
  top: 0;
  font-size: 8.7vw;
  line-height: 10.39vw;
  color: #fff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
#container .contents section > a {
  display: block;
  position: absolute;
  right: 0;
  top: 5.5px;
  font-size: 2.9vw;
  line-height: 3.62vw;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
}

@media (min-width: 1024px) {
  #container .contents section {
    margin-top: 29px;
  }
  #container .contents section:first-child {
    margin-top: 29px;
  }
  #container .contents section h2 {
    font-size: 2.93vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming,
  #container .contents section .title-box .tab-btn {
    margin-left: 32px;
  }

  #container .contents section .title-box .streaming p {
    font-size: 2.34vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming label {
    width: 5.27vw;
    height: 2.17vw;
    border-radius: 2.44vw;
  }
  #container .contents section .title-box .streaming label::after {
    width: 3.1vw;
    height: 3.1vw;
    border-radius: 3.1vw;
  }
  #container .contents section .title-box .streaming input[type='checkbox']:checked + label::after {
    left: 2.2vw;
  }
  #container .contents section > .swiper-container {
    margin-top: 18px;
  }
  #container .contents section > .swiper-container .swiper-slide .number {
    left: 5.59px;
    top: -6px;
    font-size: 5.08vw;
    line-height: 6.05vw;
  }
  #container .contents section > a {
    top: 11px;
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
}
</style>
