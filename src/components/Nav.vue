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
  background-color: $pa-color-blue;
  padding-top: 1.7rem;

  &__link {
    display: block;
    max-width: 85px;

    &-image {
      display: block;
      object-fit: contain;
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
