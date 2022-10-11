<script setup lang="ts">
import { closeMenu } from '~/store/store';

interface LinkItemProps {
  page: {
    name: string;
    path: string;
  };
  length: number;
  index: number;
  pageName: string;
}

const props = defineProps<LinkItemProps>();
const route = useRoute();
const localePath = useLocalePath();

const isActive = () =>
  route.path === props.page.path ? 'text-white' : 'text-lab-blue-6';
const isLast = () => ({
  'border-b': props.length - 1 === props.index
});
</script>

<template>
  <li
    :class="[isActive(), isLast()]"
    class="navigation__item w-full border-t border-lab-blue-2 py-5 sm:border-0 sm:pr-4 md:pr-8"
  >
    <NuxtLink :to="localePath(props.page.path)" @click="closeMenu()">
      {{ props.pageName }}
    </NuxtLink>
  </li>
</template>
