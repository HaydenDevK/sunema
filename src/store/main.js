import { request } from './axios'

export default {
  namespaced: true,
  state: {
    popularMovie: [],
    nowPlayingMovie: [],
    upcomingMovie: [],
    trendingContents: [],
    mediaType: 'movie',
    todayTv: []
  },
  mutations: {
    SET_POPULAR_MOVIE (state, data) {
      state.popularMovie = data
    },
    SET_NOWPLAYING_MOVIE (state, data) {
      state.nowPlayingMovie = data
    },
    SET_UPCOMING_MOVIE (state, data) {
      state.upcomingMovie = data
    },
    SET_TRENDING_CONTENTS (state, data) {
      state.trendingContents = data
    },
    SET_MEDIA_TYPE (state, type) {
      state.mediaType = type
      console.log(state)
    },
    SET_TODAY_TV (state, data) {
      state.todayTv = data
    }
  },
  actions: {
    async getPopularMovie ({ commit }) {
      const result = await request('movie/popular')
      if (result.status === 200) {
        commit('SET_POPULAR_MOVIE', result.data.results)
      }
    },
    async getNowPlayingMovie ({ commit }) {
      const result = await request('movie/now_playing')
      if (result.status === 200) {
        commit('SET_NOWPLAYING_MOVIE', result.data.results)
      }
    },
    // 개봉 예정 영화 예고편 구하기
    async getUpcomingMovie ({ commit }) {
      // 개봉 영화 리스트를 요청할 때 예고편 정보까지 가져오면 좋겠지만, API에서 지원하지 않는걸로 보임
      // 그래서 일단 개봉 영화 정보 리스트를 불러오고 데이터 저장
      const result = await request('movie/upcoming')
      const movieData = result.data.results // 영화 정보

      // 예고편 정보는 영화 상세 정보 API에서만 제공하는 것으로 보이므로(현재로써)
      // 위에서 추출한 영화 리스트를 반복문 돌려서 상세 정보를 요청
      const movies = await Promise.all(
        movieData.map(async function (v) {
          // 상세 정보 요청
          const video = await request('movie/' + v.id + '/videos')

          // 상세 정보 요청 후 , 비디오 정보는 예고편의 개수에 따라서 1개 이상일 수 있는데,
          // 그냥 최초로 등록된 첫 번째 것만 가져오기로 하고
          // 그래서 아래처럼 결과에 배열이 0개보다 크면(=비디오가 있으면)
          // 첫번째 영화의 키 값을 반환해라 라고 코드를 짬
          // 그러면 최종적으로 const movies 에는 키 값이 들어감
          if (video.data.results.length > 0) {
            return video.data.results[0].key
          }
        })
      )

      // 다만 키 값이 undefined인게 섞여 있어서 필터로 깨끗하게 걸러줌
      const moviesWithOut = movies.filter((v) => v)

      // 추출한 영화 키 정보를 셋팅, 이후 활용
      if (result.status === 200) {
        commit('SET_UPCOMING_MOVIE', moviesWithOut)
      }
    },
    async getTrendingContents ({ state, commit }) {
      const result = await request(`/trending/${state.mediaType}/day`)
      if (result.status === 200) {
        commit('SET_TRENDING_CONTENTS', result.data.results)
      }
    },
    async getTodayTv ({ commit }) {
      const result = await request('/tv/airing_today')
      if (result.status === 200) {
        commit('SET_TODAY_TV', result.data.results)
      }
    }
  }
}
