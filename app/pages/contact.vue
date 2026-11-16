<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();

useSeoMeta({
  title: () => t('meta.contactTitle'),
  description: () => t('contact.intro'),
});

const mailtoLink = computed(() => {
  const to = config.public.contactEmail || 'hello@example.com';
  return `mailto:${to}`;
});
</script>

<template>
  <div class="contactPage">
    <h1 class="pageTitle">{{ $t('nav.contact') }}</h1>
    <p class="contactPage__intro">{{ $t('contact.intro') }}</p>
    <p class="contactPage__mailto">
      {{ $t('contact.mailtoHint') }}
      <a :href="mailtoLink">{{ config.public.contactEmail }}</a>
    </p>
    <FormContact />
  </div>
</template>

<style lang="scss" scoped>
.contactPage {
  &__intro,
  &__mailto {
    color: $colorTextMuted;
    max-width: 42rem;
  }
}
</style>