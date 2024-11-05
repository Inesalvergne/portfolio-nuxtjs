<template>
  <div>
    <!-- On Desktop -->
    <div class="hidden tablet:block border border-brick rounded-xl w-fit mx-auto">
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
    <div class="laptop:hidden flex justify-end p-6 bg-white">
      <IconsBurger />
    </div>
    <div class="laptop:hidden z-[1] absolute top-[70px] inset-x-0 h-fit w-full text-right py-5 px-7 bg-white shadow-md">
      <div class="flex flex-col align-items-end gap-6 mt-3 text-brick">
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
  </div>
</template>

<script setup>

</script>
