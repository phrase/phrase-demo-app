<template>
  <div id="app">
    <Nav/>
    <Hero/>
    <ContentSection>
      <HelloI18n/>
    </ContentSection>
    <ContentSection>
      <HeadingWithText :title="$t('integrate_title')">
        {{ $t("integrate_text") }}
      </HeadingWithText>
      <img alt="Vue logo" src="./assets/logo.png">
    </ContentSection>
    <ContentSection>
      <h2>{{ $t("clients_title") }}</h2>
    </ContentSection>
    <ContentSection>
      <img alt="Vue logo" src="./assets/logo.png">
      <HeadingWithText :title="$t('advantages_title')">
        {{ $t("advantages_text") }}
      </HeadingWithText>
    </ContentSection>
  </div>
</template>

<script lang="ts">
import HelloI18n from "./components/HelloI18n.vue";
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import ContentSection from "./components/ContentSection.vue";
import HeadingWithText from "@/components/HeadingWithText.vue";

export default {
  name: 'App',
  components: {
    HeadingWithText,
    Nav,
    Hero,
    ContentSection,
    HelloI18n
  }
}
</script>

<i18n>
{
  "en": {
    "integrate_title": "",
    "integrate_text": "",
    "clients_title": "",
    "advantages_title": "",
    "advantages_text": ""
  }
}
</i18n>

<style lang="scss" src="./assets/stylesheets/shared/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/colors.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/typography.scss"></style>