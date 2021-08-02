<template>
  <div id="app">
    <Nav />
    <Hero />
    <ContentSection>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloI18n />
    </ContentSection>
  </div>
</template>

<script lang="ts">
import HelloI18n from "./components/HelloI18n.vue";
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import ContentSection from "./components/ContentSection.vue";

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    ContentSection,
    HelloI18n
  }
}
</script>

<style lang="scss" src="./assets/stylesheets/shared/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/colors.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/typography.scss"></style>