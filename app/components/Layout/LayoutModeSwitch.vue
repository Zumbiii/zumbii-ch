<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'hud' | 'plain';
  }>(),
  { variant: 'plain' },
);

const { t } = useI18n();
const { isNerd, setMode } = useSiteMode();
</script>

<template>
  <div
    class="modeSwitch"
    :class="`modeSwitch--${variant}`"
    role="group"
    :aria-label="t('mode.label')"
  >
    <button
      type="button"
      class="modeSwitch__option"
      :class="{ 'modeSwitch__option--active': !isNerd }"
      :aria-pressed="!isNerd"
      @click="setMode('normal')"
    >
      {{ t('mode.normal') }}
    </button>
    <button
      type="button"
      class="modeSwitch__option"
      :class="{ 'modeSwitch__option--active': isNerd }"
      :aria-pressed="isNerd"
      @click="setMode('nerd')"
    >
      {{ t('mode.nerd') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.modeSwitch {
  display: inline-flex;
  padding: 0.15rem;
  border-radius: 999px;
  gap: 0.1rem;

  &__option {
    border: 0;
    background: transparent;
    border-radius: 999px;
    padding: 0.3rem 0.7rem;
    font: inherit;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  &--plain {
    background: #22242a;
    border: 1px solid #2c2e33;

    .modeSwitch__option {
      color: #a1a1aa;
    }

    .modeSwitch__option--active {
      background: #f4f4f5;
      color: #111214;
    }
  }

  &--hud {
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid $colorBorderGoldDim;

    .modeSwitch__option {
      color: $colorTextMuted;
    }

    .modeSwitch__option--active {
      background: rgba(201, 162, 39, 0.16);
      color: $colorBorderGold;
    }
  }
}
</style>
