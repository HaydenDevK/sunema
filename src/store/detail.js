import { request } from './axios';

export default {
  namespaced: true,
  state: {
    movieType: 'movie', // movie or tv
    movieKeywords: [
      // 키워드
      {
        keyword_id: 18035,
        keyword_name: 'family',
      },
      {
        keyword_id: 3667,
        keyword_name: 'time',
      },
    ],
    detailMovie: [],
  },
  mutations: {
    SET_DETAIL_MOVIE(state, data) {
      state.detailMovie = data;
    },
  },
  actions: {
    async getMovieDetail({ commit }) {
      const result = await request.get('/movie/566525');

      if (result.status === 200) {
        // console.log(result.data.title);
        commit('SET_DETAIL_MOVIE', result.data.title);
      }

      console.log(result);
    }
  },
};
