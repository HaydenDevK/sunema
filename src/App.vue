<template>
  <div id="app">
    <!-- slot 개념을 적용할 건데, 기존에 라우팅 된 뷰 파일을 Layout.vue의 매개 변수로 넘김 -->
    <layout>
      <router-view />
    </layout>
  </div>
</template>
<script>
// Layout 처리를 위한 코드 추가
import Layout from '@/layouts/Layout.vue';
export default {
  //layouts 폴더 만들고 Layout.vue 컴포넌트 등록하기
  components: {
    Layout,
  },
};
</script>
