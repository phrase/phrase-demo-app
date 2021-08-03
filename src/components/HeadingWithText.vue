<template>
  <div class="heading-with-text">
    <h2 class="heading-with-text__title text-l">{{ title }}</h2>
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

<style lang="scss">
.heading-with-text__title {
  margin-top: .7em;
}
</style>
