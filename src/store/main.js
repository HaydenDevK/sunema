import { request } from './axios';

export default {
  namespaced: true,
  state: {
    popularMovie:[],
    nowPlayingMovie:[],
    upcomingMovie:[],
    // freeContents:[],
    // trendingContents:[],
    todayTv:[],
    videoList:[]
  },
  mutations: {
    SET_POPULAR_MOVIE(state, data){
      state.popularMovie = data;
    },
    SET_NOWPLAYING_MOVIE(state, data){
      state.nowPlayingMovie = data;
    },
    SET_UPCOMING_MOVIE(state, data){
      state.upcomingMovie = data;
    },
    // SET_FREE_CONTENTS(state, data){
    //   state.freeContents = data;
    // },
    // SET_TRENDING_CONTENTS(state, data){
    //   state.trendingContents = data;
    // },
    SET_TODAY_TV(state, data){
      state.todayTv = data;
    },
    SET_VIDEO_LIST(state, data){
      state.videoList = data;
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
      // console.log(result);

      if(result.status === 200) {
        // console.log(result.data.results);
        commit('SET_POPULAR_MOVIE', result.data.results);
      }
    },
    async getNowPlayingMovie({ commit }) {
      const result = await request('movie/now_playing');
      // console.log(result);

      if(result.status === 200) {
        // console.log(result.data.results);
        commit('SET_NOWPLAYING_MOVIE', result.data.results);
      }
    },
    async getUpcomingMovie({ commit }) {
      const result = await request('movie/upcoming',{
        params: {
          append_to_response: 'videos'
        }
      });
      // console.log(result);

      if(result.status === 200) {
        commit('SET_UPCOMING_MOVIE', result.data.results);
      }
    },
    // async getFreeContents({ commit }) {
    //   const result = await request('movie/');
    //   console.log(result);

    //   if(result.status === 200) {
    //     console.log(result.data.results);
    //     commit('SET_FREE_CONTENTS', result.data.results);
    //   }
    // },
    // async getTrendingContents({ commit }) {
    //   const result = await request('movie/popular');
    //   console.log(result);

    //   if(result.status === 200) {
    //     console.log(result.data.results);
    //     commit('SET_POPULAR_MOVIE', result.data.results);
    //   }
    // },
    async getTodayTv({ commit }) {
      const result = await request('/tv/airing_today');
      // console.log(result);

      if(result.status === 200) {
        // console.log(result.data.results);
        commit('SET_TODAY_TV', result.data.results);
      }
    },
    async getVideoList({ commit }, movieId) {
      const result = await request('/movie/' + movieId, {
        params: {
          append_to_response: 'videos'
        }
      });

      // const result = await axios.get(
      //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=df53b682eec93755d384a295ca7f4ac7`
      // );

      if (result.status === 200) {
        commit('SET_VIDEO_LIST', result.data);
      }
    }
  },
};
