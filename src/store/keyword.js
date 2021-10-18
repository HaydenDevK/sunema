// import { request } from './axios';

export default {
  namespaced: true,
  state: {
    searchKeyword: [
      {
        text: '종이의집',
        counter: 1
      },
      {
        text: '환승연애',
        counter: 1
      }
    ]
  },
  mutations: {
    PUSH_KEYWORD(state, txt) {
      state.searchKeyword.push({ text: txt, counter: 1 });
    },
    PLUS_COUNTER(state, index) {
      state.searchKeyword[index].counter++;
    }
  },
  actions: {
    find({ state, commit }, txt) {
      // 검색 키워드가 이미 state에 있는지?
      const result = state.searchKeyword.indexOf(txt);
      console.log(result);
      if (result === -1) {
        commit('PUSH_KEYWORD', txt);
      } else {
        commit('PLUS_COUNTER', result);
      }
    }
  }
};
