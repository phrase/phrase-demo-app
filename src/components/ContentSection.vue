<template>
  <section class="content-section centered-layout" :class="layout && `content-section--${layout}`">
    <slot/>
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

<style lang="scss">
.content-section {
  padding: 6rem 4rem;

  &--split {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    grid-column-gap: 4rem;
    justify-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
      grid-column: span 2;
    }
  }

  &--centered {
    text-align: center;
  }

  &:last-child {
    padding-bottom: 10rem;
  }
}
</style>
