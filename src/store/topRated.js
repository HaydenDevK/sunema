import { request } from './axios'

export default {
  namespaced: true,
  state: {
    topRated: [],
    mediaType: 'movie',
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    
SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_MEDIA_TYPE (state, mediaType) {
      state.mediaType = mediaType
    },
    SET_TOP_RATED (state, result) {
      state.topRated = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_TOP_RATED_MORE (state, result) {
      state.topRated = state.topRated.concat(result.results)
    }
  },
  actions: {
    async getTopRated ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request.get(`${state.mediaType}/top_rated`, {
        params: {
          page: state.pageNow
        }
      })

      if (result.status === 200) {
        commit('SET_TOP_RATED', result.data)
      }
    },
    async getTopRatedMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request.get(`${state.mediaType}/top_rated`, {
        params: {
          page: state.pageNow
        }
      })

      if (result.status === 200) {
        commit('SET_TOP_RATED_MORE', result.data)
      }
    }
  }
}
