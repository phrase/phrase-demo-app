<template>
  <ul class="client-list">
    <li v-for="(name, link) in clients" :key="name">
      <Client :name="name" :link="link"/>
    </li>
  </ul>
</template>

<script lang="ts">

import Client from "@/components/Client.vue";

export default {
  name: "ClientList",
  components: {
    Client
  },
  data() {
    return {
      clients: {
        'rails.png': 'Ruby on Rails',
        'angular.png': 'Angular JS, Angular 2+',
      }
    };
  },
};
</script>

<style lang="scss">
.client-list {
  display: flex;
}
</style>

<i18n>
{
  "en": {
    "hero_title": ""
  }
}
</i18n>
