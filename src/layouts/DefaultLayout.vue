<template>
  <div>
    <!-- router view -->
    <slot></slot>
    <BottomMenu />
  </div>
</template>

<script>
import BottomMenu from '@/components/BottomMenu.vue';
export default {
  components: {
    BottomMenu,
  },
};
</script>
