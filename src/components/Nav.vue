<template>
  <nav class="nav">
    <div class="centered-layout">
      <a href="https://phrase.com/" class="nav__link" aria-label="Back to main website">
        <img class="nav__link-image" alt="" src="../assets/phrase_logo_rgb_white.svg">
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
@import "../assets/stylesheets/colors.scss";

.nav {
  background-color: var(--sds-color-neutral-20);
  padding-top: 2rem;

  &__link {
    display: block;
    max-width: 100px;

    &-image {
      display: block;
      object-fit: contain;
      width: 150px;
    }
  }
}
</style>
