import { request } from './axios';

export default {
  namespaced: true,
  state: {
    tvNow: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_TV_NOW(state, result) {
      state.tvNow = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_TV_NOW_MORE(state, result) {
      const newTvNow = state.tvNow.concat(result.results);
      state.tvNow = newTvNow;
    }
  },
  actions: {
    async getTvNow({ state, commit }) {
      await commit('INIT_PAGE_NOW'); // todo await 해야하는지 이해

      const result = await request(`/tv/on_the_air`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_NOW', result.data);
      }
    },
    async getTvNowMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`/tv/on_the_air`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_NOW_MORE', result.data);
      }
    }
  }
};
