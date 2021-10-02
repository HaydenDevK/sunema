import { request } from './axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    testCall() {
      //  this.$store.dispatch("main/testCall")
      console.log(request);
      console.log('testcall');
    },
  },
};
