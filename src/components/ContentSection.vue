<template>
  <section class="content-section" :class="`layout && content-section--${layout}`">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: "ContentSection",
  props: {
    layout: String
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="../assets/stylesheets/components/content-section.scss"></style>
