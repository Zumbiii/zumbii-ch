<script setup lang="ts">
const { t } = useI18n();
const { isNerd } = useSiteMode();
const config = useRuntimeConfig();

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.contactTitle' : 'portfolio.meta.contactTitle'),
  description: () => t(isNerd.value ? 'contact.intro' : 'portfolio.contact.intro'),
});

const mailtoLink = computed(() => {
  const to = config.public.contactEmail || 'hello@example.com';
  return `mailto:${to}`;
});
</script>

<template>
  <div class="contactPage">
    <h1 class="pageTitle">{{ isNerd ? $t('nav.contact') : $t('portfolio.nav.contact') }}</h1>
    <p class="contactPage__intro">
      {{ isNerd ? $t('contact.intro') : $t('portfolio.contact.intro') }}
    </p>
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