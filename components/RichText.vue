<script setup lang="ts">
interface RichTextProps {
  sectionTitle: string;
  sectionContent?: string;
  hasButtons?: boolean;
  bgColor?: string;
}

const props = defineProps<RichTextProps>();
</script>

<template>
  <section class="flex w-full justify-center" :class="props.bgColor">
    <div class="max-w-[757px] text-center">
      <h2 class="pb-5 text-desktop-h4-medium md:pb-6">
        {{ props.sectionTitle }}
      </h2>
      <p class="text-sm leading-6 text-lab-black-3 md:text-base md:leading-7">
        {{ props.sectionContent }}
      </p>

      <div v-if="hasButtons" class="pt-9">
        <slot name="buttons"></slot>
      </div>
    </div>
  </section>
</template>
