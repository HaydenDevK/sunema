// import { request } from './axios';

export default {
  namespaced: true,
  state: {
    searchKeyword: [
      {
        text: '종이의집',
        counter: 1,
      },
      {
        text: '환승연애',
        counter: 1,
      },
      {
        text: '너의 모든 것',
        counter: 1,
      },
      {
        text: '온리 머더스 인 더 빌딩',
        counter: 1,
      },
      {
        text: '베놈',
        counter: 1,
      },
      {
        text: '주먹왕 랄프',
        counter: 1,
      },
      {
        text: '갯마을 차차차',
        counter: 1,
      },
      {
        text: '마이 네임',
        counter: 1,
      },
      {
        text: '모던패밀리',
        counter: 1,
      },
      {
        text: '프렌즈',
        counter: 1,
      },
    ],
  },
  mutations: {
    PUSH_KEYWORD(state, txt) {
      state.searchKeyword.push({ text: txt, counter: 1 });
      txt = null
    },
    PLUS_COUNTER(state, idx) {
      state.searchKeyword[idx].counter++
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
    find({ state, commit }, txt) {
      // 검색 키워드가 이미 state에 있는지?
      let result = 0
      let idx = 0
      for (let i = 0; i < state.searchKeyword.length; i++) {
        if (txt === state.searchKeyword[i].text) {
          result = 1
          idx = i
        }
      }
      if (result == 0) {
        commit('PUSH_KEYWORD', txt)
      } else {
        commit('PLUS_COUNTER', idx)
      }
      console.log(state.searchKeyword)
      commit('SORT_KEYWORD');
    },
  }
};