<template>
  <main>
    <section class="laptop:flex items-center gap-20">
      <img src="@/assets/images/illustrations/strategy.svg" alt="drawing of a woman" width="330">

      <div>
        <div class="tag mt-10 laptop:mt-0">
          <img src="@/assets/images/green-dot.png" alt="green dot" width="20" class="animate-pulse">
          Available
        </div>

        <h1 class="my-5 text-brick text-[32px] font-semibold leading-[50px] laptop:text-[38px] ">
          Hire a developer who combines <span class="text-gradient">technical skills</span> with <span class="text-gradient">a marketing edge</span>
        </h1>
        <p class="text-xl">
          I help entrepreneurs, startups, and SMEs to convert their ideas into web products.
          Let's build someting together!
        </p>
        <NuxtLink to="/services" class="btn-primary mt-5">
          Learn about my services
        </NuxtLink>
      </div>
    </section>

    <section>
      <h2 class="mb-6">Why hire me for your next project</h2>

      <img src="@/assets/images/illustrations/team.svg" alt="team illustration" class="mx-auto" width="150">
      <div class="w-full relative">
        <IconsShapesLine class="hidden laptop:block absolute -z-10 bottom-[50%]"/>
        <div class="flex flex-col laptop:flex-row gap-12">
          <CardsInfo
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>We work together</h2>

      <div class="grid grid-cols-3 gap-8 laptop:grid-cols-5 laptop:gap-14 items-center">
        <img src="@/assets/images/client_logos/wally.webp" alt="wally logo" class="h-auto max-h-16 max-w-25">
        <img src="@/assets/images/client_logos/totem.webp" alt="totem logo" class="h-auto max-h-16 max-w-25">
        <img src="@/assets/images/client_logos/lewagon.svg" alt="le wagon logo" class="h-auto max-h-16 max-w-25">
        <img src="@/assets/images/client_logos/karma_lama.png" alt="karma lama logo" class="h-auto max-h-16 max-w-25">
        <img src="@/assets/images/client_logos/k-yoga.webp" alt="k-yoga logo" class="h-auto max-h-16 max-w-25">
      </div>
    </section>

    <section>
      <h2>What people say about me</h2>
      <TestimonialsCarrousel />
    </section>
  </main>
</template>

<script setup lang="ts">
  definePageMeta({
    title: "Home",
    description: "Hire a developer who combines technical expertise with marketing insights. I can help you turn ideas into web products that drive traffic. Let’s work together!"
  })

  const cards = [
    {
      title: "Ready to deliver",
      description: "I have hands-on experience working on Ruby on Rails projects. I can either join your team or we can start your new project together."
    },
    {
      title: "More than just code",
      description: "With a background in marketing, I design products that connect with users and achieve your business goals."
    },
    {
      title: "Driven and curious",
      description: "I've pivot careers twice. I'm always eager to tackle new challenges and learn."
    }
  ]
</script>
