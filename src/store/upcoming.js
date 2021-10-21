import { request } from './axios';

export default {
  namespaced: true,
  state: {
    upcoming: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_UPCOMING(state, result) {
      state.upcoming = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_UPCOMING_MORE(state, result) {
      const newUpcoming = state.upcoming.concat(result.results);
      state.upcoming = newUpcoming;
    }
  },
  actions: {
    async getUpcoming({ state, commit }) {
      await commit('INIT_PAGE_NOW');

      const result = await request(`/movie/upcoming`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_UPCOMING', result.data);
      }
    },
    async getUpcomingMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`/movie/upcoming`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_UPCOMING_MORE', result.data);
      }
    }
  }
};
