import { request } from './axios';

export default {
  namespaced: true,
  state: {
    movieRound: [],
  },
  mutations: {
    SET_MOVIE_LIST(state, data) {
      state.movieRound = data;
    },
  },
  actions: {
    testCall() {
      //  this.$store.dispatch("round/testCall")
      // console.log(request);
      console.log('testcall');
    },
    //영화 리스트 정보
    async getMovieList({ commit }, movieId) {
      const result = await request(`/movie/${movieId}/lists`);
      console.log('round/getMovieList');
      // const result = await axios.get(
      //   `https://api.themoviedb.org/3/movie/${movieId}/lists?api_key=4233610b37f4dacd6081125ab31631a5&language=ko-KR`
      // );
      //api 호출 성공
      if (result.status === 200) {
        console.log(result.data.results);
        commit('SET_MOVIE_LIST', result.data.results);
      }
    },
  },
};
