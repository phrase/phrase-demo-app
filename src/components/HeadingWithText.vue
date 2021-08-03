<template>
  <div class="heading-with-text">
    <h2 class="text-l">{{ title }}</h2>
    <div class="text-m">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeadingWithText",
  props: {
    title: String,
  },
  data() {
    return {};
  },
};
</script>
