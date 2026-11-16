<script setup lang="ts">
defineProps<{
  title?: string;
  tag?: string;
  variant?: 'default' | 'highlight';
}>();
</script>

<template>
  <section
    class="basePanel"
    :class="{ 'basePanel--highlight': variant === 'highlight' }"
  >
    <header v-if="title || tag" class="basePanel__head">
      <span v-if="tag" class="basePanel__tag">{{ tag }}</span>
      <h2 v-if="title" class="basePanel__title">{{ title }}</h2>
    </header>
    <div class="basePanel__body">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.basePanel {
  background: $colorBgPanel;
  border: 1px solid $colorBorderGoldDim;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

  &--highlight {
    border-color: $colorAccentTealDim;
    background: linear-gradient(145deg, $colorBgPanelAlt, $colorBgPanel);
  }

  &__head {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid $colorBorderGoldDim;
  }

  &__tag {
    display: inline-block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: $colorAccentTeal;
    margin-bottom: 0.35rem;
  }

  &__title {
    font-size: 1.15rem;
    color: $colorBorderGold;
    margin: 0;
  }
}
</style>