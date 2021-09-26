import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/detail/:idx',
    name: 'Detail',
    component: () =>
      import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  },
  {
    path: '/round/:idx', // 전체 회차
    name: 'Round',
    component: () =>
      import(/* webpackChunkName: "round" */ '../views/round.vue')
  },
  {
    path: '/commingsoon', // 개봉 예정
    name: 'CommingSoon',
    component: () =>
      import(/* webpackChunkName: "commingsoon" */ '../views/commingSoon.vue')
  },
  {
    path: '/nowmovie', // 현재 상영중
    name: 'Now',
    component: () => import(/* webpackChunkName: "now" */ '../views/now.vue')
  },
  {
    path: '/popular', // 인기 영화
    name: 'Popular',
    component: () =>
      import(/* webpackChunkName: "popular" */ '../views/popular.vue')
  },
  {
    path: '/keywordsearch', // 키워드 검색
    name: 'KeywordSearch',
    component: () =>
      import(
        /* webpackChunkName: "keywordsearch" */ '../views/keywordSearch.vue'
      )
  },
  {
    path: '/actor', // 인기배우
    name: 'Actor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "actordetail" */ '../views/actor.vue')
  },
  {
    path: '/actordetail', // 인기배우  상세
    name: 'ActorDetail',
    component: () =>
      import(/* webpackChunkName: "actordetail" */ '../views/actorDetail.vue')
  },
  {
    path: '/search', // 인기배우  상세
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/search.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
