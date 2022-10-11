<script setup lang="ts">
import { primary, secondary } from '~/store/store';

interface ButtonSubmitProps {
  text?: string;
  styleType?: 'primary' | 'secondary';
  type: 'button' | 'submit';
  isUppercase?: boolean;
}

const props = defineProps<ButtonSubmitProps>();
</script>

<template>
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
</template>
