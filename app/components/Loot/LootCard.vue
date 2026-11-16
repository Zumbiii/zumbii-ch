<script setup lang="ts">
const props = defineProps<{
  name: string;
  description: string;
  rarity: string;
  url: string;
  tags: string[];
}>();

const rarityClass = computed(() => `lootCard--${props.rarity}`);
</script>

<template>
  <article class="lootCard" :class="rarityClass">
    <header class="lootCard__head">
      <span class="lootCard__rarity">{{ rarity }}</span>
      <h3 class="lootCard__name">{{ name }}</h3>
    </header>
    <p class="lootCard__desc">{{ description }}</p>
    <ul class="lootCard__tags">
      <li v-for="tag in tags" :key="tag" class="lootCard__tag">{{ tag }}</li>
    </ul>
    <BaseButton :href="url" external variant="ghost">{{ $t('common.learnMore') }}</BaseButton>
  </article>
</template>

<style lang="scss" scoped>
.lootCard {
  border: 1px solid $colorBorderGoldDim;
  border-radius: 10px;
  padding: 1.25rem;
  background: $colorBgPanelAlt;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;

  &__rarity {
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: $colorTextMuted;
  }

  &__name {
    margin: 0.25rem 0 0;
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
  }

  &__desc {
    margin: 0;
    flex: 1;
    color: $colorTextMuted;
    font-size: 0.95rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid $colorBorderGoldDim;
    border-radius: 4px;
    color: $colorAccentTeal;
  }

  &--epic &__name {
    color: $colorEpic;
  }

  &--legendary {
    border-color: rgba(245, 158, 11, 0.45);
    box-shadow: 0 0 24px rgba(245, 158, 11, 0.08);

    .lootCard__name {
      color: $colorLegendary;
    }
  }
}
</style>