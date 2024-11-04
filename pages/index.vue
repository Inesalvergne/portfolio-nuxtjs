<template>
  <main role="main" class="bg-glow bg-cover bg-center h-screen w-full">
      <div class="w-full flex flex-col h-screen content-center justify-center">
        <div class="text-center mt-10">
          <div class="tag m-auto mb-4">
            <img src="@/assets/images/green-dot.png" alt="green dot" width="20" class="animate-pulse">
            Available
          </div>
          <p class="text-gradient m-auto text-2xl font-bold">Ines Alvergne</p>
          <h1 class="mb-5">Freelance Web Developer</h1>
          <p class="text-xl">I help entrepreneurs, startups, and SMEs on their journey to success.</p>
          <p class="text-xl">Let's build someting together!</p>
          <NuxtLink to="/services" class="btn-primary mt-5">
            Learn about my services
          </NuxtLink>
        </div>
      </div>
  </main>
</template>
