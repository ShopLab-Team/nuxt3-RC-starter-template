<script setup lang="ts">
definePageMeta({
  layout: 'success'
});
</script>

<template>
  <div
    class="flex h-full max-w-5xl flex-col items-center justify-center pb-15 pt-10"
  >
    <Image
      img="/images/pages/cuate.svg"
      alt="Phone Icon"
      class="mr-[12px] w-80"
      sizes="xs:100vw"
      loading="lazy"
    />
    <h1 class="px-4 pt-10 text-center text-xl font-bold md:text-desktop-h5">
      {{ $t('contact.successMessage') }}
    </h1>
  </div>
</template>
