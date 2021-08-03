<template>
  <section class="hero">
    <div class="centered-layout">
      <h2 class="text-xl hero__title">{{ $t("hero_title") }}</h2>
      <p class="text-m hero__description">{{ $t("hero_description") }}</p>
      <Button class="hero__button" hierarchy="primary"
              link="https://phrase.com/blog/posts/use-phrase-in-context-editor/">
        {{ $t("hero_link_docs") }}
      </Button>
      <Button class="hero__button" hierarchy="secondary" link="">
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
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero {
  background-color: var(--color-blue);
  color: var(--color-white);
  text-align: center;
  padding: 4.5rem 0;

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
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &__button ~ &__button {
    margin-left: 1.5rem;
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