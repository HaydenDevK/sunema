import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4ae7e3c1afba212f2a37c1e33792869c',
    language: 'ko-KR',
  },
});

export default {
  namespaced: true,
  state: {
    detailMovie: []
  },
  mutations: {
    SET_DETAIL_MOVIE(state, data){
      state.detailMovie = data;
    }
  },
  actions: {
    async getMovieDetail({ commit }){
      const result = await axios.get(
        'https://api.themoviedb.org/3/movie/566525?api_key=4ae7e3c1afba212f2a37c1e33792869c&language=ko-kr'
      );

      if(result.status === 200){
        // console.log(result.data.title);
        commit("SET_DETAIL_MOVIE", result.data.title);
      }

      console.log(result);
      
    },
    testCall() {
      console.log(request);
    },
  }
};