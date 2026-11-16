<template>
  <div class="layoutShell">
    <div class="gameBackdrop" aria-hidden="true" />
    <LayoutHudNav />
    <main class="layoutMain">
      <slot />
    </main>
    <LayoutActionBar />
    <LayoutSiteFooter />
  </div>
</template>