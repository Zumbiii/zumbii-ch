<script setup lang="ts">
const localePath = useLocalePath();
const route = useRoute();
const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const menuOpen = ref(false);
const homePath = computed(() => localePath('/'));

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/$/, '') : path);

const isItemActive = (to: string) => {
  const current = normalizePath(route.path);
  const target = normalizePath(to);
  if (target === normalizePath(homePath.value)) return current === target;
  return current === target || current.startsWith(`${target}/`);
};

const navItems = computed(() => [
  { to: localePath('/'), label: 'portfolio.nav.home' },
  { to: localePath('/skills'), label: 'portfolio.nav.skills' },
  { to: localePath('/quests'), label: 'portfolio.nav.formats' },
  { to: localePath('/loot'), label: 'portfolio.nav.projects' },
  { to: localePath('/sidequest/myi'), label: 'portfolio.nav.myi' },
  { to: localePath('/contact'), label: 'portfolio.nav.contact' },
]);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header class="portfolioNav">
    <LayoutSiteBrand variant="portfolio" @click="closeMenu" />
    <button
      type="button"
      class="portfolioNav__toggle"
      :aria-expanded="menuOpen"
      :aria-label="menuOpen ? t('nav.menuClose') : t('nav.menuOpen')"
      @click="toggleMenu"
    >
      <span /><span /><span />
    </button>
    <nav class="portfolioNav__nav" :class="{ 'portfolioNav__nav--open': menuOpen }">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="portfolioNav__link"
        :class="{ 'portfolioNav__link--active': isItemActive(item.to) }"
        @click="closeMenu"
      >
        {{ t(item.label) }}
      </NuxtLink>
      <div class="portfolioNav__tools">
        <LayoutModeSwitch variant="plain" />
        <div class="portfolioNav__langs" role="group" :aria-label="t('nav.language')">
          <NuxtLink
            v-for="loc in locales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="portfolioNav__lang"
            :class="{ 'portfolioNav__lang--active': locale === loc.code }"
            @click="closeMenu"
          >
            {{ loc.code.toUpperCase() }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.portfolioNav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  background: rgba(12, 13, 16, 0.9);
  border-bottom: 1px solid #2c2e33;
  backdrop-filter: blur(12px);

  &__toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: #17181c;
    border: 1px solid #2c2e33;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;

    span {
      display: block;
      width: 1.15rem;
      height: 1.5px;
      background: #f4f4f5;
    }

    @include up($breakpointLg) {
      display: none;
    }
  }

  &__nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    padding: 0.75rem 1rem 1rem;
    background: #0c0d10;
    border-bottom: 1px solid #2c2e33;

    &--open {
      display: flex;
    }

    @include up($breakpointLg) {
      display: flex;
      position: static;
      flex-direction: row;
      align-items: center;
      gap: 0.15rem;
      padding: 0;
      background: transparent;
      border: 0;
    }
  }

  &__link {
    padding: 0.45rem 0.6rem;
    color: #a1a1aa;
    text-decoration: none;
    font-size: 0.9rem;
    border-radius: 6px;

    &:hover,
    &--active {
      color: #f4f4f5;
    }

    &--active {
      font-weight: 600;
    }
  }

  &__tools {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #2c2e33;
    width: 100%;

    @include up($breakpointLg) {
      width: auto;
      margin-top: 0;
      margin-left: 0.5rem;
      padding-top: 0;
      padding-left: 0.75rem;
      border-top: 0;
      border-left: 1px solid #2c2e33;
    }
  }

  &__langs {
    display: flex;
    gap: 0.25rem;
  }

  &__lang {
    padding: 0.25rem 0.4rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: #a1a1aa;
    border-radius: 4px;

    &--active {
      color: #f4f4f5;
    }
  }
}
</style>
