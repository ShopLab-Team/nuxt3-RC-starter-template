<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <header class="h-12 w-full bg-lab-blue-1 md:h-16">
      <!-- Mobile Nav -->
      <LazyNavigationMobileNavigation class="flex sm:hidden" />
      <!-- Desktop Nav -->
      <LazyNavigationDesktopNavigation class="hidden sm:flex" />
    </header>
    <main class="mx-auto flex w-full flex-grow items-center justify-center">
      <slot />
    </main>
    <footer class="flex w-full flex-col items-center justify-center text-black">
      <Footer />

      <div
        class="flex w-full flex-col justify-center bg-lab-blue-2 text-center md:min-h-[48px] md:flex-row"
      >
        <p
          class="m-auto mb-[4px] mt-[4px] w-[90%] self-center border-b border-[#4D5285] pb-[4px] text-[16px] text-[#4D5285] md:m-[0] md:mb-[0] md:mt-[0] md:w-auto md:border-0 md:pb-[0] md:text-[16px]"
        >
          ©{{ currentYear }} {{ $t('footer.rights1') }}
        </p>
        <p class="mx-[4px] hidden self-center text-[#4D5285] md:flex">-</p>
        <p
          class="m-auto mb-[4px] w-[90%] self-center border-b border-[#4D5285] pb-[4px] text-[16px] text-[#4D5285] md:m-[0] md:mb-[0] md:w-auto md:border-0 md:pb-[0] md:text-[16px]"
        >
          {{ $t('footer.rights2') }}
        </p>
        <p class="mx-[4px] hidden self-center text-[#4D5285] md:flex">-</p>

        <p
          class="mb-[4px] flex flex-row self-center text-[16px] text-[#4D5285] md:mb-[0] md:text-[16px]"
        >
          {{ $t('footer.rights3') }}
          <Image
            img="/images/footer/heart.png"
            alt="Heart Icon"
            loading="lazy"
            class="ml-[5px] h-[12px] w-[13px] self-center"
          />
        </p>
      </div>
    </footer>
  </div>
</template>
<style>
#__nuxt {
  height: 100vh;
}
</style>
