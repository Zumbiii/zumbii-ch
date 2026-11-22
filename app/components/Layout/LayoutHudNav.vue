<script setup lang="ts">
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const menuOpen = ref(false);

const navItems = computed(() => [
  { to: localePath('/'), label: 'nav.hub' },
  { to: localePath('/skills'), label: 'nav.skills' },
  { to: localePath('/quests'), label: 'nav.quests' },
  { to: localePath('/loot'), label: 'nav.loot' },
  { to: localePath('/sidequest/myi'), label: 'nav.sidequestMyi' },
  { to: localePath('/contact'), label: 'nav.contact' },
]);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header class="hudNav">
    <LayoutSiteBrand variant="hud" @click="closeMenu" />
    <button
      type="button"
      class="hudNav__toggle"
      :aria-expanded="menuOpen"
      :aria-label="menuOpen ? $t('nav.menuClose') : $t('nav.menuOpen')"
      @click="toggleMenu"
    >
      <span /><span /><span />
    </button>
    <nav class="hudNav__nav" :class="{ 'hudNav__nav--open': menuOpen }">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="hudNav__link"
        @click="closeMenu"
      >
        {{ $t(item.label) }}
      </NuxtLink>
      <div class="hudNav__langs" role="group" :aria-label="$t('nav.language')">
        <NuxtLink
          v-for="loc in locales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="hudNav__lang"
          :class="{ 'hudNav__lang--active': locale === loc.code }"
          @click="closeMenu"
        >
          {{ loc.code.toUpperCase() }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.hudNav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: rgba(10, 14, 20, 0.92);
  border-bottom: 1px solid $colorBorderGoldDim;
  backdrop-filter: blur(8px);

  &__toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: 1px solid $colorBorderGoldDim;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    span {
      display: block;
      width: 1.25rem;
      height: 2px;
      background: $colorText;
    }

    @include up($breakpointMd) {
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
    gap: 0.25rem;
    padding: 1rem;
    background: $colorBgPanel;
    border-bottom: 1px solid $colorBorderGoldDim;

    &--open {
      display: flex;
    }

    @include up($breakpointMd) {
      display: flex;
      position: static;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      padding: 0;
      background: transparent;
      border: none;
    }
  }

  &__link {
    padding: 0.5rem 0.75rem;
    color: $colorTextMuted;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;

    &:hover,
    &.router-link-active {
      color: $colorAccentTeal;
      background: rgba(45, 212, 191, 0.08);
    }
  }

  &__langs {
    display: flex;
    gap: 0.35rem;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid $colorBorderGoldDim;

    @include up($breakpointMd) {
      margin-top: 0;
      margin-left: 0.5rem;
      padding-top: 0;
      padding-left: 0.5rem;
      border-top: none;
      border-left: 1px solid $colorBorderGoldDim;
    }
  }

  &__lang {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    color: $colorTextMuted;
    border: 1px solid transparent;
    border-radius: 4px;

    &--active {
      border-color: $colorBorderGold;
      color: $colorBorderGold;
    }
  }
}
</style>