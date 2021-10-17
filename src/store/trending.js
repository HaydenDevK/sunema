import { request } from './axios';

export default {
  namespaced: true,
  state: {
    trending: [],
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
    SET_TRENDING(state, result) {
      state.trending = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_TRENDING_MORE(state, result) {
      const newTrending = state.trending.concat(result.results);
      state.trending = newTrending;
    }
  },
  actions: {
    async getTrending({ state, commit }) {
      await commit('INIT_PAGE_NOW');

      const result = await request(`/trending/${state.mediaType}/day`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TRENDING', result.data);
      }
    },
    async getTrendingMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`/trending/${state.mediaType}/day`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TRENDING_MORE', result.data);
      }
    }
  }
};
