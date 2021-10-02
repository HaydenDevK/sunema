import { request } from './axios';

export default {
  namespaced: true,
  state: {
    keywordMovie: [],
  },
  mutations: {
    SET_KEYWORD_MOVIE(state, data) {
      state.keywordMovie = data.results;
      console.log(state.keywordMovie);
    },
  },
  actions: {
    testCall() {
      //  this.$store.dispatch("keywordSearch/testCall")
      console.log(request);
      console.log('testcall');
    },
    async getKeywordMovie({ commit }, keyword_id) {
      console.log(keyword_id);
      const result = await request(`/keyword/${keyword_id}/movies`);

      // api 호출 성공 시
      if (result.status === 200) {
        console.log(result.data);
        commit('SET_KEYWORD_MOVIE', result.data);
      }
    },
  },
};
