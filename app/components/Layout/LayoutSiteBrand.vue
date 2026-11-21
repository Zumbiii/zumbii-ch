<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'hud' | 'portfolio';
  }>(),
  { variant: 'portfolio' },
);

const localePath = useLocalePath();
const { t } = useI18n();

const logoSrc = computed(() =>
  props.variant === 'hud' ? '/images/logo-gold.png' : '/images/logo-light.png',
);
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="siteBrand"
    :class="`siteBrand--${props.variant}`"
    :aria-label="t('nav.logoAlt')"
  >
    <img
      class="siteBrand__mark"
      :src="logoSrc"
      width="200"
      height="230"
      alt=""
      loading="eager"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.siteBrand {
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;

  &__mark {
    display: block;
    width: auto;
    height: 2rem;
  }

  &--hud .siteBrand__mark {
    filter: drop-shadow(0 0 10px rgba(201, 162, 39, 0.45));
  }
}
</style>