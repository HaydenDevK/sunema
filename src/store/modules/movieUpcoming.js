import { request } from './axios'

export default {
  namespaced: true,
  state: {
    movieUpcoming: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    
SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_MOVIE_UPCOMING (state, result) {
      state.movieUpcoming = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_MOVIE_UPCOMING_MORE (state, result) {
      state.movieUpcoming = state.movieUpcoming.concat(result.results)
    }
  },
  actions: {
    async getMovieUpcoming ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request.get('/movie/upcoming', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_UPCOMING', result.data)
      }
    },
    async getMovieUpcomingMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request.get('/movie/upcoming', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_MOVIE_UPCOMING_MORE', result.data)
      }
    }
  }
}
