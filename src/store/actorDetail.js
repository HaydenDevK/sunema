import { request } from './axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    testCall() {
      //  this.$store.dispatch("actorDetail/testCall")
      console.log(request);
      console.log('testcall');
    },
  },
};
