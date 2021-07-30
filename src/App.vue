<template>
  <div id="app">
    <Nav />
    <Hero />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloI18n />
  </div>
</template>

<script lang="ts">
import HelloI18n from "./components/HelloI18n.vue";
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    HelloI18n
  }
}
</script>

<style lang="scss" src="./assets/stylesheets/shared/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/colors.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/typography.scss"></style>