<script setup lang="ts">
import BlockCursorBuff from '~/components/Block/BlockCursorBuff.vue';
import CharacterSheet from '~/components/Character/CharacterSheet.vue';
import PortfolioHome from '~/components/Portfolio/Home.vue';

const { t } = useI18n();
const { isNerd } = useSiteMode();

useSeoMeta({
  title: () => t(isNerd.value ? 'meta.homeTitle' : 'portfolio.meta.homeTitle'),
  description: () => t(isNerd.value ? 'meta.homeDescription' : 'portfolio.meta.homeDescription'),
});
</script>

<template>
  <PortfolioHome v-if="!isNerd" />
  <div v-else>
    <CharacterSheet />
    <BlockCursorBuff class="homeCursorBuff" />
  </div>
</template>

<style lang="scss" scoped>
.homeCursorBuff {
  margin-top: 2rem;
}
</style>