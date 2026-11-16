<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('meta.homeTitle'),
  description: () => t('meta.homeDescription'),
});
</script>

<template>
  <div>
    <CharacterSheet />
    <BlockCursorBuff class="homeCursorBuff" />
  </div>
</template>

<style lang="scss" scoped>
.homeCursorBuff {
  margin-top: 2rem;
}
</style>