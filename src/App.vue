<template>
  <div id="app">
    <Nav/>
    <Hero/>
    <ContentSection layout="split">
      <HeadingWithText :title="$t('integrate_title')">
        {{ $t("integrate_text") }}
      </HeadingWithText>
      <img alt="" src="./assets/integrate.png">
    </ContentSection>

    <ContentSection layout="centered">
      <h2 class="text-l">{{ $t("clients_title") }}</h2>
      <ClientList/>
    </ContentSection>

    <ContentSection layout="split">
      <img alt="" src="./assets/advantages.png">
      <HeadingWithText :title="$t('advantages_title')">
        {{ $t("advantages_text") }}
      </HeadingWithText>
    </ContentSection>
  </div>
</template>

<script lang="ts">
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import ContentSection from "./components/ContentSection.vue";
import HeadingWithText from "@/components/HeadingWithText.vue";
import ClientList from "@/components/ClientList.vue";

export default {
  name: 'App',
  components: {
    ClientList,
    HeadingWithText,
    Nav,
    Hero,
    ContentSection,
  }
}
</script>

<style lang="scss" src="./assets/stylesheets/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/colors.scss"></style>
<style lang="scss" src="./assets/stylesheets/typography.scss"></style>

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