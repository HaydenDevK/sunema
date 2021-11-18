import { request, request2 } from './axios'

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
    SET_PERSON_ID (state, personId) {
      state.personId = personId
    },
    SET_ACTOR_DETAIL (state, data) {
      state.actorDetail = data
    },
    SET_ACTOR_CREDITS (state, data) {
      state.actorCredits = data
    },
    SET_ACTOR_IMAGES (state, data) {
      state.actorImages = data
      // console.log(state.actorImages);
      // console.log(typeof state.actorImages);
      // // todo Array인데 왜 Object인지 찾기
    }
  },
  actions: {
    async getActorDetail ({ state, commit }) {
      const result = await request2.get(`/person/${state.personId}`)

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_ACTOR_DETAIL', result.data)
      }
    },
    async getActorCredits ({ state, commit }) {
      const result = await request.get(`/person/${state.personId}/combined_credits`)

      // api 호출 성공 시
      if (result.status === 200) {
        // cast 중복 객체 제거
        result.data.cast = result.data.cast.filter((character, idx, arr)=>{
          return arr.findIndex((item) => item.id === character.id) === idx
        })
        // cast tv의 first_air_date를 release_date로 통일
        for (let media of result.data.cast) {
          if (media.first_air_date && media.first_air_date !== '') {
            media.release_date = media.first_air_date
          }
        }
        // 정렬
        result.data.cast.sort((a, b) => {
          if (a.release_date && b.release_date) return a.release_date > b.release_date ? -1 : 1 // 일단 a, b 둘 다 날짜가 있고 a가 크면 최신이니까 위로 가야지
          if (!a.release_date) return -1 // 그리고 a한테 날짜가 없으면 b가 누구든 a가 위로 올라가야지
          return 0
        })
        result.data.crew.sort((a, b) => {
          if (a.release_date && b.release_date) return a.release_date > b.release_date ? -1 : 1
          if (!a.release_date) return -1
          return 0
        })
        // 커밋
        commit('SET_ACTOR_CREDITS', result.data)
      }
    },
    async getActorImages ({ state, commit }) {
      const result = await request.get(`/person/${state.personId}/images`)

      // api 호출 성공 시
      if (result.status === 200) {
        commit('SET_ACTOR_IMAGES', result.data.profiles)
      }
    }
  }
}
