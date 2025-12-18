import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt",
      htmlAttrs: {
        lang: "no",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      githubUsername: process.env.GITHUB_USERNAME,
    },
  },

  image: {
    domains: ["raw.githubusercontent.com"],
  },

  srcDir: "src/",
  dir: {
    layouts: "layout",
  },

  modules: [
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/hints",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxtjs/mdc",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/mdc",
    "@nuxthub/core-nightly",
  ],

  hub: {
    // cache: true,
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "no",
    locales: [
      { code: "no", name: "Norwegian", file: "no.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  css: ["./public/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
