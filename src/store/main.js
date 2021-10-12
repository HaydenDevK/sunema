import { request } from './axios';

export default {
  namespaced: true,
  state: {
    popularMovie:[]
  },
  mutations: {
    SET_POPULAR_MOVIE(state, data){
      state.popularMovie = data;
    }
  },
  actions: {
    // testCall() {
      // this.$store.dispatch("main/testCall");
      // console.log(request);
      // console.log('testcall');
    // },
    async getPopularMovie({ commit }) {
      const result = await request('movie/popular');
      console.log(result);

      if(result.status === 200) {
        console.log(result.data.results);
        commit('SET_POPULAR_MOVIE', result.data.results);
      }
    }
  },
};
