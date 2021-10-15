<template>
    <section>
        <div class="title-box">
            <h2>{{ title }}</h2>
        </div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in movie" :key="item.id">
                <router-link :to="`/detail/${item.id}`">
                    <iframe
                        :src="getYoutube(item)"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </router-link>
            </swiper-slide>
        </swiper>
        <router-link to="">전체보기</router-link>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        props: {
            title: String,
            movie: Array,
            type: String
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1.41,
                    spaceBetween: 16,
                    freeMode: true
                }
            }
        },
        methods: {
            getYoutube(key) {
                console.log(key.id); 
                this.$store
                .dispatch('main/getVideoList', key.id)
                .then(() => {
                    this.videoList = this.$store.state.main.videoList;
                    console.log(this.videoList);

                    return 'https://www.youtube.com/embed/' + this.videoList.videos.results[0].key;
                });

            }
        }
    }
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
#container .contents .upcoming .swiper-container .swiper-slide {
    width: 69.67%;
}
#container .contents .upcoming .swiper-container .swiper-slide a {
    display: block;
    position: relative;
    padding-top: 56%;
    width: 100%;
    height: 0;
}
#container .contents .upcoming .swiper-container .swiper-slide iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    #container .contents section .title-box .tab-btn {
        margin-left: 32px;
    }
    #container .contents section > .swiper-container {
        margin-top: 18px;
    }
    #container .contents section > .swiper-container .swiper-slide {
        width: 19.06vw;
        margin-left: 24px;
    }
    #container .contents section > a {
        top: 11px;
        font-size: 2.05vw;
        line-height: 2.54vw;
    }
    #container .contents .upcoming .swiper-container .swiper-slide {
        width: 41.6vw;
    }
}
</style>