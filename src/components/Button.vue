<template>
  <a :class="`text-m text-m--bold button button--${hierarchy}`" :href="link" target="_blank">
    <slot/>
  </a>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    link: String,
    hierarchy: String,
  }
};
</script>

<style lang="scss">
@import "../assets/stylesheets/mixins.scss";
@import "../assets/stylesheets/colors.scss";

.button {
  display: inline-block;
  padding: .75rem 1.5rem;
  box-shadow: 0 8px 12px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  color: $pa-color-white;
  text-decoration: none;

  &:hover {
    transition: background-color 150ms;
  }

  @include breakpoint-s {
    padding: 1rem 1.3rem;
  }

  &--primary {
    background-color: $pa-color-green;
    &:hover {
      background-color: $pa-color-green-fb;
    }
  }

  &--secondary {
    background-color: $pa-color-light-blue;
    &:hover {
      background-color: $pa-color-light-blue-fb;
    }
  }
}
</style>
