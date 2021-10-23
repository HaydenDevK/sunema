export default {
  namespaced: true,
  state: {
    searchKeyword: []
  },
  mutations: {
    PUSH_KEYWORD(state, txt) {
      state.searchKeyword.push({text: txt, counter: 1});
      txt = null;
    },
    PLUS_COUNTER(state, idx) {
      state.searchKeyword[idx].counter++;
    },
    SORT_KEYWORD(state) {
      state.searchKeyword.sort((a, b) => {
        if (a.counter < b.counter) {
          return 1;
        }
        if (a.counter > b.counter) {
          return -1;
        }
        return 0;
      });
    }
  },
  actions: {
    find({state, commit}, txt) {
      // 검색 키워드가 이미 state에 있는지?
      let result = 0;
      let idx = 0;
      for (let i = 0; i < state.searchKeyword.length; i++) {
        if (txt === state.searchKeyword[i].text) {
          result = 1;
          idx = i;
        }
      }
      if (result == 0) {
        commit('PUSH_KEYWORD', txt);
      } else {
        commit('PLUS_COUNTER', idx);
      }
      commit('SORT_KEYWORD');
    }
  }
};
