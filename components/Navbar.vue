<template>
  <div>
    <!-- On Desktop -->
    <div class="hidden tablet:block border border-brick rounded-xl w-fit mx-auto">
      <div class="flex gap-10 py-4 px-10 text-brick">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          class="hover:text-gradient">
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>

    <!-- on Mobile -->
    <div class="tablet:hidden flex justify-end px-6 py-4 bg-white">
      <IconsBurger :showMenu="showMenu" @click="toggleMenu"/>
    </div>
    <div v-if="showMenu" class="laptop:hidden absolute top-[50px] w-full z-[1] inset-x-0 h-fit py-5 px-7  bg-white shadow-md">
      <div class="flex flex-col items-end gap-6 mt-3 text-brick">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          @click="closeMenu()"
          class="hover:text-gradient">
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const navLinks = [
    { text: 'ABOUT ME', to: '/about' },
    { text: 'SERVICES', to: '/services' },
    { text: 'PROJECTS', to: '/projects' },
    { text: 'GET IN TOUCH', to: '/get-in-touch' },
  ]

  const showMenu = ref(false)
  const toggleMenu = () => { showMenu.value = !showMenu.value }
  const closeMenu = () => { showMenu.value = false }
</script>
