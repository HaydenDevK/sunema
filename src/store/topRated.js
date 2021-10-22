import { request } from './axios';

export default {
  namespaced: true,
  state: {
    topRated: [],
    mediaType: 'movie',
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_MEDIA_TYPE(state, mediaType) {
      state.mediaType = mediaType;
    },
    SET_TOP_RATED(state, result) {
      state.topRated = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_TOP_RATED_MORE(state, result) {
      state.topRated = state.topRated.concat(result.results);
    }
  },
  actions: {
    async getTopRated({ state, commit }) {
      await commit('INIT_PAGE_NOW');

      const result = await request(`${state.mediaType}/top_rated`, {
        params: {
          page: state.pageNow
        }
      });

      if (result.status === 200) {
        commit('SET_TOP_RATED', result.data);
      }
    },
    async getTopRatedMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`${state.mediaType}/top_rated`, {
        params: {
          page: state.pageNow
        }
      });

      if (result.status === 200) {
        commit('SET_TOP_RATED_MORE', result.data);
      }
    }
  }
};
