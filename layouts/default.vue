<template>
  <main role="main" class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <!-- <TopCornersGlow /> -->
      <Navbar />
      <div class="w-11/12 laptop:w-9/12 desktop:w-7/12 mx-auto">
        <slot />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()

  useSeoMeta({
    title: `${route.meta.title} | Ines Alvergne`,
    description: `${route.meta.description}`,
    ogTitle: 'Ines Alvergne',
    ogType: 'website',
    ogImage: 'https://inesalvergne.com/og_image.png',
  })
</script>
