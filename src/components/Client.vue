<template>
  <figure>
    <img :alt="`Logo of ${name}`" :src="require(`@/assets/clients/${link}`)">
    <figcaption class="text-s">{{ name }}</figcaption>
  </figure>
</template>

<script lang="ts">

export default {
  name: "Client",
  props: {
    link: String,
    name: String
  }
};
</script>
