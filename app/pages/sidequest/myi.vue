<script setup lang="ts">
const { t } = useI18n();
const { isNerd } = useSiteMode();
const config = useRuntimeConfig();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.myiTitle' : 'portfolio.meta.myiTitle'),
  description: () => t('myi.headline'),
});

const techPointKeys = [
  'myi.techPoints.leaderboard',
  'myi.techPoints.brandQuiz',
  'myi.techPoints.qrQuest',
  'myi.techPoints.debrief',
] as const;
const variantKeys = ['booth', 'pub', 'stage'] as const;

const mailSnippet = computed(() => {
  const site = config.public.siteUrl || 'https://zumbii.ch';
  const path = localePath('/sidequest/myi');
  return `${t('myi.mailSnippet')}${site}${path}`;
});

const copyStatus = ref(false);

const copyMailSnippet = async () => {
  try {
    await navigator.clipboard.writeText(mailSnippet.value);
    copyStatus.value = true;
    setTimeout(() => {
      copyStatus.value = false;
    }, 2000);
  } catch {
    copyStatus.value = false;
  }
};

const hostReelUrl = computed(() => config.public.hostReelUrl);
</script>

<template>
  <div class="myiPage">
    <span class="myiPage__badge">{{ isNerd ? $t('myi.badge') : $t('portfolio.myi.badge') }}</span>
    <h1 class="pageTitle">{{ $t('myi.headline') }}</h1>

    <BasePanel :title="$t('myi.roleTitle')" variant="highlight">
      <p class="myiPage__role">{{ $t('myi.roleName') }}</p>
    </BasePanel>

    <BasePanel :title="$t('myi.notDevTitle')">
      <p>{{ $t('myi.notDevText') }}</p>
    </BasePanel>

    <BasePanel :title="$t('myi.variantsTitle')">
      <div class="myiPage__variants">
        <article v-for="key in variantKeys" :key="key" class="myiPage__variant">
          <h3>{{ $t(`myi.variants.${key}.title`) }}</h3>
          <p>{{ $t(`myi.variants.${key}.text`) }}</p>
        </article>
      </div>
    </BasePanel>

    <BasePanel :title="isNerd ? $t('myi.techTitle') : $t('portfolio.myi.techTitle')">
      <ul class="myiPage__tech">
        <li v-for="pointKey in techPointKeys" :key="pointKey">
          {{ $t(pointKey) }}
        </li>
      </ul>
      <BlockCursorBuff />
    </BasePanel>

    <BasePanel :title="$t('myi.reelTitle')">
      <p v-if="!hostReelUrl">{{ $t('myi.reelPlaceholder') }}</p>
      <BaseButton v-else :href="hostReelUrl" external>
        {{ $t('myi.reelTitle') }}
      </BaseButton>
    </BasePanel>

    <BasePanel :title="$t('myi.quizTitle')">
      <QuizMyiQuiz />
    </BasePanel>

    <div class="myiPage__cta">
      <BaseButton :to="localePath('/contact')">{{ $t('myi.ctaContact') }}</BaseButton>
      <BaseButton variant="ghost" type="button" @click="copyMailSnippet">
        {{ copyStatus ? $t('common.copySuccess') : $t('myi.copyMail') }}
      </BaseButton>
    </div>
    <p class="myiPage__raidOffer">{{ isNerd ? $t('myi.ctaRaid') : $t('portfolio.myi.ctaTrial') }}</p>
  </div>
</template>

<style lang="scss" scoped>
.myiPage {
  &__badge {
    display: inline-block;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.6rem;
    border: 1px solid $colorLegendary;
    border-radius: 4px;
    color: $colorLegendary;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__role {
    font-family: 'Cinzel', serif;
    font-size: 1.15rem;
    color: $colorBorderGold;
    margin: 0;
  }

  &__variants {
    display: grid;
    gap: 1rem;

    @include up($breakpointMd) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__variant h3 {
    margin: 0 0 0.35rem;
    font-size: 1rem;
    color: $colorAccentTeal;
  }

  &__variant p {
    margin: 0;
    font-size: 0.9rem;
    color: $colorTextMuted;
  }

  &__tech {
    margin: 0 0 1rem;
    padding-left: 1.1rem;
    color: $colorTextMuted;
  }

  &__cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  &__raidOffer {
    margin-top: 1rem;
    color: $colorAccentTeal;
    font-weight: 600;
  }
}
</style>