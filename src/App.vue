<template>
  <div id="app">
    <NavBar />
    <HeroComponent />
    <ContentSection layout="split">
      <HeadingWithText :title="t('integrate_title')">
        {{ t("integrate_text") }}
      </HeadingWithText>
      <img
        alt="A website with the integrated In-context Editor"
        src="./assets/integrate.png"
      >
    </ContentSection>

    <ContentSection layout="centered">
      <h2 class="text-l">
        {{ t("clients_title") }}
      </h2>
      <ClientList />
    </ContentSection>

    <ContentSection layout="split">
      <img
        alt="Interacting with the In-context Editor"
        src="./assets/advantages.png"
      >
      <HeadingWithText :title="t('advantages_title')">
        {{ t("advantages_text") }}
      </HeadingWithText>
    </ContentSection>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import HeroComponent from './components/HeroComponent.vue'
import ContentSection from './components/ContentSection.vue'
import HeadingWithText from '@/components/HeadingWithText.vue'
import ClientList from '@/components/ClientList.vue'
import { useTranslate } from './i18n'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    ClientList,
    HeadingWithText,
    NavBar,
    HeroComponent,
    ContentSection
  },
  setup () {
    return {
      ...useTranslate()
    }
  }
})
</script>

<style lang="scss" src="./assets/stylesheets/app.scss"></style>
<style lang="scss" src="./assets/stylesheets/colors.scss"></style>
<style lang="scss" src="./assets/stylesheets/typography.scss"></style>
