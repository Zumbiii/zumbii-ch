<script setup lang="ts">
const { mode, isNerd } = useSiteMode();

useHead(
  computed(() => ({
    htmlAttrs: {
      'data-site-mode': mode.value,
    },
  })),
);
</script>

<template>
  <div class="layoutShell">
    <div v-if="isNerd" class="gameBackdrop" aria-hidden="true" />
    <LayoutHudNav v-if="isNerd" />
    <LayoutPortfolioNav v-else />
    <main class="layoutMain">
      <slot />
    </main>
    <LayoutActionBar v-if="isNerd" />
    <LayoutSiteFooter />
  </div>
</template>