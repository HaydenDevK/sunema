import { request } from './axios'

export default {
  namespaced: true,
  state: {
    tvToday: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    
SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_TV_TODAY (state, result) {
      state.tvToday = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_TV_TODAY_MORE (state, result) {
      state.tvToday = state.tvToday.concat(result.results)
    }
  },
  actions: {
    async getTvToday ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request.get('/tv/airing_today', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_TODAY', result.data)
      }
    },
    async getTvTodayMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request.get('/tv/airing_today', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_TODAY_MORE', result.data)
      }
    }
  }
}
