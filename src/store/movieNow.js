import { request } from './axios'

export default {
  namespaced: true,
  state: {
    movieNow: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_MOVIE_NOW (state, result) {
      state.movieNow = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_MOVIE_NOW_MORE (state, result) {
      state.movieNow = state.movieNow.concat(result.results)
      // [Vue warn]: Duplicate keys detected: '859860'. This may cause an update error. api 자체 중복 문제
    }
  },
  actions: {
    async getMovieNow ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request('/movie/now_playing', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_NOW', result.data)
      }
    },
    async getMovieNowMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request('/movie/now_playing', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_NOW_MORE', result.data);
      }
    }
  }
}
