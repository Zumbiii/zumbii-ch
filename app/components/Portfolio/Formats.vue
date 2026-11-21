<script setup lang="ts">
const { t } = useI18n();
const { character, raidLabel } = useCharacterData();
</script>

<template>
  <div class="portfolioFormats">
    <header class="portfolioFormats__head">
      <h1 class="pageTitle">{{ t('portfolio.nav.formats') }}</h1>
      <p>{{ t('portfolio.formats.intro') }}</p>
    </header>

    <section>
      <h2>{{ t('portfolio.formats.formatTitle') }}</h2>
      <p>{{ t('questsPage.formatText') }}</p>
    </section>

    <section>
      <h2>{{ t('portfolio.formats.setupTitle') }}</h2>
      <p>{{ t('questsPage.loadoutItems') }}</p>
    </section>

    <section>
      <h2>{{ t('portfolio.formats.statsTitle') }}</h2>
      <ul>
        <li v-for="raid in character.raids" :key="raid.id">
          <strong>{{ t(`${raidLabel(raid.id)}.title`) }}</strong>
          <span>{{ t(`${raidLabel(raid.id)}.venue`) }}</span>
          <span>{{ raid.players }} {{ t('questsPage.players') }}</span>
        </li>
      </ul>
    </section>

    <BaseButton :href="t('questsPage.externalUrl')" external>
      {{ t('questsPage.externalCta') }}
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.portfolioFormats {
  padding-top: 1.5rem;
  max-width: 42rem;

  &__head {
    margin-bottom: 2rem;

    p {
      color: #a1a1aa;
    }
  }

  section {
    padding-top: 1.25rem;
    margin-bottom: 0.5rem;
    border-top: 1px solid #2c2e33;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #d4d4d8;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: grid;
    gap: 0.15rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid #2c2e33;

    span {
      color: #a1a1aa;
      font-size: 0.95rem;
    }
  }
}
</style>
