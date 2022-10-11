<script setup lang="ts">
interface ButtonProps {
  path?: string;
  text?: string;
  styleType?: 'primary' | 'secondary';
  type: 'button' | 'submit';
  isUppercase?: boolean;
  isLink?: boolean;
}

const props = defineProps<ButtonProps>();

const localePath = useLocalePath();
const primary = `bg-lab-yellow border-2 border-lab-yellow hover:bg-white active:bg-lab-yellow-dark active:text-white`;
const secondary = `bg-lab-gray-1 border-2 border-lab-yellow hover:bg-lab-yellow active:bg-lab-yellow-dark active:text-white`;
</script>

<template>
  <NuxtLink class="m-auto" :to="isLink ? localePath(props.path) : props.path">
    <button
      :type="props.type"
      :class="[
        props.styleType === 'primary' ? primary : secondary,
        props.isUppercase && 'uppercase'
      ]"
      class="min-w-27 max-w-fit rounded py-2 px-5 text-sm font-semibold leading-7 text-lab-blue-1 transition-colors sm:py-2.5 sm:px-10 md:text-base"
    >
      <slot>{{ props.text || 'Default text' }}</slot>
    </button>
  </NuxtLink>
</template>
