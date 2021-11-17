const globalMethods = {
  scrollBottomCheck (callback) {
    window.onscroll = () => {
      const bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight

      if (bottomOfWindow) {
        callback()
      }
    }
  }
  // 다른 글로벌 함수가 필요하다면 이런 식으로 확장하기
  /*   two() {
    console.log('two');
  }, */
}

export default {
  install (Vue) {
    Vue.prototype.$isScrollBottomCheck = globalMethods.scrollBottomCheck
    // Vue.prototype.$isTwo = globalMethods.two;
  }
}
