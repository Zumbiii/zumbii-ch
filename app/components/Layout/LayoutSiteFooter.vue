<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <footer class="siteFooter">
    <NuxtLink :to="localePath('/impressum')">{{ $t('contact.legalImprint') }}</NuxtLink>
    <NuxtLink :to="localePath('/privacy')">{{ $t('contact.legalPrivacy') }}</NuxtLink>
  </footer>
</template>

<style lang="scss" scoped>
.siteFooter {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 1rem 6rem;
  font-size: 0.85rem;

  a {
    color: $colorTextMuted;
    text-decoration: none;

    &:hover {
      color: $colorAccentTeal;
    }
  }
}
</style>