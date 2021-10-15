import { request } from './axios';

export default {
  namespaced: true,
  state: {
    movieType: 'movie', // movie or tv
    movieId: 566525,
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
    movieDetail: [],
    movieDetailRecommendation: []
  },
  mutations: {
    SET_DETAIL_MOVIE(state, data) { 
      state.movieDetail = data;
    },
    SET_DETAIL_MOVIE_RECOMMENDATION(state, data) { 
      state.movieDetailRecommendation = data;
    },
  },
  actions: {
    async getMovieDetail({ state, commit }) {
      // const result = await request.get('/movie/566525');
      const result = await request (`/movie/${state.movieId}`);

      if (result.status === 200) {
        // console.log(result.data.title);
        commit('SET_DETAIL_MOVIE', result.data);
      }

      // console.log(result);
    },
    async getMovieRecommendation({ state , commit}) {
      const result = await request(`/movie/${state.movieId}/recommendations`);

      //result.data.results -> [] 
      //[] -> filter 
      const newResult = result.data.results.filter(function(v, i){
        return i < 6
      });

      if (result.status === 200) {
        console.log(result.data.results);
        commit('SET_DETAIL_MOVIE_RECOMMENDATION',newResult);
      }

      // console.log(result);
    }
  },
};
