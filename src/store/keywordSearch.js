import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3d6c850fedd64a507e51cfb2335f305c',
    language: 'ko-KR',
  },
});

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    testCall() {
      //  this.$store.dispatch("keywordSearch/testCall")
      console.log(request);
      console.log('testcall');
    },
  },
};
