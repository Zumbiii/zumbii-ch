<template>
  <BasePanel :title="$t('cursorBuff.title')" variant="highlight" tag="Buff">
    <p class="cursorBuff__text">{{ $t('cursorBuff.text') }}</p>
    <span class="cursorBuff__tag">{{ $t('cursorBuff.tag') }}</span>
  </BasePanel>
</template>

<style lang="scss" scoped>
.cursorBuff__text {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
}

.cursorBuff__tag {
  font-size: 0.8rem;
  color: $colorAccentTeal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>