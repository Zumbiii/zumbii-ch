import path from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@vueuse/nuxt/module', 'nuxt-mail'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/styles/styles.scss'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json', language: 'de-CH' },
      { code: 'en', name: 'English', file: 'en.json', language: 'en' },
    ],
    defaultLocale: 'de',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    baseUrl: 'https://zumbii.ch',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zumbii.ch',
      hostReelUrl: process.env.NUXT_PUBLIC_HOST_REEL_URL || '',
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com',
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/app/assets/styles/_helpers.scss" as *;',
        },
      },
    },
  },
  mail: {
    message: {
      to: process.env.NUXT_MAIL_TO || 'diego@example.com',
      from: process.env.NUXT_MAIL_FROM || 'Zumbii Contact <noreply@zumbii.ch>',
    },
    smtp: {
      host: process.env.NUXT_MAIL_HOST || 'localhost',
      port: Number(process.env.NUXT_MAIL_PORT || 587),
      auth: {
        user: process.env.NUXT_MAIL_USER || '',
        pass: process.env.NUXT_MAIL_PASS || '',
      },
    },
  },
});