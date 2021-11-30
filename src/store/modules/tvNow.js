import { request } from './axios'

export default {
  namespaced: true,
  state: {
    tvNow: [],
    pageNow: 1,
    pageTotal: 1
  },
  mutations: {
    
SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_TV_NOW (state, result) {
      state.tvNow = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_TV_NOW_MORE (state, result) {
      state.tvNow = state.tvNow.concat(result.results)
    }
  },
  actions: {
    async getTvNow ({ state, commit }) {
      commit('SET_PAGE_NOW', 1)

      const result = await request.get('/tv/on_the_air', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_NOW', result.data)
      }
    },
    async getTvNowMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')

      const result = await request.get('/tv/on_the_air', {
        params: {
          page: state.pageNow
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_TV_NOW_MORE', result.data)
      }
    }
  }
}
