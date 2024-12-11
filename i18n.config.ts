export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      nav_about: "About me",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Get in touch",
    },
    fr: {
      nav_about: "À propos",
      nav_services: "Services",
      nav_projects: "Projets",
      nav_contact: "Me contacter",
    },
  },
}));
