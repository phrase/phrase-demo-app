<template>
  <div>
    <h2>{{ $t('title') }}</h2>
    <h3>{{ $t('headline') }}</h3>
    <p>{{ $tc('intro', 1) }}</p>
    <p v-t="{path: 'text'}"></p>

    <i18n path="text" tag="p"></i18n>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloI18n',
  data() {
    return {}
  }
}
</script>

<i18n>
{
  "en": {
    "title": "English",
    "headline": "",
    "intro": "",
    "text": ""
  },
  "fr": {
    "title": "Français",
    "headline": "",
    "intro": "",
    "text": ""
  },
  "de": {
    "title": "Deutsch",
    "headline": "",
    "intro": "",
    "text": ""
  }
}
</i18n>