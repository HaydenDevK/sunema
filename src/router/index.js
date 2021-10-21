import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    // NoTopBottomLayout 적용
    meta: { layout: 'NoTopBottomLayout' },
  },
  {
    path: '/detail/:idx',
    name: 'Detail',
    component: () =>
      import(/* webpackChunkName: "detail" */ '../views/detail.vue'),
  },
  {
    path: '/round/:idx', // 전체 회차
    name: 'Round',
    component: () =>
      import(/* webpackChunkName: "round" */ '../views/round.vue'),
  },
  {
    path: '/upcoming', // 개봉 예정 (선혜)
    name: 'Upcoming',
    component: () =>
      import(/* webpackChunkName: "upcoming" */ '../views/upcoming.vue')
  },
  {
    path: '/movienow', // 현재 상영중 (선혜)
    name: 'MovieNow',
    component: () =>
      import(/* webpackChunkName: "movienow" */ '../views/movieNow.vue')
  },
  {
    path: '/popular', // 인기 콘텐츠
    name: 'Popular',
    component: () =>
      import(/* webpackChunkName: "popular" */ '../views/popular.vue'),
  },
  {
    path: '/keywordsearch/:keywordId', // 키워드 검색 (선혜)
    name: 'KeywordSearch',
    component: () =>
      import(
        /* webpackChunkName: "keywordsearch" */ '../views/keywordSearch.vue'
      ),
  },
  {
    path: '/actor', // 인기배우
    name: 'Actor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "actordetail" */ '../views/actor.vue'),
  },
  {
    path: '/actordetail/:personId', // 인기배우 상세
    name: 'ActorDetail',
    component: () =>
      import(/* webpackChunkName: "actordetail" */ '../views/actorDetail.vue'),
  },
  {
    path: '/search', // 검색
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/search.vue'),
  },
  {
    path: '/tvtoday', // 오늘 방영할 티비 프로그램 (선혜)
    name: 'TvToday',
    component: () =>
      import(/* webpackChunkName: "tvtoday" */ '../views/tvToday.vue'),
  },
  {
    path: '/tvNow', // 티비 방영중 (선혜)
    name: 'TvNow',
    component: () =>
      import(/* webpackChunkName: "tvnow" */ '../views/tvNow.vue'),
  },
  {
    path: '/topRated', // 높은 평점 (선혜)
    name: 'TopRated',
    component: () =>
      import(/* webpackChunkName: "toprated" */ '../views/topRated.vue'),
  },
  {
    path: '/trending', // 지금 뜨는 컨텐츠 (선혜)
    name: 'Trending',
    component: () =>
      import(/* webpackChunkName: "toprated" */ '../views/trending.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
