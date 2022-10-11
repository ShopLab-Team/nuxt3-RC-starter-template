<script setup lang="ts">
interface ImageProps {
  img: string;
  alt: string;
  sizes?: string;
  fit?: string;
}

const props = defineProps<ImageProps>();
</script>

<template>
  <nuxt-img
    :key="props.img"
    class="object-contain"
    :src="props.img"
    :alt="props.alt"
    format="webp"
    quality="80"
    :sizes="props.sizes"
    :fit="props.fit"
  />
</template>
