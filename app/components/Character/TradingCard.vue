<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { character } = useCharacterData();

const sidequestPath = computed(() => localePath('/sidequest/myi'));
</script>

<template>
  <article class="tradingCard">
    <header class="tradingCard__banner">{{ $t('home.tradingCardBanner') }}</header>
    <div class="tradingCard__inner">
      <img
        class="tradingCard__portrait"
        src="/images/character/placeholder.svg"
        width="120"
        height="160"
        loading="lazy"
        :alt="t('character.portraitAlt')"
      />
      <div>
        <h3 class="tradingCard__name">{{ t('character.name') }}</h3>
        <p class="tradingCard__class">{{ t('character.title') }}</p>
        <dl class="tradingCard__stats">
          <div class="tradingCard__stat">
            <dt>{{ $t('common.level') }}</dt>
            <dd>{{ character.level }}</dd>
          </div>
          <div class="tradingCard__stat">
            <dt>{{ $t('nav.quests') }}</dt>
            <dd>{{ $t('nav.quests') }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <footer class="tradingCard__footer">
      <span class="tradingCard__qrHint">QR → Sidequest</span>
      <BaseButton variant="ghost" :to="sidequestPath">
        {{ $t('home.tradingCardCta') }}
      </BaseButton>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
.tradingCard {
  border: 2px solid $colorBorderGold;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(160deg, #1e2a3a, #0f141c);
  max-width: 360px;

  &__banner {
    background: $colorBorderGold;
    color: #1a1206;
    text-align: center;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    padding: 0.35rem;
  }

  &__inner {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }

  &__portrait {
    border: 2px solid $colorBorderGoldDim;
    border-radius: 4px;
    flex-shrink: 0;
  }

  &__name {
    margin: 0;
    font-family: 'Cinzel', serif;
    color: $colorBorderGold;
  }

  &__class {
    margin: 0.25rem 0 0.75rem;
    font-size: 0.85rem;
    color: $colorTextMuted;
  }

  &__stats {
    display: flex;
    gap: 1rem;
    margin: 0;
  }

  &__stat {
    dt {
      font-size: 0.65rem;
      text-transform: uppercase;
      color: $colorTextMuted;
    }

    dd {
      margin: 0;
      font-weight: 700;
    }
  }

  &__footer {
    border-top: 1px solid $colorBorderGoldDim;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &__qrHint {
    font-size: 0.75rem;
    color: $colorAccentTeal;
  }
}
</style>