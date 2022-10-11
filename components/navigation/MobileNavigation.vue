<script setup lang="ts">
import { handleMenu, closeMenu, isMenuOpen } from '~/store/store';
</script>

<template>
  <nav
    class="flex h-full w-full items-center justify-between px-4 py-3 text-center text-black"
  >
    <IconsLogo />
    <div class="nav__wrapper flex items-center">
      <ButtonContact class="mr-5 font-medium"
        >{{ $t('navigation.contactBtn') }}
      </ButtonContact>
      <IconsHamburger @click="handleMenu()" />
    </div>
    <Transition name="mobile-nav">
      <NavigationPanel v-if="isMenuOpen" class="" @close-menu="closeMenu()" />
    </Transition>
  </nav>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease-in-out;
}

.mobile-nav-enter-from {
  left: -100%;
  opacity: 0;
}

.mobile-nav-leave-to {
  left: -100%;
  opacity: 0;
}
</style>
