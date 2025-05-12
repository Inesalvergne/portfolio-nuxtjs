<template>
  <div>
    <Header
      :title= "$t('projects.header.title')"
      :description= "$t('projects.header.description')"
    />

    <div class="flex flex-col gap-12">
      <CardsProject
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :role="project.role"
        :image="project.image"
        :imageClass = "project.imageClass"
        :imageContainerClass="project.imageContainerClass"
        :tags = "project.tags"
        :websiteLink = "project.websiteLink"
      />
    </div>
  </div>
</template>

<script setup>
  import railsWorldImage from '@/assets/images/mockups/rails_world.png';
  import karmaLamaImage from '@/assets/images/mockups/karmalama.png';
  import wallyImage from '@/assets/images/mockups/wally.png';
  import kYogaImage from '@/assets/images/mockups/kyoga.png';
  import portfolioImage from '@/assets/images/mockups/portfolio.png';

  import { useI18n } from 'vue-i18n';

  const { t, rt } = useI18n();

  definePageMeta({
    title: "Projects",
    description: "Take a look at the projects I’ve worked on! From crafting intuitive UI/UX designs to developing solid Ruby on Rails backends, here’s how I’ve turned ideas into web products."
  })

  const projects = [
    { title: "Rails World 2025",
      description: t('projects.cards.rails_world.description'),
      role: "Front-End Developer",
      image: railsWorldImage,
      imageClass: "w-[300px] laptop:w-[400px]",
      imageContainerClass: "items-end justify-center h-[300px] laptop:h-full",
      tags: ["Front-End", "Jekyll", "Liquid", "Vanilla JS"],
      websiteLink: "https://rubyonrails.org/world/2025"
    },
    { title: "Karma Lama",
      description: t('projects.cards.karma_lama.description'),
      role: "Rails Full-Stack Developer",
      image: karmaLamaImage,
      imageClass: "w-[300px] laptop:w-[400px]",
      imageContainerClass: "items-end justify-center h-[300px] laptop:h-full",
      tags: ["Full-Stack", "UI design", "Marketing assets", "Admin dashboard"],
      websiteLink: "https://www.karmalama.ch/"
    },
    { title: "Wally",
      description: t('projects.cards.wally.description'),
      role: "Rails Full-Stack Developer",
      image: wallyImage,
      imageClass: "laptop:w-[600px]",
      imageContainerClass: "justify-end items-center h-[250px] laptop:h-full",
      tags: ["Fintech", "Full-Stack", "UI Design", "Administrate dashboard"],
      websiteLink: "https://app.wally.co"
    },
    { title: "K Yoga",
      description: t('projects.cards.k_yoga.description'),
      role: "Rails Lead Developer",
      image: kYogaImage,
      imageClass: "laptop:w-[600px]",
      imageContainerClass: "justify-end items-center h-[250px] laptop:h-full",
      tags: ["Full-Stack", "Rebranding", "APIs", "Admin dashboard"],
      websiteLink: "https://www.k-yoga.fr/"
    },
    { title: "Portfolio",
      description: t('projects.cards.portfolio.description'),
      role: "Front-End Developer",
      image: portfolioImage,
      imageClass: "laptop:w-[600px]",
      imageContainerClass: "justify-end items-center h-[250px] laptop:h-full",
      tags: ["Front-End", "Nuxt", "Vue.js", "Branding", "UI Design"],
      websiteLink: "https://www.inesalvergne.com/"
    },
  ]
</script>
