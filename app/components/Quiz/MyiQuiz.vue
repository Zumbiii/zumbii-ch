<script setup lang="ts">
const { t } = useI18n();
const { questions, questionKey } = useMyiQuiz();
const localePath = useLocalePath();

const started = ref(false);
const currentIndex = ref(0);
const selectedIndex = ref<number | null>(null);
const score = ref(0);
const finished = ref(false);

const currentQuestion = computed(() => questions[currentIndex.value]);

const questionData = computed(() => {
  const id = currentQuestion.value?.id;
  if (!id) return null;
  const baseKey = questionKey(id);
  return {
    question: t(`${baseKey}.question`),
    options: [0, 1, 2].map((index) => t(`${baseKey}.options.${index}`)),
  };
});

const startQuiz = () => {
  started.value = true;
  currentIndex.value = 0;
  score.value = 0;
  finished.value = false;
  selectedIndex.value = null;
};

const selectOption = (index: number) => {
  selectedIndex.value = index;
};

const goNext = () => {
  if (selectedIndex.value === null || !currentQuestion.value) return;

  if (selectedIndex.value === currentQuestion.value.correctIndex) {
    score.value += 1;
  }

  if (currentIndex.value >= questions.length - 1) {
    finished.value = true;
    return;
  }

  currentIndex.value += 1;
  selectedIndex.value = null;
};

const isLast = computed(() => currentIndex.value >= questions.length - 1);
</script>

<template>
  <div class="myiQuiz">
    <template v-if="!started">
      <p class="myiQuiz__intro">{{ $t('myi.quizIntro') }}</p>
      <BaseButton type="button" @click="startQuiz">{{ $t('myi.quizStart') }}</BaseButton>
    </template>

    <template v-else-if="finished">
      <h3 class="myiQuiz__endTitle">{{ $t('myi.quizEndTitle') }}</h3>
      <p class="myiQuiz__score">
        {{ $t('myi.quizScore', { score: score, total: questions.length }) }}
      </p>
      <p class="myiQuiz__endText">{{ $t('myi.quizEndText') }}</p>
      <BaseButton :to="localePath('/contact')">{{ $t('myi.quizEndCta') }}</BaseButton>
    </template>

    <template v-else-if="questionData">
      <p class="myiQuiz__progress">
        {{ currentIndex + 1 }} / {{ questions.length }}
      </p>
      <h3 class="myiQuiz__question">{{ questionData.question }}</h3>
      <ul class="myiQuiz__options">
        <li v-for="(option, index) in questionData.options" :key="index">
          <button
            type="button"
            class="myiQuiz__option"
            :class="{ 'myiQuiz__option--active': selectedIndex === index }"
            @click="selectOption(index)"
          >
            {{ option }}
          </button>
        </li>
      </ul>
      <BaseButton
        type="button"
        :disabled="selectedIndex === null"
        @click="goNext"
      >
        {{ isLast ? $t('myi.quizFinish') : $t('myi.quizNext') }}
      </BaseButton>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.myiQuiz {
  &__intro,
  &__endText {
    color: $colorTextMuted;
    margin-top: 0;
  }

  &__progress {
    font-size: 0.85rem;
    color: $colorAccentTeal;
    margin: 0 0 0.5rem;
  }

  &__question {
    font-family: 'Cinzel', serif;
    color: $colorBorderGold;
    font-size: 1.15rem;
    margin: 0 0 1rem;
  }

  &__options {
    list-style: none;
    margin: 0 0 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__option {
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
    background: #0d1219;
    border: 1px solid $colorBorderGoldDim;
    border-radius: 6px;
    color: $colorText;
    cursor: pointer;
    font-size: 0.95rem;
    transition: border-color 0.2s;

    &:hover {
      border-color: $colorAccentTeal;
    }

    &--active {
      border-color: $colorAccentTeal;
      box-shadow: 0 0 0 1px $colorAccentTealDim;
    }
  }

  &__endTitle {
    color: $colorLegendary;
    margin: 0 0 0.5rem;
  }

  &__score {
    font-weight: 700;
    margin: 0 0 1rem;
  }
}
</style>