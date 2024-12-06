<template>
  <div>
    <Header
      title="Let's build something great together"
      description="Whether your want to start from scratch or add new features to your project, I'm here to help.
                  You can hire me as a solo dev or I can join your team for one or all of the services below."
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

  definePageMeta({
    title: "Services",
    description: "Looking for a developer who gets your vision? I design and build websites to help grow your business. Let's make something great together!"
  })

  const services = [
  {
    "bgColor": "bg-transparent-pastel-1",
    "illustration": IconsShapesArc,
    "title": "Zero to one - Scopes & Prototypes",
    "description": "I’ll help you understand your audience, map out user journeys, and outline the structure of your app. From there, we’ll create interactive prototypes that bring your vision to life with a focus on your brand and user experience.",
    "icons": [IconsLogosFigma]
  },
  {
    "bgColor": "bg-transparent-pastel-2",
    "illustration": IconsShapesTeewee,
    "title": "Hit the ground running - Build a website or app",
    "description": "Whether you're looking to build an MVP or add new features to an existing app, I specialize in building efficient, scalable solutions with Ruby on Rails. Together, we’ll ensure your app evolves alongside your business goals.",
    "icons": [IconsLogosRuby, IconsLogosRails, IconsLogosJavascript, IconsLogosStimulus, IconsLogosTailwind, IconsLogosBootstrap, IconsLogosNuxt, IconsLogosVue]
  },
  {
    "bgColor": "bg-transparent-pastel-3",
    "illustration": IconsShapesWarm,
    "title": "Connect & Grow - APIs integrations",
    "description": "Let’s expand your app’s capabilities by integrating APIs to enhance functionality. From payment processing to CRMs, I'll seamlessly connect your app to the services you need.",
    "icons":  [IconsLogosStripe, IconsLogosZoom, IconsLogosDropbox, IconsLogosGoogleCloud, IconsLogosBrevo]
  },
  {
    "bgColor": "bg-transparent-pastel-1",
    "illustration": IconsShapesDirection,
    "title": "Ready to shine - Tests, deploy & collaboration",
    "description": "With a focus on quality and reliability, I’ll handle testing and deployment to ensure smooth launches. I’m ready to collaborate with your team, maintain code quality, and keep your project moving forward.",
    "icons":  [IconsLogosRspec, IconsLogosHeroku, IconsLogosNetlify, IconsLogosGithub, IconsLogosGitlab]
  },
  {
    "bgColor": "bg-transparent-pastel-2",
    "illustration": IconsShapesInfinity,
    "title": "Conquer the market - Boost & track traffic",
    "description": "Let’s bring new users to your app and keep them engaged! Using my experience in Marketing, I’ll help you set up tools to monitor traffic and implement strategies for growth.",
    "icons": [IconsLogosGoogleAnalytics, IconsLogosGoogleTagManager, IconsLogosSemrush]
  }
]
</script>
