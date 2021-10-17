import { request } from './axios';

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
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_KEYWORD_ID(state, keywordId) {
      state.keywordId = keywordId;
    },
    SET_KEYWORD_MEDIA(state, result) {
      state.keywordMedia = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_KEYWORD_MEDIA_NEXT(state, result) {
      const newkeywordMedia = state.keywordMedia.concat(result.results);
      state.keywordMedia = newkeywordMedia;
    },
    SET_MEDIA_KEYWORDS(state, data) {
      state.mediaKeywords = data;
    }
  },
  actions: {
    async getKeywordMedia({ state, commit }) {
      await commit('SET_KEYWORD_ID', state.keywordId);
      await commit('INIT_PAGE_NOW');

      const result = await request(`/discover/${state.mediaType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MEDIA', result.data);
      }
    },
    async getKeywordMediaMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');
      const result = await request(`/discover/${state.mediaType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_MEDIA_NEXT', result.data);
      }
    },
    async getMediaKeywords({ state, commit }) {
      if (state.mediaType === 'movie') {
        const result = await request(`/movie/${state.mediaId}/keywords`);

        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_MEDIA_KEYWORDS', result.data.keywords);
        }
      } else {
        const result = await request(`/tv/${state.mediaId}/keywords`);

        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_MEDIA_KEYWORDS', result.data.keywords);
        }
      }
    }
  }
};
