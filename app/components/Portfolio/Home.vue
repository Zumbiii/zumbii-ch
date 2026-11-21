<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { character, skillLabel, lootLabel } = useCharacterData();
const life = useCharacterLife(character.birthDate);

const focusIds = ['hosting', 'quizDesign', 'moderation', 'eventOps'] as const;

const contactPath = computed(() => localePath('/contact'));
const formatsPath = computed(() => localePath('/quests'));
</script>

<template>
  <div class="portfolioHome">
    <section class="portfolioHome__hero">
      <div class="portfolioHome__copy">
        <p class="portfolioHome__eyebrow">{{ t('character.mapRegion') }}</p>
        <h1>{{ t('character.name') }}</h1>
        <p class="portfolioHome__role">{{ t('character.title') }}</p>
        <p class="portfolioHome__lead">{{ t('character.subtitle') }}</p>
        <p class="portfolioHome__pitch">{{ t('character.pitch') }}</p>
        <p class="portfolioHome__meta">
          {{ t('portfolio.yearsLabel', { years: life.yearsExperience }) }}
        </p>
        <div class="portfolioHome__actions">
          <BaseButton :to="contactPath">{{ t('portfolio.ctaContact') }}</BaseButton>
          <BaseButton variant="ghost" :to="formatsPath">{{ t('portfolio.ctaFormats') }}</BaseButton>
        </div>
      </div>
      <figure class="portfolioHome__media">
        <img
          src="/images/character/diego-portrait.jpg"
          width="771"
          height="1024"
          :alt="t('portfolio.portraitAlt')"
          loading="eager"
        />
      </figure>
    </section>

    <section class="portfolioHome__section">
      <header class="portfolioHome__sectionHead">
        <h2>{{ t('portfolio.focusTitle') }}</h2>
        <p>{{ t('portfolio.focusLead') }}</p>
      </header>
      <ul class="portfolioHome__focus">
        <li v-for="id in focusIds" :key="id">
          <h3>{{ t(skillLabel(id)) }}</h3>
          <p>{{ t(`portfolio.focus.${id}`) }}</p>
        </li>
      </ul>
    </section>

    <section class="portfolioHome__section">
      <header class="portfolioHome__sectionHead">
        <h2>{{ t('portfolio.workTitle') }}</h2>
      </header>
      <ul class="portfolioHome__work">
        <li v-for="item in character.loot" :key="item.id">
          <h3>{{ t(`${lootLabel(item.id)}.name`) }}</h3>
          <p>
            {{
              item.id === 'zumbii'
                ? t('portfolio.projects.zumbii')
                : t(`${lootLabel(item.id)}.description`)
            }}
          </p>
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            {{ t('common.learnMore') }}
          </a>
        </li>
      </ul>
    </section>

    <section class="portfolioHome__note">
      <h2>{{ t('portfolio.craftTitle') }}</h2>
      <p>{{ t('cursorBuff.text') }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.portfolioHome {
  padding-top: 1.5rem;

  h1 {
    margin: 0.2rem 0 0.6rem;
    font-size: clamp(3.2rem, 8vw, 5.75rem);
    line-height: 0.92;
    letter-spacing: -0.045em;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.6rem, 3vw, 2rem);
    letter-spacing: -0.03em;
  }

  &__hero {
    display: grid;
    gap: 2.5rem;
      align-items: start;
    margin-bottom: 4.5rem;

    @include up($breakpointLg) {
      grid-template-columns: minmax(0, 1.15fr) minmax(240px, 0.75fr);
      gap: 4rem;
    }
  }

  &__eyebrow,
  &__meta {
    margin: 0;
    color: #a1a1aa;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }

  &__role {
    margin: 0 0 1rem;
    font-size: 1.05rem;
    font-weight: 600;
  }

  &__lead {
    margin: 0 0 0.75rem;
    max-width: 36rem;
    font-size: 1.35rem;
    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  &__pitch {
    margin: 0 0 1rem;
    max-width: 38rem;
    color: #d4d4d8;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.25rem;
  }

  &__media {
    margin: 0;

    img {
      width: 100%;
      max-width: 440px;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      object-position: center 18%;
      border-radius: 1.25rem;
    }
  }

  &__section {
    margin-bottom: 4rem;
  }

  &__sectionHead {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    max-width: 36rem;

    p {
      margin: 0;
      color: #a1a1aa;
    }
  }

  &__focus,
  &__work {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1rem;

    @include up($breakpointMd) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__focus li,
  &__work li {
    padding: 1.25rem 0 0;
    border-top: 1px solid #2c2e33;
  }

  &__focus h3,
  &__work h3 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
  }

  &__focus p,
  &__work p {
    margin: 0;
    color: #a1a1aa;
  }

  &__work a {
    display: inline-block;
    margin-top: 0.75rem;
    color: #f4f4f5;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }

  &__note {
    max-width: 40rem;
    padding: 1.5rem 0 0;
    border-top: 1px solid #2c2e33;

    p {
      margin: 0.75rem 0 0;
      color: #d4d4d8;
    }
  }
}
</style>
