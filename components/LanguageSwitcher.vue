<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const changeLocalePath = () => {
  router.push({ path: switchLocalePath(locale.value) });
};
</script>

<template>
  <div class="mt-[30px] md:mt-0">
    <label>
      <select
        v-model="locale"
        class="mt-2 bg-lab-blue-2 p-2 text-white"
        @change="changeLocalePath"
      >
        <option v-for="{ code, name } in locales" :key="code" :value="code">
          {{ name }}
        </option>
      </select>
    </label>
  </div>
</template>
