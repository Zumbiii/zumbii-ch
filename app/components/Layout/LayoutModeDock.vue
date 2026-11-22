<script setup lang="ts">
const { isNerd } = useSiteMode();
</script>

<template>
  <div class="modeDock" :class="{ 'modeDock--nerd': isNerd }">
    <LayoutModeSwitch :variant="isNerd ? 'hud' : 'plain'" />
  </div>
</template>

<style lang="scss" scoped>
.modeDock {
  position: fixed;
  left: 50%;
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  padding: 0.15rem;
  border-radius: 999px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);

  &--nerd {
    bottom: calc(4.75rem + env(safe-area-inset-bottom, 0px));

    @include up($breakpointMd) {
      bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
    }
  }
}
</style>