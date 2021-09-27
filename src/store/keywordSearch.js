import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3d6c850fedd64a507e51cfb2335f305c',
    language: 'ko-KR'
  }
});

export default {
  namespaced: true,
  state: {
    keywordMovie: []
  },
  mutations: {
    SET_KEYWORD_MOVIE(state, data) {
      state.keywordMovie = data.results;
      console.log(state.keywordMovie);
    }
  },
  actions: {
    testCall() {
      //  this.$store.dispatch("keywordSearch/testCall")
      console.log(request);
      console.log('testcall');
    },
    async getKeywordMovie({ commit }, keyword_id) {
      console.log(keyword_id);
      // 영화 상세페이지에서 keyword_list를 배열 형태로 스토어에 넣어주면
      // 그걸 스토어에서 가져다가 버튼을 만들고
      // keyword_id로
      // keyword/${keywordId}/movies 경로 리퀘스트하면
      // keyword_movies 가 배열로 반환되고
      // 그걸 keywordSearch.vue에서 가져다가 붙이고, 버튼 누르면 다시 붙이고
      // 복수의 keyword_id를 keywords 배열에 담아서
      const result = await request(`/keyword/${keyword_id}/movies`);

      // api 호출 성공 시
      if (result.status === 200) {
        console.log(result.data);
        commit('SET_KEYWORD_MOVIE', result.data);
      }
    }
  }
};
