<template>
  <a :class="`text-m button button--${hierarchy}`" :href="link" target="_blank">
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

.button {
  display: inline-block;
  padding: .75rem 1.5rem;
  box-shadow: 0 8px 12px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  color: var(--color-white);
  background-color: var(--button-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: var(--button-color-hover);
    transition: background-color 150ms;
  }

  @include breakpoint-s {
    padding: 1rem 1.3rem;
  }

  &--primary {
    --button-color: var(--color-green);
    --button-color-hover: var(--color-green-hover);
  }

  &--secondary {
    --button-color: var(--color-lightblue);
    --button-color-hover: var(--color-lightblue-hover);
  }
}
</style>
