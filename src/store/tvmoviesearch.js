import {request} from './axios';
export default {
  namespaced: true,
  state: () => {
    return {
      movieList: []
    };
  },
  mutations: {
    SET_MOVIE(state, payload) {
      state.movieList = payload;
      console.log(payload);
    }
  },
  actions: {
    async searchMovie({commit}, payload) {
      const result = await request.get('/search/' + payload.tab, {
        params: {
          query: payload.keyword
        }
      });
      commit('SET_MOVIE', result.data.results);
    }
  }
};
