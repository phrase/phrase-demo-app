<template>
  <figure>
    <img
      :alt="`Logo of ${name}`"
      :src="require(`@/assets/clients/${link}`)"
    >
    <figcaption class="text-s">
      {{ name }}
    </figcaption>
  </figure>
</template>

<script lang="ts">

export default {
  name: 'ClientComponent',
  props: {
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }
}
</script>
