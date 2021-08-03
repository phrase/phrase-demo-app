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
@import "../assets/stylesheets/mixins.scss";

.content-section {
  margin: 8rem 4rem 12rem;

  @include breakpoint-m {
    margin: 4rem 0;
  }

  &--split {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    grid-column-gap: 4rem;
    justify-items: center;

    @include breakpoint-m {
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
      grid-column-gap: 0;
      text-align: center;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      grid-column: span 2;

      @include breakpoint-m {
        grid-row: 2;
      }
    }
  }

  &--centered {
    text-align: center;
  }

  &:last-child {
    margin-bottom: 10rem;

    @include breakpoint-m {
      margin-bottom: 5rem;
    }
  }
}
</style>
