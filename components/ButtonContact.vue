<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath('/contact')">
    <button
      class="h-full rounded border-2 border-lab-yellow bg-lab-yellow px-5 text-xs leading-7 text-lab-blue-1 transition-colors hover:bg-white active:bg-lab-yellow-dark active:text-white sm:text-sm sm:leading-7"
    >
      <slot>Default Button</slot>
    </button>
  </NuxtLink>
</template>
