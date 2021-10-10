import { request } from './axios';

export default {
  namespaced: true,
  state: {
    topRated: [],
    contentsType: 'movie',
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_CONTENTS_TYPE(state, result) {
      state.contentsType = result;
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
    async getTopRated({ state, commit }, contentsType) {
      await commit('INIT_PAGE_NOW'); // todo await 해야하는지 이해

      await commit('SET_CONTENTS_TYPE', contentsType);

      console.log(contentsType);
      if (state.contentsType === 'movie') {
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
        const result = await request(`/tv/airing_today`, {
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

      if (state.contentsType === 'movie') {
        const result = await request(`/movie//top_rated`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED', result.data);
        }
      } else {
        const result = await request(`/tv/airing_today`, {
          params: {
            page: state.pageNow
          }
        });
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_TOP_RATED', result.data);
        }
      }
    }
  }
};
