import { request } from './axios'

export default {
  namespaced: true,
  state: {
    keywordId: 0,
    keywordMedia: [],
    pageNow: 1,
    pageTotal: 1,
    mediaType: 'movie', // sample
    mediaId: 436969, // sample
    mediaKeywords: []
  },
  mutations: {
    SET_PAGE_NOW (state, page) {
      state.pageNow = page
    },
    SET_MEDIA_ID (state, id) {
      state.mediaId = id
    },
    SET_MEDIA_TYPE (state, mediaType) {
      state.mediaType = mediaType
    },
    SET_MEDIA_KEYWORDS (state, data) {
      // data ? state.mediaKeywords = data : state.mediaKeywords = []
      state.mediaKeywords = data || []
    },
    SET_KEYWORD_ID (state, keywordId) {
      state.keywordId = keywordId
    },
    SET_KEYWORD_MEDIA (state, result) {
      state.keywordMedia = result.results
      state.pageTotal = result.total_pages
    },
    SET_PAGE_NEXT (state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++
      }
    },
    SET_KEYWORD_MEDIA_NEXT (state, result) {
      state.keywordMedia = state.keywordMedia.concat(result.results)
    }
  },
  actions: {
    async getKeywordMedia ({ state, commit }) {
      commit('SET_KEYWORD_ID', state.keywordId)
      commit('SET_PAGE_NOW', 1)

      const result = await request.get(`/discover/${state.mediaType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MEDIA', result.data)
      }
    },
    async getKeywordMediaMore ({ state, commit }) {
      commit('SET_PAGE_NEXT')
      const result = await request.get(`/discover/${state.mediaType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      })

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MEDIA_NEXT', result.data)
      }
    },
    async getMediaKeywords ({ state, commit }) {
      try {
        let result = {}
        result = await request.get(
          `/${state.mediaType}/${state.mediaId}/keywords`
        )

        console.log(result)
        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_MEDIA_KEYWORDS', result.data.keywords)
        } else {
          console.log(result)
        }
      } catch (e) {
        // request failed with status code 404 예외처리
        commit('SET_MEDIA_KEYWORDS')
      }
    },
    async getKeywordMediaElse ({ commit, dispatch }, mediaType) {
      await commit('SET_MEDIA_TYPE', mediaType)
      dispatch('getKeywordMedia')
    }
  }
}
