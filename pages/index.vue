<template>
  <main>
    <section class="laptop:flex items-center gap-20">
      <img src="@/assets/images/illustrations/strategy.svg" alt="drawing of a woman" width="400">

      <div>
        <div class="tag mt-10 laptop:mt-0">
          <img src="@/assets/images/green-dot.png" alt="green dot" width="20" class="animate-pulse">
          Available
        </div>

        <h1 class="my-5 text-brick text-[32px] font-semibold leading-[50px] laptop:text-[38px] ">
          Hire a developer who combines <span class="font-normal">technical skills</span> with a <span class="font-normal">marketing edge</span>
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
      <h2>Why hire me for your next project</h2>

      <div class="flex flex-col laptop:flex-row gap-12">
        <div class="card-small bg-transparent-pastel-1">
          <h3>Ready to deliver</h3>
          <p>I've hands-on experience working on Ruby on Rails projects.
            I can either join your team or we can start your new project together.
          </p>
        </div>

        <div class="card-small bg-transparent-pastel-2">
          <h3>More than just code</h3>
          <p>
            With a background in marketing, I design products that connect with user
            and achieve your business goals.
          </p>
        </div>

        <div class="card-small bg-transparent-pastel-3">
          <h3>Driven and curious</h3>
          <p>I've pivot careers twice. I'm always eager to tackle new challenges and learn.</p>
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
