<script setup lang="ts">
import { closeMenu } from '~/store/store';

const route = useRoute();
const localePath = useLocalePath();
</script>

<template>
  <ul
    class="navigation__items flex w-full flex-col py-16 px-4 sm:w-fit sm:flex-row md:py-0 md:px-0"
  >
    <li
      class="list-none border-t border-lab-blue-2 py-5 text-lab-blue-6 sm:pr-4 md:pr-8"
    >
      <NuxtLink
        :to="localePath('/')"
        :class="{ isActive: route.path === '/' }"
        @click="closeMenu()"
      >
        {{ $t('navigation.homeLink') }}
      </NuxtLink>
    </li>
    <li
      class="list-none border-t border-lab-blue-2 py-5 text-lab-blue-6 sm:pr-4 md:pr-8"
    >
      <NuxtLink
        :to="`${localePath('/')}#services`"
        :class="{ isActive: route.hash === '#services' }"
        @click="closeMenu()"
      >
        {{ $t('navigation.servicesLink') }}
      </NuxtLink>
    </li>
    <li
      class="list-none border-t border-lab-blue-2 py-5 text-lab-blue-6 sm:pr-4 md:pr-8"
    >
      <NuxtLink
        :to="`${localePath('/')}#customers`"
        :class="{ isActive: route.hash === '#customers' }"
        @click="closeMenu()"
      >
        {{ $t('navigation.casesLink') }}
      </NuxtLink>
    </li>
  </ul>
</template>
