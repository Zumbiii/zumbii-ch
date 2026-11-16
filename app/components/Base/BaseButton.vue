<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'ghost';
    external?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    variant: 'primary',
    external: false,
    disabled: false,
  },
);

const isLink = computed(() => Boolean(props.to || props.href));
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="baseButton"
    :class="[`baseButton--${variant}`]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="baseButton"
    :class="[`baseButton--${variant}`]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="baseButton"
    :class="[`baseButton--${variant}`]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.baseButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;

  &--primary {
    background: linear-gradient(180deg, #2a3f52, #1a2836);
    border-color: $colorBorderGold;
    color: $colorText;

    &:hover:not(:disabled) {
      border-color: $colorAccentTeal;
      color: $colorAccentTeal;
    }
  }

  &--ghost {
    background: transparent;
    border-color: $colorBorderGoldDim;
    color: $colorTextMuted;

    &:hover:not(:disabled) {
      color: $colorText;
      border-color: $colorBorderGold;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>