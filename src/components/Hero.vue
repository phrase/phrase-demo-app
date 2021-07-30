<template>
  <section class="hero">
    <h2 class="text-xl">{{ $t('hero_title') }}</h2>
    <p class="text-m">{{ $t('hero_description') }}</p>
    <Button />
  </section>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: 'Hero',
  components: {
    Button
  },
  data() {
    return {}
  }
}
</script>

<i18n>
{
  "en": {
    "hero_title": "",
    "hero_description": ""
  }
}
</i18n>

<style lang="scss" src="../assets/stylesheets/components/hero.scss"></style>