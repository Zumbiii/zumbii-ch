<script setup lang="ts">
const props = defineProps<{
  percent: number;
  label: string;
}>();

const clampedPercent = computed(() =>
  Math.min(100, Math.max(0, props.percent)),
);

const displayPercent = computed(() => `${clampedPercent.value}%`);
</script>

<template>
  <div class="xpBar">
    <div class="xpBar__header">
      <span class="xpBar__label">{{ label }}</span>
      <span class="xpBar__value">{{ displayPercent }}</span>
    </div>
    <div
      class="xpBar__track"
      role="progressbar"
      :aria-valuenow="clampedPercent"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="xpBar__fill" :style="{ width: displayPercent }" />
    </div>
    <div class="xpBar__glow" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.xpBar {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.35rem;
    font-size: 0.85rem;
    color: $colorTextMuted;
  }

  &__track {
    height: 10px;
    background: #0d1219;
    border: 1px solid $colorBorderGoldDim;
    border-radius: 999px;
    overflow: hidden;
  }

  &__fill {
    height: 100%;
    background: linear-gradient(90deg, #0d9488, $colorAccentTeal);
    border-radius: inherit;
    transition: width 0.6s ease;
  }

  &__glow {
    margin-top: 0.25rem;
    height: 2px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    background: $colorAccentTeal;
    opacity: 0.35;
    animation: xpPulse 2.5s ease-in-out infinite;
  }
}
</style>