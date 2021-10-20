import { request } from './axios';

export default {
  namespaced: true,
  state: {
    popular: [],
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
    SET_POPULAR(state, result) {
      state.popular = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_POPULAR_MORE(state, result) {
      state.popular = state.popular.concat(result.results);
    }
  },
  actions: {
    async getPopular({ state, commit }) {
      await commit('INIT_PAGE_NOW');

      const result = await request(`/${state.mediaType}/popular`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_POPULAR', result.data);
      }
    },
    async getPopularMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`/${state.mediaType}/popular`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_POPULAR_MORE', result.data);
      }
    }
  }
};
