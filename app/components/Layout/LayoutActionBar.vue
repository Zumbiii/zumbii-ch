<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <aside class="actionBar" aria-label="Quick actions">
    <BaseButton :to="localePath('/sidequest/myi')">{{ $t('nav.sidequestMyi') }}</BaseButton>
    <BaseButton :to="localePath('/contact')" variant="ghost">{{ $t('nav.contact') }}</BaseButton>
  </aside>
</template>

<style lang="scss" scoped>
.actionBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: rgba(10, 14, 20, 0.95);
  border-top: 1px solid $colorBorderGoldDim;
  z-index: 90;

  @include up($breakpointMd) {
    position: sticky;
    bottom: 1rem;
    left: auto;
    right: auto;
    width: min(1200px, 100% - 2rem);
    margin: 1rem auto 0;
    border: 1px solid $colorBorderGoldDim;
    border-radius: 8px;
    background: $colorBgPanel;
  }
}
</style>