<template>
  <nav class="nav">
    <div class="centered">
      <a href="https://phrase.com/" class="nav__link">
        <img class="nav__link-image" alt="" src="../assets/phrase_logo_rgb_white.svg">
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.nav {
  background-color: var(--color-blue);
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
