<template>
  <!-- 컴포넌트 동적 바인딩 -->
  <component :is="layout">
    <!-- router view -->
    <slot />
  </component>
</template>

<script>
import NoTopBottomLayout from '@/layouts/NoTopBottomLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
export default {
  components: {
    DefaultLayout,
    NoTopBottomLayout,
  },
  computed: {
    // router/index.js 의 라우팅 정보에
    // meta 객체 속성에 layout 속성이 있으면 해당 레이아웃 보여주기
    // 없으면 DefaultLayout 보여주기
    // DefaultLayout이 하단에 바텀 푸터 있는 레이아웃
    layout() {
      return this.$route.meta.layout
        ? this.$route.meta.layout
        : 'DefaultLayout';
    },
  },
  mounted() {
    console.log('layout');
  },
};
</script>

<style scoped></style>
