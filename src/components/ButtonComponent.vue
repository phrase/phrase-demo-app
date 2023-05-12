<template>
  <a
    :class="`text-m text-m--bold button button--${hierarchy}`"
    :href="link"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
  props: {
    link: {
      type: String,
      required: true,
    },
    hierarchy: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
@import "../assets/stylesheets/mixins.scss";
@import "../assets/stylesheets/colors.scss";

.button {
  display: inline-block;
  padding: .5rem 1.8rem .7rem;
  border-radius: 30px;
  font-weight: var(--font-weight-bold);
  color: var(--sds-color-neutral-10);
  text-decoration: none;
  transition: background-color 150ms, color 150ms;

  @include breakpoint-s {
    padding: 1rem 1.3rem;
  }

  &--primary {
    background-color: var(--sds-color-success-50);
    color: var(--sds-color-success-90);
    &:hover {
      color: var(--sds-color-neutral-90);
      background-color: var(--sds-color-success-70);
    }
  }

  &--secondary {
    background-color: var(--sds-color-neutral-20);
    border: 2px solid var(--sds-color-neutral-90);
    color: var(--sds-color-neutral-90);
    &:hover {
      background-color: var(--sds-color-neutral-30);
    }
  }
}
</style>
