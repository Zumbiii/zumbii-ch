<script setup lang="ts">
const { t } = useI18n();
const { character, lootLabel } = useCharacterData();

useSeoMeta({
  title: () => t('meta.lootTitle'),
  description: () => t('lootPage.intro'),
});
</script>

<template>
  <div class="lootPage">
    <h1 class="pageTitle">{{ $t('nav.loot') }}</h1>
    <p class="lootPage__intro">{{ $t('lootPage.intro') }}</p>
    <div class="lootPage__grid">
      <LootCard
        v-for="item in character.loot"
        :key="item.id"
        :name="t(`${lootLabel(item.id)}.name`)"
        :description="t(`${lootLabel(item.id)}.description`)"
        :rarity="item.rarity"
        :url="item.url"
        :tags="item.tags"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lootPage {
  &__intro {
    color: $colorTextMuted;
    max-width: 42rem;
  }

  &__grid {
    display: grid;
    gap: 1rem;
    margin-top: 1.5rem;

    @include up($breakpointMd) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include up($breakpointLg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>