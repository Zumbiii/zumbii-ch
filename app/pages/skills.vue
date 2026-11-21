<script setup lang="ts">
import PortfolioSkills from '~/components/Portfolio/Skills.vue';

const { t } = useI18n();
const { isNerd } = useSiteMode();
const { character, skillLabel } = useCharacterData();

const primarySkillIds = ['hosting', 'quizDesign', 'moderation', 'eventOps'];

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.skillsTitle' : 'portfolio.meta.skillsTitle'),
  description: () => t(isNerd.value ? 'skillsPage.intro' : 'portfolio.skillsIntro'),
});
</script>

<template>
  <PortfolioSkills v-if="!isNerd" />
  <div v-else class="skillsPage">
    <h1 class="pageTitle">{{ $t('nav.skills') }}</h1>
    <p class="skillsPage__intro">{{ $t('skillsPage.intro') }}</p>
    <p class="skillsPage__hint">{{ $t('skillsPage.treeHint') }}</p>
    <div class="skillsPage__grid">
      <SkillNode
        v-for="skill in character.skills"
        :key="skill.id"
        :label="t(skillLabel(skill.id))"
        :points="skill.points"
        :max="skill.max"
        :primary="primarySkillIds.includes(skill.id)"
      />
    </div>
    <BlockCursorBuff class="skillsPage__buff" />
  </div>
</template>

<style lang="scss" scoped>
.skillsPage {
  &__intro,
  &__hint {
    color: $colorTextMuted;
    max-width: 42rem;
  }

  &__grid {
    display: grid;
    gap: 0.75rem;
    margin: 1.5rem 0;

    @include up($breakpointMd) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__buff {
    margin-top: 2rem;
  }
}
</style>