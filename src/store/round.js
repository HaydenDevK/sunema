import { request } from './axios'
// import axios from 'axios';

export default {
  namespaced: true,
  state: {
    tv_id: 71712,
    season_number: 1,
    tv_name: '',
    movieRound: []
  },
  mutations: {
    SET_TV_ID (state, tv_id) {
      state.tv_id = tv_id
    },
    SET_SEASON_NUMBER (state, season_number) {
      state.season_numbe = season_number
    },
    SET_MOVIE_LIST (state, data) {
      state.movieRound = data
    },
    GET_TV_NAME (state, data) {
      state.tv_name = data
    }
  },
  actions: {
    // TV에피소드 정보
    async getMovieList ({ state, commit }) {
      const result = await request(
        `/tv/${state.tv_id}/season/${state.season_number}`
      )

      // api 호출 성공
      if (result.status === 200) {
        // console.log(result); //담기는 데이터 확인해보기
        commit('SET_MOVIE_LIST', result.data.episodes)
      }
    },
    // TV제목
    async getTvName ({ state, commit }) {
      const result = await request(`/tv/${state.tv_id}`)

      // api 호출 성공
      if (result.status === 200) {
        console.log(result.data) // 담기는 데이터 확인해보기
        commit('GET_TV_NAME', result.data)
      }
    }
  }
}
