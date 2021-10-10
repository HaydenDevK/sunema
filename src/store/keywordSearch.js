import { request } from './axios';

export default {
  namespaced: true,
  state: {
    keywordId: 0,
    keywordContents: [],
    pageNow: 1,
    pageTotal: 1,
    contentsType: 'movie', // sample setting
    contentsId: 436969,
    contentsKeywords: []
  },
  mutations: {
    INIT_PAGE_NOW(state) {
      state.pageNow = 1;
    },
    SET_KEYWORD_ID(state, keywordId) {
      state.keywordId = keywordId;
    },
    SET_KEYWORD_CONTENTS(state, result) {
      state.keywordContents = result.results;
      state.pageTotal = result.total_pages;
    },
    SET_PAGE_NEXT(state) {
      if (state.pageTotal >= state.pageNow) {
        state.pageNow++;
      }
    },
    SET_KEYWORD_CONTENTS_NEXT(state, result) {
      const newkeywordContents = state.keywordContents.concat(result.results);
      state.keywordContents = newkeywordContents;
    },
    SET_CONTENTS_KEYWORDS(state, data) {
      state.contentsKeywords = data;
    }
  },
  actions: {
    async getKeywordContents({ state, commit }) {
      await commit('SET_KEYWORD_ID', state.keywordId);
      await commit('INIT_PAGE_NOW'); // todo await 해야하는지 이해

      const result = await request(`/discover/${state.contentsType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_CONTENTS', result.data);
      }
    },
    async getKeywordContentsMore({ state, commit }) {
      await commit('SET_PAGE_NEXT');
      const result = await request(`/discover/${state.contentsType}`, {
        params: {
          page: state.pageNow,
          with_keywords: state.keywordId
        }
      });

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_KEYWORD_CONTENTS_NEXT', result.data);
      }
    },
    async getContentsKeywords({ state, commit }) {
      if (state.contentsType === 'movie') {
        const result = await request(`/movie/${state.contentsId}/keywords`);

        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_CONTENTS_KEYWORDS', result.data.keywords);
        }
      } else {
        const result = await request(`/tv/${state.contentsId}/keywords`);

        // api 호출 성공 시
        if (result.status === 200) {
          commit('SET_CONTENTS_KEYWORDS', result.data.keywords);
        }
      }
    }
  }
};
