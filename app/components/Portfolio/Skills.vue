<script setup lang="ts">
const { t } = useI18n();
const { character, skillLabel, talentLabel } = useCharacterData();

const liveSkillIds = ['hosting', 'quizDesign', 'moderation', 'eventOps'];
const craftSkillIds = ['vueNuxt', 'cursorCraft'];
</script>

<template>
  <div class="portfolioSkills">
    <header class="portfolioSkills__head">
      <h1 class="pageTitle">{{ t('portfolio.nav.skills') }}</h1>
      <p>{{ t('portfolio.skillsIntro') }}</p>
      <p>{{ t('portfolio.skillsHint') }}</p>
    </header>

    <section>
      <h2>{{ t('portfolio.skillsLive') }}</h2>
      <ul>
        <li v-for="id in liveSkillIds" :key="id">
          {{ t(skillLabel(id)) }}
        </li>
      </ul>
    </section>

    <section>
      <h2>{{ t('portfolio.skillsCraft') }}</h2>
      <ul>
        <li v-for="id in craftSkillIds" :key="id">
          {{ t(skillLabel(id)) }}
        </li>
      </ul>
    </section>

    <section>
      <h2>{{ t('portfolio.languagesTitle') }}</h2>
      <ul>
        <li v-for="id in character.talents" :key="id">
          {{ t(talentLabel(id)) }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.portfolioSkills {
  padding-top: 1.5rem;

  &__head {
    max-width: 40rem;
    margin-bottom: 2.5rem;

    p {
      margin: 0 0 0.5rem;
      color: #a1a1aa;
    }
  }

  section {
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0 0 0.75rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #a1a1aa;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0;

    @include up($breakpointMd) {
      grid-template-columns: 1fr 1fr;
    }
  }

  li {
    padding: 0.9rem 0;
    border-top: 1px solid #2c2e33;
    font-size: 1.15rem;
    letter-spacing: -0.02em;
  }
}
</style>
