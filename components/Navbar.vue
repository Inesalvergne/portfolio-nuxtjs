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
    <div class="tablet:hidden flex justify-end px-6 py-3 bg-white">
      <IconsBurger v-if="!showMenu" @click="toggleMenu"/>
      <IconsClose v-if="showMenu" @click="toggleMenu"/>
    </div>
    <!-- <div v-if="showMenu" class="laptop:hidden z-[1] absolute top-[50px] inset-x-0 h-fit w-full text-right py-5 px-7 bg-white shadow-md"> -->
    <div v-if="showMenu" class="laptop:hidden absolute top-[50px] w-full z-[1] inset-x-0 h-fit py-5 px-7  bg-white shadow-md">
      <div class="flex flex-col items-end gap-6 mt-3 text-brick">
        <NuxtLink to="/about" class="hover:text-gradient" @click="closeMenu">
          ABOUT ME
        </NuxtLink>

        <NuxtLink to="/services" class="hover:text-gradient" @click="closeMenu">
          SERVICES
        </NuxtLink>

        <NuxtLink to="/projects" class="hover:text-gradient" @click="closeMenu">
          PROJECTS
        </NuxtLink>

        <NuxtLink to="/get-in-touch" class="hover:text-gradient" @click="closeMenu">
          GET IN TOUCH
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const showMenu = ref(false)

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const closeMenu = (event) => {
  event.stopPropagation()
  showMenu.value = false
}
</script>
