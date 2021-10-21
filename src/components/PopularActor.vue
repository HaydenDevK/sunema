<template>
    <section>
        <h2>{{ title }}</h2>
        <ul class="actor-list">
            <li v-for="item in actor" :key="item.id">
            <figure>
                <router-link :to="`/actordetail/${item.id}`">
                    <img :src="getImage(item.profile_path)" alt="" />
                    <figcaption>
                    <strong>{{ item.name }}</strong>
                    <p v-if="item.known_for[0].name !== undefined">
                        {{ item.known_for[0].name + ',' }}
                    </p>
                    </figcaption>
                </router-link>
            </figure>
            </li>
        </ul>
        <router-link to="/actor">전체보기</router-link>
    </section>
</template>

<script>
    export default {
        props: {
            title: String,
            actor: Array,
            type: String
        },
        mounted() {
            this.getInitActor();
        },
        methods: {
            getInitActor() {
                //api사용하는 코드
                this.$store.dispatch('actor/getPopularActor', this.$route.params.idx);
            },
            getImage(profile_path) {
                // console.log(profile_path)
                return `https://image.tmdb.org/t/p/w300${profile_path}`;
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
#container .contents section > ul {
  margin-top: 16.5px;
  display: flex;
  justify-content: left;
}
#container .contents section > ul li {
  position: relative;
  width: 40.4%;
  margin-left: 16px;
  font-size: 0;
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
#container .contents .popular-actor .actor-list {
  display: block;
  width: 100%;
}
#container .contents .popular-actor .actor-list li {
  width: 100%;
  margin-left: 0;
  margin-top: 16px;
}
#container .contents .popular-actor .actor-list li:first-child {
  margin-top: 0;
}
#container .contents .popular-actor .actor-list li figure {
  width: 100%;
  height: 78px;
  overflow: hidden;
  border-radius: 5px;
}
#container .contents .popular-actor .actor-list li figure a {
    display:flex;
}
#container .contents .popular-actor .actor-list li figure img {
  width: 18.841vw;
  /* border-radius: 5px 0 0 5px / 5px 0 0 5px; */
}
#container .contents .popular-actor .actor-list li figure figcaption {
  width: calc(100% - 18.841vw);
  background: #212634;
  /* border-radius: 0 5px 5px 0 / 0 5px 5px 0; */
  color: #fff;
  padding: 3.38vw 2.05vw 1.76vw;
}
#container .contents .popular-actor .actor-list li figure figcaption strong {
  font-size: 4.35vw;
  font-weight: 700;
  line-height: 5.56vw;
  letter-spacing: -0.02em;
}
#container .contents .popular-actor .actor-list li figure figcaption p {
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  padding: 8px 0 0 2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  #container .contents section > a {
    top: 11px;
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
  #container .contents .popular-actor .actor-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #container .contents .popular-actor .actor-list li {
    width: calc(50% - 10px);
    margin-top: 24px;
  }
  #container .contents .popular-actor .actor-list li:first-child,
  #container .contents .popular-actor .actor-list li:nth-child(2) {
    margin-top: 0;
  }
  #container .contents .popular-actor .actor-list li figure img {
    width: 10.65vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption {
    width: calc(100% - 10.65vw);
    padding: 19.56px 29.42px 23.12px;
  }
  #container .contents .popular-actor .actor-list li figure figcaption strong {
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption p {
    font-size: 1.76vw;
    line-height: 2.25vw;
    font-weight: 700;
    padding: 17.32px 0 0 2px;
  }
}
</style>