// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets", // to call assets files
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/motion/nuxt", "nuxt-swiper", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    langDir: "locales/",
    lazy: true,
    locales: [
      { code: "en", dir: "ltr", files: ['navbar.json'] },
      { code: "fr", dir: "ltr",files: ['navbar.json'] },
    ],
    strategy: "prefix",
  },
});
