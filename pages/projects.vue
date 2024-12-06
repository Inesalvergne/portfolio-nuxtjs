<template>
  <div>
    <div class="page-head">
      <h1>Discover a few projects I've worked on</h1>
      <p>Here's a showcase of projects I've enjoyed working on. Each of them has been an opportunity to learn and grow as a developer and collaborate with inspiring people.</p>
    </div>

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
  import karmaLamaImage from '@/assets/images/mockups/karmalama.png';
  import wallyImage from '@/assets/images/mockups/wally.png';
  import kYogaImage from '@/assets/images/mockups/kyoga.png';

  definePageMeta({
    title: "Projects",
    description: "Take a look at the projects I’ve worked on! From crafting intuitive UI/UX designs to developing solid Ruby on Rails backends, here’s how I’ve turned ideas into web products."
  })

  const projects = [
    { title: "Karma Lama",
      description: "A web and mobile application to connect non-profit organisations with volunteers. Organisations can create and manage volunteer missions and volunteers can earn points for completing missions.",
      role: "Rails Full-Stack Developer",
      image: karmaLamaImage,
      imageClass: "w-[300px] laptop:w-[400px]",
      imageContainerClass: "items-end justify-center h-[300px] laptop:h-full",
      tags: ["Full-Stack", "UI design", "Email creation", "Admin dashboard"],
      websiteLink: "https://www.karmalama.ch/"
    },
    { title: "Wally",
      description: "A fractional investment platform to allow individuals and partners to invest in real-estate without hassle.",
      role: "Rails Full-Stack Developer",
      image: wallyImage,
      imageClass: "laptop:w-[600px]",
      imageContainerClass: "justify-end items-center h-[250px] laptop:h-full",
      tags: ["Fintech", "Full-Stack", "UI Design", "Administrate dashboard"],
      websiteLink: "https://app.wally.co"
    },
    { title: "K Yoga",
      description: "A platform for yoga enthusiasts to practice everyday with live courses and explore different types of yoga with an extensive video library.",
      role: "Rails Lead Developer",
      image: kYogaImage,
      imageClass: "laptop:w-[600px]",
      imageContainerClass: "justify-end items-center h-[250px] laptop:h-full",
      tags: ["Full-Stack", "Rebranding", "API", "Custom admin dashboard"],
      websiteLink: "https://www.k-yoga.fr/"
    },
  ]
</script>
