<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true });

useHead({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});
</script>
<template>
  <div class="flex w-full flex-col">
    <header class="h-12 w-full bg-lab-blue-1 md:h-16">
      <!-- Mobile Nav -->
      <LazyNavigationMobileNavigation class="flex sm:hidden" />
      <!-- Desktop Nav -->
      <ClientOnly>
        <LazyNavigationDesktopNavigation class="hidden sm:flex" />
      </ClientOnly>
    </header>
    <main class="mx-auto flex w-full flex-grow items-center justify-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<style scoped>
div#__nuxt {
  height: 100vh;
}
</style>
