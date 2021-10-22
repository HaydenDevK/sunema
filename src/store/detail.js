import { request, request2 } from './axios';

export default {
  namespaced: true,
  state: {
    mediaType: 'movie', // movie or tv
    // movieKeywords: [
    //   // 키워드
    //   {
    //     keyword_id: 18035,
    //     keyword_name: 'family',
    //   },
    //   {
    //     keyword_id: 3667,
    //     keyword_name: 'time',
    //   },
    // ],
    movieDetail:[],
    movieDetailRecommendation:[],
    movieVideo:[],
    movieImg:[],
    moviePoster: [],
    movieKeyword:[]
  },
  mutations: {
    SET_DETAIL_MOVIE(state, data) { 
      state.movieDetail = data;
    },
    SET_DETAIL_MOVIE_RECOMMENDATION(state, data) { 
      state.movieDetailRecommendation = data;
    },
    SET_DETAIL_MOVIE_VIDEO(state, data) { 
      //6.여기서 데이터 셋팅하고
      state.movieVideo = data;
    },
    SET_DETAIL_MOVIE_IMG(state, data){
      state.movieImg = data;
    },
    SET_DETAIL_MOVIE_POSTER(state, data){
      state.moviePoster = data;
    },
    SET_DETAIL_MOVIE_KEYWORD(state, data){
      state.movieKeyword = data;
    },
  },
  actions: {
    // async getMovieDetail({ state, commit }) {
    //   const result = await request (`/movie/${state.movieId}`);
    //   if (result.status === 200) {
    //     console.log(state);
    //     commit('SET_DETAIL_MOVIE', result.data);
    //   }
    // },
    async getMovieDetail({ commit }, movieId) {
      const result = await request ('/movie/' + movieId);
      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE', result.data);
      }
      // console.log(result);
    },
    async getMovieRecommendation({ commit}, movieId) {
      const result = await request(`/movie/` + movieId + `/recommendations`);

      //result.data.results -> [] 
      //[] -> filter 
      const newResult = result.data.results.filter(function(v, i){
        return i < 6
      });

      if (result.status === 200) {
        // console.log(result.data.results);
        commit('SET_DETAIL_MOVIE_RECOMMENDATION',newResult);
      }

      // console.log(result);
    },
    async getMovieVideo({ state , commit}, movieId) {
      const result = await request(`/movie/` + movieId + `/videos`);

      //result.data.results -> [] 
      //[] -> filter 
      // const videoResult = result.data.results.filter(function(v, i){
      //   return i < 6
      // });

      if (result.status === 200) {
        console.log(`/movie/${state.movieId}/videos`);
        //1. v-for 는 배열만 가능 
        //2. result.data는 뭐다? 객체 
        //3. 객체를 저장해서 반복하려고 하니까 에러 ㅇㅋ?
        //4. 그러면 배열이 되게 해야 되는데 뽑히는 자료에서 results: Array(12) 배열임 
        //5. 이 배열에 key가 들어가있음 
        // console.log(result.data.results);
        commit('SET_DETAIL_MOVIE_VIDEO', result.data.results);
      }
      // console.log(result);
    },
    async getMovieImg({ state , commit}, movieId) {
      const result = await request2(`/movie/` + movieId + `/images`);
      

      if (result.status === 200) {
        console.log(`/movie/${state.movieId}/images`);
        commit('SET_DETAIL_MOVIE_IMG', result.data.backdrops);
      }
      // console.log(result);
    },
    async getMoviePoster({ state , commit}, movieId) {
      const result = await request2(`/movie/` + movieId + `/images`);
      

      if (result.status === 200) {
        console.log(`/movie/${state.movieId}/images`);
        commit('SET_DETAIL_MOVIE_POSTER', result.data.posters);
      }
      console.log(result);
    },

    async getMovieKeyword({ state , commit}, movieId) {
      const result = await request(`/movie/` + movieId + `/keywords`);

      if (result.status === 200) {
        console.log(`/movie/${state.movieId}/keywords`);
        commit('SET_DETAIL_MOVIE_KEYWORD', result.data.keywords);
      }
      // console.log(result);
    },
  },
};
