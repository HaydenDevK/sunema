import { request } from './axios'

export default {
  namespaced: true,
  state: {
    trending: [],
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
    SET_TRENDING (state, result) {
      state.trending = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_TRENDING_MORE (state, result) {
      state.trending = state.trending.concat(result.results)
    }
  },
  actions: {
    async getTrending ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request.get(`/trending/${state.mediaType}/day`, {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TRENDING', result.data)
      }
    },
    async getTrendingMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request.get(`/trending/${state.mediaType}/day`, {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TRENDING_MORE', result.data)
      }
    }
  }
}
