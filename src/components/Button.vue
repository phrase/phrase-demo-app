<template>
  <div class="button text-m">
    <a :class="`button__link button__link--${hierarchy}`" :href="link" target="_blank">
      <slot />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    link: String,
    hierarchy: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="../assets/stylesheets/components/button.scss"></style>
