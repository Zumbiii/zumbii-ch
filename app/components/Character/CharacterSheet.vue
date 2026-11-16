<script setup lang="ts">
const { t } = useI18n();
const {
  character,
  equipmentLabel,
  achievementLabel,
  questLabel,
  reputationLabel,
  hobbyLabel,
} = useCharacterData();

const slotLabels: Record<string, string> = {
  mainHand: 'Main Hand',
  offHand: 'Off Hand',
  trinket: 'Trinket',
};

const showCard = ref(false);
</script>

<template>
  <div class="characterSheet">
    <div class="characterSheet__hero">
      <div class="characterSheet__portraitWrap">
        <img
          src="/images/character/placeholder.svg"
          width="480"
          height="640"
          class="characterSheet__portrait"
          loading="eager"
          :alt="t('character.portraitAlt')"
        />
      </div>
      <div class="characterSheet__intro">
        <p class="characterSheet__level">
          {{ $t('common.level') }} {{ character.level }}
        </p>
        <h1 class="pageTitle">{{ t('character.name') }}</h1>
        <p class="characterSheet__title">{{ t('character.title') }}</p>
        <p class="characterSheet__subtitle">{{ t('character.subtitle') }}</p>
        <p class="characterSheet__region">{{ t('character.mapRegion') }}</p>
        <CharacterXpBar
          :percent="character.xpPercent"
          :label="`${$t('common.xp')} · ${character.yearsExperience} ${$t('common.years')}`"
        />
        <p class="characterSheet__pitch">{{ t('character.pitch') }}</p>
        <p class="characterSheet__secondary">{{ t('character.secondaryClass') }}</p>
      </div>
    </div>

    <div class="characterSheet__grid">
      <BasePanel :title="$t('home.pets')" class="characterSheet__panel">
        <CharacterPetCompanion
          :name="t('character.pet.name')"
          :role="t('character.pet.role')"
          :buff="t('character.pet.buff')"
          :level="character.pet.level"
        />
      </BasePanel>

      <BasePanel :title="$t('home.equipment')" class="characterSheet__panel">
        <div class="characterSheet__equipGrid">
          <CharacterEquipmentSlot
            v-for="item in character.equipment"
            :key="item.id"
            :name="t(`${equipmentLabel(item.id)}.name`)"
            :effect="t(`${equipmentLabel(item.id)}.effect`)"
            :rarity="item.rarity"
            :slot-label="slotLabels[item.slot] || item.slot"
          />
        </div>
      </BasePanel>

      <BasePanel :title="$t('home.achievements')" class="characterSheet__panel">
        <ul class="characterSheet__list">
          <li v-for="id in character.achievements" :key="id">
            {{ t(achievementLabel(id)) }}
          </li>
        </ul>
      </BasePanel>

      <BasePanel :title="$t('home.activeQuests')" class="characterSheet__panel">
        <div class="characterSheet__quests">
          <QuestCard
            v-for="id in character.activeQuests"
            :key="id"
            :title="t(questLabel(id))"
          />
        </div>
      </BasePanel>

      <BasePanel :title="$t('home.reputation')" class="characterSheet__panel">
        <ul class="characterSheet__reputation">
          <li v-for="rep in character.reputation" :key="rep.id">
            <span>{{ t(reputationLabel(rep.id)) }}</span>
            <span>{{ rep.value }} / 100</span>
          </li>
        </ul>
      </BasePanel>

      <BasePanel :title="$t('home.hobbies')" class="characterSheet__panel">
        <ul class="characterSheet__tags">
          <li v-for="id in character.hobbies" :key="id">
            {{ t(hobbyLabel(id)) }}
          </li>
        </ul>
      </BasePanel>
    </div>

    <div class="characterSheet__cardToggle">
      <BaseButton type="button" variant="ghost" @click="showCard = !showCard">
        {{ $t('home.tradingCardCta') }}
      </BaseButton>
    </div>
    <div v-if="showCard" class="characterSheet__card">
      <CharacterTradingCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.characterSheet {
  &__hero {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @include up($breakpointLg) {
      grid-template-columns: minmax(200px, 280px) 1fr;
      align-items: start;
    }
  }

  &__portrait {
    border: 2px solid $colorBorderGold;
    border-radius: 8px;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }

  &__level {
    margin: 0 0 0.25rem;
    color: $colorAccentTeal;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
  }

  &__title {
    font-size: 1.25rem;
    color: $colorBorderGold;
    margin: 0 0 0.35rem;
  }

  &__subtitle,
  &__region {
    margin: 0 0 0.5rem;
    color: $colorTextMuted;
  }

  &__pitch {
    margin: 1rem 0;
    line-height: 1.6;
  }

  &__secondary {
    margin: 0;
    font-size: 0.9rem;
    color: $colorTextMuted;
    font-style: italic;
  }

  &__grid {
    display: grid;
    gap: 1rem;

    @include up($breakpointMd) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__equipGrid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__list,
  &__reputation,
  &__tags {
    margin: 0;
    padding-left: 1.1rem;
    color: $colorTextMuted;
  }

  &__reputation li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }

  &__tags {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      padding: 0.35rem 0.65rem;
      border: 1px solid $colorBorderGoldDim;
      border-radius: 999px;
      font-size: 0.85rem;
    }
  }

  &__quests {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__cardToggle {
    margin-top: 1.5rem;
    text-align: center;
  }

  &__card {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>