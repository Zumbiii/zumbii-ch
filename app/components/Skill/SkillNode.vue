<script setup lang="ts">
const props = defineProps<{
  label: string;
  points: number;
  max: number;
  primary?: boolean;
}>();

const percent = computed(() => Math.round((props.points / props.max) * 100));
</script>

<template>
  <div class="skillNode" :class="{ 'skillNode--primary': primary }">
    <div class="skillNode__head">
      <span class="skillNode__label">{{ label }}</span>
      <span class="skillNode__points">{{ points }} / {{ max }}</span>
    </div>
    <div class="skillNode__bar" role="progressbar" :aria-valuenow="points" :aria-valuemax="max">
      <div class="skillNode__fill" :style="{ width: `${percent}%` }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skillNode {
  padding: 0.75rem;
  border: 1px solid $colorBorderGoldDim;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);

  &--primary {
    border-color: $colorAccentTealDim;
    box-shadow: inset 0 0 0 1px rgba(45, 212, 191, 0.1);
  }

  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  &__label {
    font-weight: 600;
  }

  &__points {
    color: $colorTextMuted;
    font-size: 0.8rem;
  }

  &__bar {
    height: 8px;
    background: #0d1219;
    border-radius: 999px;
    overflow: hidden;
  }

  &__fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, $colorAccentTeal);
    border-radius: inherit;
  }
}
</style>