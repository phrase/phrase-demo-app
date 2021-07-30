<template>
  <div id="app">
    <Nav />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloI18n />
  </div>
</template>

<script lang="ts">
import HelloI18n from "./components/HelloI18n.vue";
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  components: {
    Nav,
    HelloI18n
  }
}
</script>

<style lang="scss" src="./assets/stylesheets/shared/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/shared/colors.scss"></style>