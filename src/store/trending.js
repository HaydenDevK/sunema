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
      const newTopRated = state.topRated.concat(result.results);
      state.topRated = newTopRated;
    }
  },
  actions: {
    async getTopRated({ state, commit }) {
      await commit('INIT_PAGE_NOW'); // todo await 해야하는지 이해

      if (state.mediaType === 'movie') {
        const result = await request(`/movie/top_rated`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED', result.data);
        }
      } else {
        const result = await request(`/trending/{media_type}/{time_window}`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED', result.data);
        }
      }
    },
    async getTopRatedMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      if (state.mediaType === 'movie') {
        const result = await request(`/movie/top_rated`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED_MORE', result.data);
        }
      } else {
        const result = await request(`/tv/airing_today`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED_MORE', result.data);
        }
      }
    }
  }
};
