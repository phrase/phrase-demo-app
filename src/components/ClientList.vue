<template>
  <ul class="client-list">
    <li v-for="(name, link) in clients" :key="name" class="client-list__item">
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
        'angular.png': 'Angular\xa0JS, Angular\xa02+',
        'django.png': 'Django',
        'spring.png': 'Spring Framework',
        'react.png': 'React',
        'vue.png': 'Vue.js',
        'symfony.png': 'Symfony\xa02.x, Symfony\xa03.x'
      }
    };
  },
};
</script>

<style lang="scss">
$client-list-breakpoint-tablet: 1400px;

.client-list {
  display: flex;
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 4rem 0 0 0;
  color: var(--color-gray);

  @media (max-width: $client-list-breakpoint-tablet) {
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item + &__item {
    margin-left: 2rem;
  }

  &__item figure {
    margin: 0;

    @media (max-width: $client-list-breakpoint-tablet) {
      margin: 2rem 0;
    }
  }

  &__item img {
    width: 100%;
    max-width: 12rem;
    margin-bottom: .5rem;
  }
}
</style>

<i18n>
{
  "en": {
    "hero_title": ""
  }
}
</i18n>
