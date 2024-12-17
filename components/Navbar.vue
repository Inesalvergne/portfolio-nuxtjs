<template>
  <div>
    <!-- On Desktop -->
    <div class="hidden tablet:block border border-pink rounded-lg w-fit mx-auto mt-10 ">
      <div class="flex items-center gap-16 py-3 px-10 text-brick">
        <NuxtLink to="/">
          <img src="@/assets/images/logo_ia.png" alt="logo ines alvergne" width="40" height="40">
        </NuxtLink>
        <NuxtLink
          :to="localePath(`${link.to}`)"
          v-for="(link, index) in navLinks"
          :key="index"
          class="text-[20px] uppercase hover:text-gradient">
          {{ $t(link.text) }}
        </NuxtLink>

        <LanguageSwitcher />
      </div>
    </div>

    <!-- on Mobile -->
    <div class="tablet:hidden flex justify-between items-center px-6 py-4 bg-white">
        <NuxtLink to="/">
          <img src="@/assets/images/logo_ia.png" alt="logo ines alvergne" width="40" height="40">
        </NuxtLink>
        <div class="my-auto">
          <IconsBurger :showMenu="showMenu" @click="toggleMenu"/>
        </div>
    </div>
    <div v-if="showMenu" class="laptop:hidden absolute top-[50px] w-full z-[1] inset-x-0 h-fit py-5 px-7  bg-white shadow-md">
      <div class="flex flex-col items-end gap-6 mt-3 text-brick">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          @click="closeMenu()"
          class="hover:text-gradient">
          {{ $t(link.text) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
  .router-link-exact-active {
    @apply text-gradient font-semibold;
  }
</style>

<script setup>
  import { ref } from 'vue'

  const localePath = useLocalePath()

  const navLinks = [
    { text: 'nav.about', to: '/about' },
    { text: 'nav.services', to: '/services' },
    { text: 'nav.projects', to: '/projects' },
    { text: 'nav.contact', to: '/contact' },
  ]

  const showMenu = ref(false)
  const toggleMenu = () => { showMenu.value = !showMenu.value }
  const closeMenu = () => { showMenu.value = false }
</script>
