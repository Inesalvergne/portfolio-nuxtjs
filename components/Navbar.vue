<script setup></script>

<template>
  <!-- On Desktop -->
  <div class="border border-brick rounded-xl w-fit mx-auto mobile: hidden tablet:hidden">
    <div class="flex gap-10 py-4 px-10 text-brick">
      <NuxtLink to="/about" class="hover:text-gradient">
        ABOUT ME
      </NuxtLink>

      <NuxtLink to="/services" class="hover:text-gradient ">
        SERVICES
      </NuxtLink>

      <NuxtLink to="/projects" class="hover:text-gradient ">
        PROJECTS
      </NuxtLink>

      <NuxtLink to="/get-in-touch" class="hover:text-gradient ">
        GET IN TOUCH
      </NuxtLink>
    </div>
  </div>

  <!-- on Mobile -->
  <div class="w-screen flex justify-between items-center px-10 py-4 laptop:hidden">
    <p>salut</p>
  </div>
</template>
