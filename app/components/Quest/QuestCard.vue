<script setup lang="ts">
defineProps<{
  title: string;
  status?: 'active' | 'done';
}>();
</script>

<template>
  <div class="questCard" :class="`questCard--${status || 'active'}`">
    <span class="questCard__marker" aria-hidden="true">!</span>
    <p class="questCard__title">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.questCard {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  border-left: 3px solid $colorAccentTeal;
  background: rgba(45, 212, 191, 0.06);
  border-radius: 0 6px 6px 0;

  &__marker {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $colorAccentTeal;
    color: #042f2e;
    font-weight: 800;
    border-radius: 4px;
    flex-shrink: 0;
  }

  &__title {
    margin: 0;
    font-weight: 500;
  }
}
</style>