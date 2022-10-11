<script lang="ts" setup="">
interface TextProps {
  title: string;
  content: string;
}

const props = defineProps<TextProps>();
</script>

<template>
  <div class="mx-auto max-w-3.8xl py-5 md:py-7.5">
    <ClientOnly>
      <h2
        class="pb-5 text-xl font-medium leading-6 md:pb-4 md:text-desktop-h5 md:leading-8"
      >
        {{ props.title }}
      </h2>
      <p class="text-sm leading-6 md:text-base md:leading-7">
        {{ props.content }}
      </p>
    </ClientOnly>
  </div>
</template>
