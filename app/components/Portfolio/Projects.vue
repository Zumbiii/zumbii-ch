<script setup lang="ts">
const { t } = useI18n();
const { character, lootLabel } = useCharacterData();

const descriptionFor = (id: string) => {
  if (id === 'zumbii') return t('portfolio.projects.zumbii');
  return t(`${lootLabel(id)}.description`);
};
</script>

<template>
  <div class="portfolioProjects">
    <header class="portfolioProjects__head">
      <h1 class="pageTitle">{{ t('portfolio.nav.projects') }}</h1>
      <p>{{ t('portfolio.projects.intro') }}</p>
    </header>
    <ul class="portfolioProjects__grid">
      <li v-for="item in character.loot" :key="item.id">
        <h2>{{ t(`${lootLabel(item.id)}.name`) }}</h2>
        <p>{{ descriptionFor(item.id) }}</p>
        <ul class="portfolioProjects__tags">
          <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
        </ul>
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          {{ t('common.learnMore') }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.portfolioProjects {
  padding-top: 1.5rem;

  &__head {
    max-width: 40rem;
    margin-bottom: 1.5rem;

    p {
      color: #a1a1aa;
    }
  }

  &__grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1rem;

    @include up($breakpointMd) {
      grid-template-columns: 1fr 1fr;
    }

    @include up($breakpointLg) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    > li {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-height: 100%;
      padding: 1.25rem;
      background: #17181c;
      border: 1px solid #2c2e33;
      border-radius: 14px;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #a1a1aa;
    flex: 1;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      background: #22242a;
      color: #a1a1aa;
      font-size: 0.75rem;
    }
  }

  a {
    color: #f4f4f5;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
