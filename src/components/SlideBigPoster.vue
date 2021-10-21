<template>
    <section>
        <div class="title-box">
            <h2>{{ title }}</h2>
            <ul class="tab-btn">
                <li
                    @click="changeTodayContentType('movie')"
                    :class="{ active: todayContentType === 'movie' }"
                >
                    {{ tab1 }}
                </li>
                <li
                    @click="changeTodayContentType('tv')"
                    :class="{ active: todayContentType === 'tv' }"
                >
                    {{ tab2 }}
                </li>
            </ul>
        </div>
        <div class="tab-contents">
            <!-- tab1 -->
            <swiper 
              :class="{ active: todayContentType === 'movie' }"
              :options="swiperOption"
            >
              <swiper-slide v-for="item in movie" :key="item.id">
                <router-link :to="`/detail/${item.id}`">
                  <img :src="getImage(item.poster_path)" />
                </router-link>
              </swiper-slide>
            </swiper>
            <!-- // tab1 -->
            <!-- tab2 -->
            <swiper 
              :class="{ active: todayContentType === 'tv' }"
              :options="swiperOption"
            >
                <swiper-slide v-for="item in movie" :key="item.id">
                  <router-link :to="`/detail/${item.id}`">
                    <img :src="getImage(item.poster_path)" />
                  </router-link>
                </swiper-slide>
            </swiper>
            <!-- // tab2 -->
        </div>
        <router-link :to="rink">전체보기</router-link>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        props: {
            title: String,
            movie: Array,
            type: String,
            tab1: String,
            tab2: String,
            rink: String
        },
        components: {
            Swiper,
            SwiperSlide
        },
        data() { 
            return { 
                swiperOption: { 
                    slidesPerView: 1.69, 
                    spaceBetween: 16, 
                    freeMode: true,
                },
                todayContentType: 'movie',
            };
        },
        mounted(){
          console.log(['movie', this.movie]);
        },
        methods: {
          getImage(poster_path) {
            // console.log(poster_path);
            return `https://image.tmdb.org/t/p/w300${poster_path}`;
          },
          changeTodayContentType(type) {
            this.todayContentType = type;
            this.$store.commit('main/SET_MEDIA_TYPE', type);
            this.$store.dispatch('main/getTrendingContents');
          }
        }
    }
</script>

<style scoped>
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
#container .contents section .title-box .tab-btn {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 11px;
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
#container .contents section .tab-btn::after {
  content: '';
  display: block;
  clear: both;
}
#container .contents section .tab-btn li {
  position: relative;
  float: left;
  display: block;
  font-size: 4.35vw;
  font-weight: 700;
  line-height: 6.28vw;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 10px;
  margin-left: 10px;
}
#container .contents section .tab-btn li::after {
  content: '';
  display: block;
  width: 1px;
  height: 4.83vw;
  background: #fff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container .contents section .tab-btn li:first-child {
  padding-left: 0;
  margin-left: 0;
}
#container .contents section .tab-btn li:first-child::after {
  display: none;
}
#container .contents section .tab-btn li.active {
  color: #fff;
}
#container .contents section .tab-contents {
  margin-top: 16.5px;
}
#container .contents section .tab-contents .swiper-container {
  display: none;
}
#container .contents section .tab-contents .swiper-container.active {
  display: block;
}
#container .contents section .tab-contents .swiper-container .swiper-slide {
  width: 80.8%;
}
#container .contents .trending .tab-contents .swiper-container .swiper-slide {
  width: 56.5%;
}
#container .contents .trending .tab-contents .swiper-container .swiper-slide img {
  width: 100%;
  border-radius: 5px;
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
  #container
    .contents
    section
    .title-box
    .streaming
    input[type='checkbox']:checked
    + label::after {
    left: 2.2vw;
  }
  #container .contents section > ul {
    margin-top: 18px;
  }
  #container .contents section > ul li {
    width: 19.06vw;
    margin-left: 24px;
  }
  #container .contents section > ul li .number {
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
  #container .contents section .tab-btn li {
    font-size: 2.34vw;
    font-weight: 500;
    line-height: 3.42vw;
  }
  #container .contents section .tab-btn li::after {
    height: 1.95vw;
  }
  #container .contents section .tab-contents {
    margin-top: 18px;
  }
  #container .contents section .tab-contents ul li {
    width: 35.35vw;
  }
}
</style>