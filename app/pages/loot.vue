<script setup lang="ts">
import PortfolioProjects from '~/components/Portfolio/Projects.vue';

const { t } = useI18n();
const { isNerd } = useSiteMode();
const { character, lootLabel } = useCharacterData();

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.lootTitle' : 'portfolio.meta.projectsTitle'),
  description: () => t(isNerd.value ? 'lootPage.intro' : 'portfolio.projects.intro'),
});
</script>

<template>
  <PortfolioProjects v-if="!isNerd" />
  <div v-else class="lootPage">
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