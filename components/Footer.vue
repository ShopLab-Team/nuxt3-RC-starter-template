<script setup lang="ts">
const localePath = useLocalePath();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="flex w-full flex-col items-center justify-center text-black">
    <div
      class="flex w-full place-content-center bg-lab-blue-1 md:min-h-[230px] md:flex-row"
    >
      <div
        class="ml-[20px] mb-[40px] flex w-[975px] flex-col md:m-auto md:flex-row md:gap-[150px]"
      >
        <div class="flex w-full flex-col text-[14px] md:w-1/2 md:text-[16px]">
          <h3 class="mb-[24px] mt-[40px] font-bold text-white">
            {{ $t('footer.learnMore') }}
          </h3>
          <div class="flex w-full flex-col text-lab-blue-6 md:flex-row">
            <div class="flex flex-col text-[14px] md:w-full md:text-[16px]">
              <NuxtLink :to="localePath('team')" class="mb-[24px] md:mb-[8px]">
                {{ $t('footer.team') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/')" class="mb-[24px] md:mb-[8px]">
                {{ $t('footer.getStarted') }}
              </NuxtLink>
              <NuxtLink :to="localePath('contact')" class="text-lab-blue-6">
                {{ $t('footer.contact') }}
              </NuxtLink>
            </div>
            <div class="flex flex-col text-[14px] md:w-1/4 md:text-[16px]">
              <NuxtLink
                :to="localePath('imprint')"
                class="mb-[24px] md:mb-[8px]"
              >
                {{ $t('footer.imprint') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('privacy')"
                class="mb-[24px] md:mb-[8px]"
              >
                {{ $t('footer.privacy') }}
              </NuxtLink>
              <NuxtLink
                to="https://www.google.com"
                target="_blank"
                class="mb-[24px] md:mb-[8px]"
              >
                {{ $t('footer.blog') }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-full text-[14px] text-lab-blue-6 md:w-1/3 md:text-[16px]">
          <h3 class="mb-[24px] mt-[40px] font-bold text-white">
            {{ $t('footer.company') }}
          </h3>
          <p class="leading-7 tracking-tighter text-lab-blue-6">
            {{ $t('footer.address.building') }}
          </p>
          <p class="leading-7 tracking-tighter text-lab-blue-6">
            {{ $t('footer.address.street') }}
          </p>
          <p class="leading-7 tracking-tighter text-lab-blue-6">
            {{ $t('footer.address.city') }}
          </p>
        </div>

        <div class="w-full text-[14px] md:w-1/3 md:text-[16px]">
          <h3 class="mb-[24px] mt-[40px] font-bold text-white">
            {{ $t('footer.followUs') }}
          </h3>
          <div class="phone_wrapper mb-[16px] flex w-full flex-row">
            <Image
              img="/images/footer/phone.png"
              alt="Phone Icon"
              class="mr-[12px] h-[20px] w-[20px]"
              sizes="xs:20px"
              loading="lazy"
            />
            <div
              class="text-wrapper flex flex-col text-[14px] text-lab-blue-6 md:text-[16px]"
            >
              <p class="text-[16px]">{{ $t('footer.phone') }}</p>
              <p class="text-[12px]">{{ $t('footer.schedule') }}</p>
            </div>
          </div>
          <div class="mail_wrapper flex w-full flex-row">
            <Image
              img="/images/footer/mail.png"
              alt="Mail Icon"
              class="mr-[12px] h-[20px] w-[20px]"
              sizes="xs:20px"
              loading="lazy"
            />
            <div
              class="text-wrapper flex flex-col text-[14px] text-lab-blue-6 md:text-[16px]"
            >
              <p class="text-[16px]">hello@email.cc</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
    <div
      class="flex w-full flex-col justify-center bg-lab-blue-2 text-center md:min-h-[48px] md:flex-row"
    >
      <p
        class="m-auto mb-[4px] mt-[4px] w-[90%] self-center border-b border-[#4D5285] pb-[4px] text-[13px] text-white md:m-[0] md:mb-[0] md:mt-[0] md:w-auto md:border-0 md:pb-[0] md:text-[16px]"
      >
        ©{{ currentYear }} {{ $t('footer.rights1') }}
      </p>
      <p class="mx-[4px] hidden self-center text-white md:flex">-</p>
      <p
        class="m-auto mb-[4px] w-[90%] self-center border-b border-[#4D5285] pb-[4px] text-[13px] text-white md:m-[0] md:mb-[0] md:w-auto md:border-0 md:pb-[0] md:text-[16px]"
      >
        {{ $t('footer.rights2') }}
      </p>
      <p class="mx-[4px] hidden self-center text-white md:flex">-</p>

      <p
        class="mb-[4px] flex flex-row self-center text-[13px] text-white md:mb-[0] md:text-[16px]"
      >
        {{ $t('footer.rights3') }}
      </p>
    </div>
  </footer>
</template>
