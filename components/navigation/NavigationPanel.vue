<script setup lang="ts">
import { closeMenu } from '~/store/store';
</script>

<template>
  <div class="fixed left-0 top-0 z-10 h-full w-full max-w-xs">
    <div class="navigation-panel__wrapper relative z-10 h-full bg-lab-blue-1">
      <div class="navigation-panel__header flex justify-end py-4 px-5">
        <IconsClose class="cursor-pointer" @click="closeMenu()" />
      </div>

      <div
        class="navigation-panel__body flex flex h-5/6 flex-col items-center justify-center"
      >
        <IconsLogo />
        <NavigationLinkItems />
        <ButtonContact class="h-9 font-semibold" @click="closeMenu()"
          >{{ $t('contactBtn') }}
        </ButtonContact>
      </div>
    </div>

    <div
      class="navigation-panel__overlay fixed inset-0 bg-black bg-opacity-50"
      @click="closeMenu()"
    ></div>
  </div>
</template>
