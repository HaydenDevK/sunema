<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    viewBox: { type: String, default: "0 0 20 20" },
    iconName: { type: String, default: "" },
    width: { type: [Number, String], default: '1.8rem' },
    height: { type: [Number, String], default: '1.8rem' },
    iconColor: { type: String, default: "currentColor" },
  },
};
</script>
