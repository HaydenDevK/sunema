import Vue from 'vue';
import Vuex from 'vuex';
import main from './main';
import keywordSearch from './keywordSearch';
import actorDetail from './actorDetail';
import round from './round';
import detail from './detail';
import keyword from './keyword';
import actor from './actor';
import tvToday from './tvToday';
import tvNow from './tvNow';
import topRated from './topRated';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    keywordSearch,
    actorDetail,
    round,
    detail,
    keyword,
    actor,
    tvToday,
    tvNow,
    topRated
  }
});
