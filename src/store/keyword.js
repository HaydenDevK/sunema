// import { request } from './axios';

export default {
  namespaced: true,
  state: {
    searchKeyword: []
  },
  mutations: {
    PUSH_KEYWORD(state, txt) {
      state.searchKeyword.push({ text: `${txt}`, counter: 1 });
    },
    PLUS_COUNTER(state, index) {
      state.searchKeyword[index].counter++;
    }
  },
  actions: {
    find({ state, commit }, txt) {
      let check = 0;
      for (let index in state.searchKeyword) {
        if (state.searchKeyword[index].text === txt) {
          check++;
          commit('PLUS_COUNTER', index);
          break;
        }
      }
      if (check === 0) {
        console.log('없어');
        commit('PUSH_KEYWORD', txt);
      }
    }
  }
};
