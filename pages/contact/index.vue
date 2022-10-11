<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t('contact.metaTitle'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('contact.metaDescription')
    }
  ]
});
</script>

<template>
  <Form />
</template>
