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
      // console.log(result);
      state.keywordMovie = result.results;
      state.pageTotal = result.total_pages;
      // console.log(state.pageTotal);
      // console.log(state.keywordMovie);
    },
    SET_PAGENUM_NEXT(state) {
      // console.log('SET_PAGENUM_NEXT');
      if (state.pageTotal >= state.pageNow) {
        // console.log('if문 통과');
        state.pageNow++;
        // console.log(state.pageNow);
      }
    },
    SET_KEYWORD_MOVIE_NEXT(state, result) {
      // console.log('SET_KEYWORD_MOVIE_NEXT');
      // console.log(result);
      const newKeywordMovie = state.keywordMovie.concat(result.results);
      state.keywordMovie = newKeywordMovie;
    }
  },
  actions: {
    async getKeywordMovie({ state, commit }) {
      await commit('SET_KEYWORD_ID', state.keywordId);
      await commit('INIT_PAGE_NOW'); // Q. await 해야하는지

      const result = await request(`/keyword/${state.keywordId}/movies`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        // console.log(result.data);
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
        // console.log(result.data);
        commit('SET_KEYWORD_MOVIE_NEXT', result.data);
      }
    }
  }
};
