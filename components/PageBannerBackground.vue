<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

interface PageBannerProps {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  pageHeading: string;
  pageSubtitle?: string;
}

const props = defineProps<PageBannerProps>();
const breakpoints = useBreakpoints(breakpointsTailwind);
const md = breakpoints.greater('sm');
const nuxtApp = useNuxtApp();

const backgroundImage = computed(() => {
  const currentBreakpoint = md.value ? props.srcDesktop : props.srcMobile;
  const bgSrc = nuxtApp.$img(currentBreakpoint, {
    sizes: 'sm:100vw md:100vw lg:100vw xl:100vw',
    format: 'webp',
    quality: 90
  });
  return {
    backgroundImage: `url(${bgSrc})`
  };
});
</script>

<template>
  <div
    class="background relative flex min-h-[276px] items-center justify-center bg-lab-blue-1 bg-cover bg-no-repeat md:min-h-[330px] md:bg-center"
    :style="backgroundImage"
  >
    <div class="mx-auto max-w-3.8xl text-center">
      <h1
        class="w-full text-desktop-h5 font-semibold leading-8 text-white md:px-0 md:text-[44px] md:leading-10"
      >
        {{ props.pageHeading }}
      </h1>
      <p class="pt-4 text-sm leading-7 text-lab-blue-8 md:text-base">
        {{ props.pageSubtitle }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.background {
  box-shadow: inset 0 0 0 2000px rgba(0, 6, 57, 0.8);
}
</style>
