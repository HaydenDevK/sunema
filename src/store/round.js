import { request } from './axios';

export default {
  namespaced: true,
  state: {
    movieRound: []
  },
  mutations: {
    SET_MOVIE_LIST(state, data) {
      state.movieRound = data;
    }
  },
  actions: {
    //영화 리스트 정보
    async getMovieList({ commit }) {
      const result = await request(`/tv/93405/season/1`);
      console.log('round/getMovieList');

      //api 호출 성공
      if (result.status === 200) {
        console.log(result.data.episodes); //담기는 데이터 확인해보기
        commit('SET_MOVIE_LIST', result.data.episodes);
      }
    }
  }
};
