<template>
  <div class="heading-with-text">
    <h2>{{ title }}</h2>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeadingWithText",
  props: {
    'title': String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="../assets/stylesheets/components/heading-with-text.scss"></style>
