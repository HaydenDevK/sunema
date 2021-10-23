import {request, request2} from './axios';

export default {
  namespaced: true,
  state: {
    mediaType: 'movie', // movie or tv
    movieDetail: [],
    movieDetailRecommendation: [],
    movieVideo: [],
    movieImg: [],
    moviePoster: [],
    movieKeyword: [],
    loading: false
  },
  mutations: {
    SET_MEDIA(state, data) {
      state.mediaType = data;
    },
    SET_DETAIL_MOVIE(state, data) {
      state.movieDetail = data;
      state.loading = true;
    },
    SET_DETAIL_MOVIE_RECOMMENDATION(state, data) {
      state.movieDetailRecommendation = data;
    },
    SET_DETAIL_MOVIE_VIDEO(state, data) {
      //6.여기서 데이터 셋팅하고
      state.movieVideo = data;
    },
    SET_DETAIL_MOVIE_IMG(state, data) {
      state.movieImg = data;
    },
    SET_DETAIL_MOVIE_POSTER(state, data) {
      state.moviePoster = data;
    },
    SET_DETAIL_MOVIE_KEYWORD(state, data) {
      state.movieKeyword = data;
    }
  },
  actions: {
    async getMovieDetail({state, commit}, movieId) {
      state.loading = false;
      const result = await request(`/${state.mediaType}/` + movieId);
      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE', result.data);
      }
    },
    async getMovieRecommendation({commit, state}, movieId) {
      const result = await request(`/${state.mediaType}/` + movieId + `/recommendations`);
      const newResult = result.data.results.filter(function(v, i) {
        return i < 6;
      });

      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE_RECOMMENDATION', newResult);
      }
    },
    async getMovieVideo({commit, state}, movieId) {
      const result = await request(`/${state.mediaType}/` + movieId + `/videos`);
      if (result.status === 200) {
        //1. v-for 는 배열만 가능
        //2. result.data는 뭐다? 객체
        //3. 객체를 저장해서 반복하려고 하니까 에러 ㅇㅋ?
        //4. 그러면 배열이 되게 해야 되는데 뽑히는 자료에서 results: Array(12) 배열임
        //5. 이 배열에 key가 들어가있음
        // console.log(result.data.results);
        commit('SET_DETAIL_MOVIE_VIDEO', result.data.results);
      }
    },
    async getMovieImg({commit, state}, movieId) {
      const result = await request2(`/${state.mediaType}/` + movieId + `/images`);
      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE_IMG', result.data.backdrops);
      }
    },
    async getMoviePoster({commit, state}, movieId) {
      const result = await request2(`/${state.mediaType}/` + movieId + `/images`);
      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE_POSTER', result.data.posters);
      }
    },

    async getMovieKeyword({commit, state}, movieId) {
      const result = await request(`/${state.mediaType}/` + movieId + `/keywords`);
      if (result.status === 200) {
        commit('SET_DETAIL_MOVIE_KEYWORD', result.data.keywords);
      }
    }
  }
};
