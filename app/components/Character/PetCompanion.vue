<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  buff: string;
  level: number;
}>();
</script>

<template>
  <article class="pet">
    <figure class="pet__icon" aria-hidden="true">🐱</figure>
    <div class="pet__body">
      <h3 class="pet__name">{{ name }}</h3>
      <p class="pet__role">{{ role }} · {{ $t('common.level') }} {{ level }}</p>
      <p class="pet__buff">{{ buff }}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.pet {
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  &__icon {
    font-size: 2.5rem;
    margin: 0;
    filter: drop-shadow(0 0 8px rgba(201, 162, 39, 0.4));
  }

  &__name {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    color: $colorBorderGold;
    margin: 0 0 0.25rem;
  }

  &__role {
    margin: 0 0 0.35rem;
    color: $colorTextMuted;
    font-size: 0.85rem;
  }

  &__buff {
    margin: 0;
    font-size: 0.9rem;
    color: $colorAccentTeal;
  }
}
</style>