<template>
  <section class="hero">
    <div class="centered-layout">
      <h2 class="text-xl hero__title">
        {{ t("hero_title") }}
      </h2>
      <p class="text-m hero__description">
        {{ t("hero_description") }}
      </p>
      <ButtonComponent
        class="hero__button"
        hierarchy="primary"
        link="https://support.phrase.com/hc/en-us/articles/5784095916188"
      >
        {{ t("hero_link_docs") }}
      </ButtonComponent>
      <ButtonComponent
        class="hero__button"
        hierarchy="secondary"
        link="https://github.com/phrase/phrase-demo-app"
      >
        {{ t("hero_link_code") }}
      </ButtonComponent>
    </div>
  </section>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import { useTranslate } from '.././i18n'

export default {
  name: 'HeroComponent',
  components: {
    ButtonComponent
  },
  setup () {
    return {
      ...useTranslate()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/stylesheets/mixins.scss";
@import "../assets/stylesheets/colors.scss";

.hero {
  background-color: var(--sds-color-neutral-20);
  color: var(--sds-color-neutral-90);
  text-align: center;
  padding: 4rem 0;

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
