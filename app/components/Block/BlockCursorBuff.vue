<script setup lang="ts">
const { t } = useI18n();
const { isNerd } = useSiteMode();
</script>

<template>
  <BasePanel
    :title="isNerd ? t('cursorBuff.title') : t('portfolio.craftTitle')"
    :variant="isNerd ? 'highlight' : 'default'"
    :tag="isNerd ? t('cursorBuff.badge') : undefined"
  >
    <p class="cursorBuff__text">{{ $t('cursorBuff.text') }}</p>
    <span class="cursorBuff__tag">{{ $t('cursorBuff.tag') }}</span>
  </BasePanel>
</template>

<style lang="scss" scoped>
.cursorBuff__text {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: $colorText;
}

.cursorBuff__tag {
  font-size: 0.8rem;
  color: $colorAccentTeal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>