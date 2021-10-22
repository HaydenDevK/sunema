<template>
    <section>
        <h2>{{ title }}</h2>
        <ul class="actor-list">
          <li v-for="item in getActor()" :key="item.id">
            <figure>
                <router-link :to="`/actordetail/${item.id}`">
                    <img :src="getImage(item.profile_path)" alt="" />
                    <figcaption>
                    <strong>{{ item.name }}</strong>
                    <div class="film-box">
                      <template v-for="(item2, index) in item.known_for">
                        <span v-if="item2.name !== undefined" :key="index">
                            {{ item2.name + ',' }}
                        </span>
                        <span v-if="item2.title !== undefined" :key="index">
                            {{ item2.title + ',' }}
                        </span>
                      </template>
                      <!-- <span v-if="item.known_for[1].name !== undefined">
                        {{ item.known_for[1].name + ',' }}
                      </span> -->
                    </div>
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
            console.log()
        },
        methods: {
            getInitActor() {
                //api사용하는 코드
                this.$store.dispatch('actor/getPopularActor', this.$route.params.idx);
            },
            getImage(profile_path) {
                // console.log(profile_path)
                return `https://image.tmdb.org/t/p/w300${profile_path}`;
            },
            getActor() {
              let actor = this.actor;
              if (screen.width < 1024) {
                actor = actor.slice(0, 3);
              } else {
                actor = actor.slice(0, 6);
              }
              return actor;
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
  height: 18.84vw;
  overflow: hidden;
  border-radius: 5px;
}
#container .contents .popular-actor .actor-list li figure a {
    display:flex;
    width: 100%;
    height:26.33vw;
}
#container .contents .popular-actor .actor-list li figure img {
  width: 18.841vw;
}
#container .contents .popular-actor .actor-list li figure figcaption {
  width: calc(100% - 18.841vw);
  height:100%;
  background: #212634;
  color: #fff;
  padding: 3.38vw 2.05vw 4.35vw;
}
#container .contents .popular-actor .actor-list li figure figcaption strong {
  font-size: 4.35vw;
  font-weight: 700;
  line-height: 5.56vw;
  letter-spacing: -0.02em;
}
#container .contents .popular-actor .actor-list li figure figcaption .film-box {
  width:100%;
  height:5.56vw;
  overflow: hidden;
  padding-top:8px;
  text-overflow:ellipsis;
  white-space:nowrap;
}
#container .contents .popular-actor .actor-list li figure figcaption .film-box span {
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
}
#container .contents .popular-actor .actor-list li figure figcaption .film-box span:first-child {
  margin-left:2px;
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
  #container .contents .popular-actor .actor-list li figure {
    height:10.64vw;
  }
  #container .contents .popular-actor .actor-list li figure a {
    width:100%;
    height:14.65vw;
  }
  #container .contents .popular-actor .actor-list li figure img {
    width: 10.65vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption {
    width: calc(100% - 10.65vw);
    height:100%;
    padding: 1.91vw 2.87vw 2.26vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption strong {
    font-size: 2.05vw;
    line-height: 2.54vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption .film-box {
    padding-top:17.32px;
    height:calc(100% - 2.54vw);
  }
  #container .contents .popular-actor .actor-list li figure figcaption .film-box span {
    font-size: 1.76vw;
    line-height: 2.25vw;
    font-weight: 700;
  }
  #container .contents .popular-actor .actor-list li figure figcaption .film-box span:first-child {
    margin-left:2px;
  }
}
</style>