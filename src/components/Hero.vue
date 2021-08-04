<template>
  <section class="hero">
    <div class="centered-layout">
      <h2 class="text-xl hero__title">{{ $t("hero_title") }}</h2>
      <p class="text-m hero__description">{{ $t("hero_description") }}</p>
      <Button class="hero__button" hierarchy="primary"
              link="https://help.phrase.com/help/set-up-in-context-editor">
        {{ $t("hero_link_docs") }}
      </Button>
      <Button class="hero__button" hierarchy="secondary" link="https://github.com/phrase/phrase-demo-app">
        {{ $t("hero_link_code") }}
      </Button>
    </div>
  </section>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Hero",
  components: {
    Button,
  }
};
</script>

<style lang="scss">
@import "../assets/stylesheets/mixins.scss";
@import "../assets/stylesheets/colors.scss";

.hero {
  background-color: $pa-color-blue;
  color: $pa-color-white;
  text-align: center;
  padding: 6rem 0;

  @include breakpoint-s {
    padding: 3rem 0;
  }

  &__description, &__title {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__description {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 700px) {
    &__button ~ &__button {
      margin-left: 1.5rem;
    }
  }

  @include breakpoint-s {
    &__button {
      display: block;
    }

    &__button ~ &__button {
      margin-top: 1.5rem;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "hero_title": "",
    "hero_description": "",
    "hero_link_docs": "",
    "hero_link_code": ""
  }
}
</i18n>