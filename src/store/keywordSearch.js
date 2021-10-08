import { request } from './axios';

export default {
  namespaced: true,
  state: {
    keywordId: 0,
    keywordMovie: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_KEYWORD_ID(state, keywordId) {
      state.keywordId = keywordId;
    },
    SET_KEYWORD_MOVIE(state, result) {
      state.keywordMovie = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGENUM_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_KEYWORD_MOVIE_NEXT(state, result) {
      const newKeywordMovie = state.keywordMovie.concat(result.results);
      state.keywordMovie = newKeywordMovie;
    }
  },
  actions: {
    async getKeywordMovie({ state, commit }) {
      await commit('SET_KEYWORD_ID', state.keywordId);
      await commit('INIT_PAGE_NOW'); // todo await 해야하는지 이해

      const result = await request(`/keyword/${state.keywordId}/movies`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MOVIE', result.data);
      }
    },
    async getKeywordMovieMore({ state, commit }) {
      commit('SET_PAGENUM_NEXT');
      const result = await request(`/keyword/${state.keywordId}/movies`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MOVIE_NEXT', result.data);
      }
    }
  }
};
