import Vue from 'vue';
import Vuex from 'vuex';
import main from './main';
import keywordSearch from './keywordSearch';
import actorDetail from './actorDetail';
import round from './round';
import detail from './detail';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    keywordSearch,
    actorDetail,
    round,
    detail
  },
});
