<script setup lang="ts">
const { t } = useI18n();
const { isNerd } = useSiteMode();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t('legal.privacyTitle'),
});
</script>

<template>
  <div>
    <h1 class="pageTitle">{{ $t('legal.privacyTitle') }}</h1>
    <p>{{ $t('legal.privacyPlaceholder') }}</p>
    <BaseButton :to="localePath('/')" variant="ghost">
      {{ isNerd ? $t('common.backToHub') : $t('portfolio.backHome') }}
    </BaseButton>
  </div>
</template>