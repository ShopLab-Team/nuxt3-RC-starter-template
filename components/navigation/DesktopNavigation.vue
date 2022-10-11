<template>
  <nav
    class="flex h-full w-full items-center justify-between px-4 py-3 text-center text-black md:m-auto md:max-w-[1440px] md:px-16"
  >
    <IconsLogo class="w-full" />
    <div class="nav__wrapper flex w-full flex-row items-center justify-end">
      <NavigationLinkItems />
      <ButtonContact class="">{{ $t('navigation.contactBtn') }}</ButtonContact>
    </div>
  </nav>
</template>

<style>
.isActive {
  color: #fff;
}
</style>
