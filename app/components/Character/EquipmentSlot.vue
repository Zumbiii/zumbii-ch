<script setup lang="ts">
const props = defineProps<{
  name: string;
  effect: string;
  rarity: string;
  slotLabel: string;
}>();

const rarityClass = computed(() => `equipment--${props.rarity}`);
</script>

<template>
  <div class="equipment" :class="rarityClass">
    <span class="equipment__slot">{{ slotLabel }}</span>
    <strong class="equipment__name">{{ name }}</strong>
    <p class="equipment__effect">{{ effect }}</p>
    <span class="equipment__rarity">{{ $t('common.rarity') }}: {{ rarity }}</span>
  </div>
</template>

<style lang="scss" scoped>
.equipment {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px dashed $colorBorderGoldDim;
  background: rgba(0, 0, 0, 0.2);

  &__slot {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $colorTextMuted;
  }

  &__name {
    display: block;
    font-family: 'Cinzel', serif;
    margin: 0.35rem 0;
    color: $colorText;
  }

  &__effect {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    color: $colorTextMuted;
  }

  &__rarity {
    font-size: 0.75rem;
    text-transform: capitalize;
  }

  &--rare .equipment__name {
    color: $colorRare;
  }

  &--epic .equipment__name {
    color: $colorEpic;
  }

  &--legendary .equipment__name {
    color: $colorLegendary;
  }
}
</style>