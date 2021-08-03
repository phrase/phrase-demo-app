<template>
  <div class="button text-m">
    <a :class="`button__link button__link--${hierarchy}`" :href="link" target="_blank">
      <slot/>
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

<style lang="scss">
.button {
  display: inline-block;

  &__link {
    display: block;
    padding: 0.5rem 1rem;
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 8%);
    border-radius: 4px;
    color: var(--color-white);
    background-color: var(--button-color);
    border-color: var(--button-color);
    text-decoration: none;
    font-weight: bold;

    &--primary {
      --button-color: var(--color-green);
    }

    &--secondary {
      --button-color: var(--color-lightblue);
    }
  }
}
</style>
