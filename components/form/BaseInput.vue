<script setup lang="ts">
interface InputProps {
  label?: string;
  modelValue: string;
  placeholder: string;
  inputType: 'text' | 'email' | 'number' | 'tel';
}

interface InputEmit {
  (event: 'update:modelValue', value: string | number): void;

  (
    event: 'validateInput',
    value1: HTMLInputElement,
    value2: HTMLInputElement
  ): void;
}

const props = defineProps<InputProps>();
const emit = defineEmits<InputEmit>();

const updateValue = (value: string) => emit('update:modelValue', value);
const validateInput = (value1: HTMLInputElement, value2: HTMLInputElement) => {
  return emit('validateInput', value1, value2);
};
</script>

<template>
  <label class="relative w-full">
    <span
      v-if="props.label"
      class="absolute top-[-7px] mb-[-10px] h-fit text-xs text-lab-red-1 md:text-sm"
    >
      {{ props.label }}
    </span>
    <input
      :type="props.inputType"
      :value="modelValue"
      :placeholder="props.placeholder"
      autocomplete="off"
      class="h1-11 my-4.5 w-full appearance-none rounded-lg border-2 border-lab-black-7 py-2.5 px-3.5 text-base outline-none focus:border-lab-black-2 focus:font-medium md:h-12"
      :class="props.label && 'border-lab-red-1'"
      min="0"
      @blur="validateInput($event.target, $event.target.value)"
      @input="updateValue($event.target.value)"
    />
  </label>
</template>
