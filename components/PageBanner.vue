<script setup lang="ts">
interface PageBannerProps {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
  pageHeading: string;
  pageSubtitle?: string;
}

const props = defineProps<PageBannerProps>();
</script>

<template>
  <div class="background relative bg-lab-blue-1 md:h-[330px]">
    <Image
      :img="props.srcMobile"
      :alt="props.alt"
      width="640"
      height="460"
      sizes="sm:100vw"
      fit="contain"
      class="flex h-full w-full object-cover object-top opacity-20 md:hidden"
    />
    <Image
      :img="props.srcDesktop"
      :alt="props.alt"
      width="1440"
      height="330"
      sizes="md:100vw lg:100vw xxl:100vw"
      class="hidden h-full w-full opacity-20 md:flex md:object-cover"
    />
    <div
      class="absolute top-[50%] left-[50%] w-full max-w-3.8xl translate-x-[-50%] translate-y-[-50%] text-center text-white"
    >
      <h1
        class="w-full px-4 text-desktop-h5 font-semibold leading-8 md:px-0 md:text-[44px] md:leading-9"
      >
        {{ props.pageHeading }}
      </h1>
      <p class="px-4 pt-4 text-sm leading-7 text-lab-blue-8 md:text-base">
        {{ props.pageSubtitle }}
      </p>
    </div>
  </div>
</template>
