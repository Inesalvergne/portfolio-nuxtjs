<template>
  <div>
    <Header
      :title= "$t('services.header.title')"
      :description= "$t('services.header.description')"
    />

    <CardsService
      v-for="(service, index) in services"
      :key="index"
      :bgColor="service.bgColor"
      :illustration="service.illustration"
      :title="service.title"
      :description="service.description"
      :icons="service.icons"
    />
  </div>
</template>

<script setup>
import IconsLogosRuby from './components/icons/logos/Ruby.vue';
import IconsLogosBootstrap from './components/icons/logos/Bootstrap.vue';
import IconsLogosJavascript from './components/icons/logos/Javascript.vue';
import IconsLogosFigma from './components/icons/logos/Figma.vue';
import IconsLogosRails from './components/icons/logos/Rails.vue';
import IconsLogosStimulus from './components/icons/logos/Stimulus.vue';
import IconsLogosTailwind from './components/icons/logos/Tailwind.vue';
import IconsLogosNuxt from './components/icons/logos/Nuxt.vue';
import IconsLogosVue from './components/icons/logos/Vue.vue';
import IconsLogosStripe from './components/icons/logos/Stripe.vue';
import IconsLogosZoom from './components/icons/logos/Zoom.vue';
import IconsLogosDropbox from './components/icons/logos/Dropbox.vue';
import IconsLogosGoogleCloud from './components/icons/logos/GoogleCloud.vue';
import IconsLogosBrevo from './components/icons/logos/Brevo.vue';
import IconsLogosRspec from './components/icons/logos/Rspec.vue';
import IconsLogosHeroku from './components/icons/logos/Heroku.vue';
import IconsLogosNetlify from './components/icons/logos/Netlify.vue';
import IconsLogosGithub from './components/icons/logos/Github.vue';
import IconsLogosGitlab from './components/icons/logos/Gitlab.vue';
import IconsLogosGoogleAnalytics from './components/icons/logos/GoogleAnalytics.vue';
import IconsLogosGoogleTagManager from './components/icons/logos/GoogleTagManager.vue';
import IconsLogosSemrush from './components/icons/logos/Semrush.vue';
import IconsShapesArc from './components/icons/shapes/Arc.vue';
import IconsShapesDirection from './components/icons/shapes/Direction.vue';
import IconsShapesInfinity from './components/icons/shapes/Infinity.vue';
import IconsShapesWarm from './components/icons/shapes/Warm.vue';
import IconsShapesTeewee from './components/icons/shapes/Teewee.vue';

  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  definePageMeta({
    title: "Services",
    description: "Looking for a developer who gets your vision? I design and build websites to help grow your business. Let's make something great together!"
  })

  const services = [
  {
    "bgColor": "bg-transparent-pastel-1",
    "illustration": IconsShapesArc,
    "title": t("services.cards.scoping.title"),
    "description": t("services.cards.scoping.description"),
    "icons": [IconsLogosFigma]
  },
  {
    "bgColor": "bg-transparent-pastel-2",
    "illustration": IconsShapesTeewee,
    "title": t("services.cards.development.title"),
    "description": t("services.cards.development.description"),
    "icons": [IconsLogosRuby, IconsLogosRails, IconsLogosJavascript, IconsLogosStimulus, IconsLogosTailwind, IconsLogosBootstrap, IconsLogosNuxt, IconsLogosVue]
  },
  {
    "bgColor": "bg-transparent-pastel-3",
    "illustration": IconsShapesWarm,
    "title": t("services.cards.apis.title"),
    "description": t("services.cards.apis.description"),
    "icons":  [IconsLogosStripe, IconsLogosZoom, IconsLogosDropbox, IconsLogosGoogleCloud, IconsLogosBrevo]
  },
  {
    "bgColor": "bg-transparent-pastel-1",
    "illustration": IconsShapesDirection,
    "title": t("services.cards.deploy.title"),
    "description": t("services.cards.deploy.description"),
    "icons":  [IconsLogosRspec, IconsLogosHeroku, IconsLogosNetlify, IconsLogosGithub, IconsLogosGitlab]
  },
  {
    "bgColor": "bg-transparent-pastel-2",
    "illustration": IconsShapesInfinity,
    "title": t("services.cards.boost.title"),
    "description": t("services.cards.boost.description"),
    "icons": [IconsLogosGoogleAnalytics, IconsLogosGoogleTagManager, IconsLogosSemrush]
  }
]
</script>
