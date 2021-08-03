<template>
  <section class="hero">
    <div class="centered">
      <h2 class="text-xl hero__title">{{ $t("hero_title") }}</h2>
      <p class="text-m hero__description">{{ $t("hero_description") }}</p>
      <Button hierarchy="primary" link="https://phrase.com/blog/posts/use-phrase-in-context-editor/">
        {{ $t("hero_link_docs") }}
      </Button>
      <Button hierarchy="secondary" link="">
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

<style lang="scss" src="../assets/stylesheets/components/hero.scss"></style>
