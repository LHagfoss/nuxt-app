import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt",
      htmlAttrs: {
        lang: "no"
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  dir: {
    public: 'public/',
    modules: 'modules/',
    shared: 'shared/',
    layouts: 'layout',
  },

  modules: [
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/hints",
    "@nuxtjs/i18n",
    "@nuxt/fonts"
  ],

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "no",
    locales: [
      { code: "no", name: "Norwegian", file: "no.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  css: ["./public/main.css"]
});
