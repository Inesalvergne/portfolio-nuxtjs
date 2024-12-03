<template>
  <div>
    <div class="page-head">
      <h1>Discover a few projects I've worked on</h1>
      <p>Bacon ipsum dolor amet pork belly alcatra boudin meatloaf, cow doner beef ribs prosciutto pancetta tri-tip picanha.</p>
    </div>

    <div class="w-4/5 mx-auto flex flex-col gap-12">
      <CardsProject
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :role="project.role"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script setup>
  import karmaLamaImage from '@/assets/images/mockups/karmalama.png';
  import wallyImage from '@/assets/images/mockups/wally.png';
  // import kYogaImage from '@/assets/images/mockups/kyoga.png';

  const projects = [
    { title: "Karma Lama",
      description: "A web and mobile application to connect non-profit organisations with volunteers. Organisations can create and manage volunteer missions and volunteers can earn points for completing missions.",
      role: "Rails Full-Stack Developer",
      image: karmaLamaImage
    },
    { title: "Wally",
      description: "A fractional investment platform to allow individuals and partners to invest in real-estate with no hassle.",
      role: "Rails Full-Stack Developer",
      image: wallyImage
    },
    { title: "K Yoga",
      description: "A platform for yoga enthusiasts to practice everyday with live courses and explore different types of yoga with an extensive video library.",
      role: "Lead Developer",
      image: "@/assets/images/mockups/karmalama.png"
    },
  ]
</script>
