<template>
  <div>
    <a :href="link" target="_blank">
      <slot />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    'link': String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="../assets/stylesheets/components/hero.scss"></style>
