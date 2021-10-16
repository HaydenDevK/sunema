import { request } from './axios';

export default {
  namespaced: true,
  state: {
    popularActor: [],
  },
  mutations: {
    SET_POPULAR_ACTOR(state, data) {
      state.popularActor = data;
    },
  },
  actions: {
    //인기 배우 리스트 정보
    async getPopularActor({ commit }) {
      const result = await request(`/person/popular`);

      //api 호출 성공
      if (result.status === 200) {
        console.log(result.data.results); //인기배우 담기는 데이터 확인해보기
        commit('SET_POPULAR_ACTOR', result.data.results);
      }
    },
  }
};
