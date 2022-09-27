<template>
  <ul class="client-list">
    <li v-for="(name, link) in clients" :key="name" class="client-list__item">
      <Client :name="name" :link="link" />
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
@import "../assets/stylesheets/mixins.scss";
@import "../assets/stylesheets/colors.scss";

.client-list {
  display: flex;
  list-style: none;
  padding: 0;
  color: var(--sds-color-neutral-30);
  position: relative;
  width: calc(100% + 5rem);
  max-width: 100%;
  left: 5rem;
  margin: 4rem -5rem 0 -5rem;

  @include breakpoint-m {
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    max-width: 12rem;
    margin: 0 1rem;

    @include breakpoint-s {
      max-width: 6rem;
    }
  }

  &__item figure {
    margin: 0;

    @include breakpoint-m {
      margin: 2rem 0;
    }
  }

  &__item img {
    width: 100%;
    margin-bottom: .5rem;
  }
}
</style>
