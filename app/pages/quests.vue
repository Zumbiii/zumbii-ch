<script setup lang="ts">
import PortfolioFormats from '~/components/Portfolio/Formats.vue';

const { t } = useI18n();
const { isNerd } = useSiteMode();
const { character, raidLabel } = useCharacterData();

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.questsTitle' : 'portfolio.meta.formatsTitle'),
  description: () => t(isNerd.value ? 'questsPage.intro' : 'portfolio.formats.intro'),
});
</script>

<template>
  <PortfolioFormats v-if="!isNerd" />
  <div v-else class="questsPage">
    <h1 class="pageTitle">{{ $t('nav.quests') }}</h1>
    <p class="questsPage__intro">{{ $t('questsPage.intro') }}</p>

    <BasePanel :title="$t('questsPage.formatTitle')">
      <p>{{ $t('questsPage.formatText') }}</p>
    </BasePanel>

    <BasePanel :title="$t('questsPage.loadoutTitle')" class="questsPage__loadout">
      <p>{{ $t('questsPage.loadoutItems') }}</p>
    </BasePanel>

    <BasePanel :title="$t('questsPage.statsTitle')">
      <ul class="questsPage__raids">
        <li v-for="raid in character.raids" :key="raid.id">
          <strong>{{ t(`${raidLabel(raid.id)}.title`) }}</strong>
          — {{ t(`${raidLabel(raid.id)}.venue`) }}
          <span>({{ raid.players }} {{ $t('questsPage.players') }})</span>
        </li>
      </ul>
    </BasePanel>

    <BaseButton :href="$t('questsPage.externalUrl')" external>
      {{ $t('questsPage.externalCta') }}
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.questsPage {
  &__intro {
    color: $colorTextMuted;
    max-width: 42rem;
  }

  &__loadout {
    margin: 1rem 0;
  }

  &__raids {
    margin: 0;
    padding-left: 1.1rem;
    color: $colorTextMuted;

    span {
      color: $colorAccentTeal;
    }
  }
}
</style>