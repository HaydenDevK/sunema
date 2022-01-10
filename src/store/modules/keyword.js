export default {
  namespaced: true,
  state: {
    searchKeyword: []
  },
  mutations: {
    PUSH_KEYWORD (state, inputText) {
      state.searchKeyword.push({ text: `${inputText}`, counter: 1 })
    },
    ADD_COUNTER (state, index) {
      state.searchKeyword[index].counter++
    },
    SORT_KEYWORD (state) {
      state.searchKeyword.sort((a, b) => {
        if (a.counter < b.counter) {
          return 1
        }
        if (a.counter > b.counter) {
          return -1
        }
        return 0
      })
    }
  },
  actions: {
    find ({ state, commit }, inputText) {
      const index = state.searchKeyword.findIndex(
        (ele) => ele.text === inputText
      )

      index === -1
        ? commit('PUSH_KEYWORD', inputText) // 없으면 PUSH_KEYWORD
        : commit('ADD_COUNTER', index) // 있으면 ADD_COUNTER

      commit('SORT_KEYWORD')
    }
  }
}
