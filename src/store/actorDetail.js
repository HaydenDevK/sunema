import { request } from './axios';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    personId: 0,
    actorDetail: {},
    actorCredits: {
      cast: [],
      crew: []
    },
    actorImages: {}
  },
  mutations: {
    SET_PERSON_ID(state, personId) {
      state.personId = personId;
    },
    SET_ACTOR_DETAIL(state, data) {
      state.actorDetail = data;
    },
    SET_ACTOR_CREDITS(state, data) {
      state.actorCredits = data;
      // todo actorCredits.cast, actorCredits.crew 날짜별로 정렬
      // todo 날짜=>연월일배열로나누기
    },
    SET_ACTOR_IMAGES(state, data) {
      state.actorImages = data;
    }
  },
  actions: {
    async getActorDetail({ state, commit }) {
      // const result = await request(`/person/${state.personId}`);
      const result = await axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {
          api_key: '4ae7e3c1afba212f2a37c1e33792869c'
        }
      })(`/person/${state.personId}`);
      // api 호출 성공 시
      if (result.status === 200) {
        // console.log(result.data);
        commit('SET_ACTOR_DETAIL', result.data);
      }
    },
    async getActorCredits({ state, commit }) {
      const result = await request(
        `/person/${state.personId}/combined_credits`
      );

      // api 호출 성공 시
      if (result.status === 200) {
        // console.log(result.data);
        commit('SET_ACTOR_CREDITS', result.data);
      }
    },
    async getActorImages({ state, commit }) {
      const result = await request(`/person/${state.personId}/images`);

      // api 호출 성공 시
      if (result.status === 200) {
        // console.log(result.data);
        commit('SET_ACTOR_IMAGES', result.data.profiles);
      }
    }
  }
};
