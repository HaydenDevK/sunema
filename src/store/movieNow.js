import { request } from './axios';

export default {
  namespaced: true,
  state: {
    movieNow: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_MOVIE_NOW(state, result) {
      state.movieNow = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_MOVIE_NOW_MORE(state, result) {
      const newMovieNow = state.movieNow.concat(result.results);
      state.movieNow = newMovieNow;
    }
  },
  actions: {
    async getMovieNow({ state, commit }) {
      await commit('INIT_PAGE_NOW');

      const result = await request(`/movie/now_playing`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_NOW', result.data);
      }
    },
    async getMovieNowMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');

      const result = await request(`/movie/now_playing`, {
        params: {
          page: state.pageNow
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_NOW_MORE', result.data);
      }
    }
  }
};
