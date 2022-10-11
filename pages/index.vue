<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t('meta.title'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('meta.description')
    }
  ]
});
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center">
    <!--Rich Text 1-->
    <RichText
      :section-title="$t('richText1.title')"
      :section-content="$t('richText1.content')"
      has-buttons
      class="py-15 px-4 md:pt-10 md:pb-20"
    >
      <template #buttons>
        <Button
          :text="$t('richText1.btn1')"
          path="#customers"
          class="mr-5"
          style-type="primary"
          type="button"
          :is-link="false"
        />
        <Button
          :text="$t('richText1.btn2')"
          path="#workflow"
          style-type="secondary"
          type="button"
          :is-link="false"
        />
      </template>
    </RichText>
    <!--Rich Text 2-->
    <RichText
      :section-title="$t('richText2.title')"
      :section-content="$t('richText2.content')"
      has-buttons
      bg-color="bg-lab-blue-10"
      class="py-10 px-4 md:py-15"
    >
      <template #buttons>
        <div class="flex flex-col">
          <NuxtLink
            :to="localePath('contact')"
            class="m-auto m-auto min-w-27 max-w-fit rounded border-2 border-lab-yellow bg-lab-yellow py-2 px-5 text-sm font-semibold leading-7 text-lab-blue-1 transition-colors hover:bg-white active:bg-lab-yellow-dark active:text-white sm:py-2.5 sm:px-10 md:text-base"
          >
            {{ $t('richText2.btn1') }}
          </NuxtLink>
          <NuxtLink
            class="m-auto min-w-27 rounded py-2 px-5 pt-5 pt-9 text-sm font-semibold leading-7 text-lab-blue-1 underline underline-offset-1 transition-colors sm:py-2.5 sm:px-10 md:pt-9 md:text-base"
            to="mailto:hello@x.cc"
          >
            {{ $t('richText2.btn2') }} hello@x.cc
          </NuxtLink>
        </div>
      </template>
    </RichText>
  </div>
</template>
