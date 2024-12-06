<template>
  <main role="main" class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <TopCornersGlow />
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

  useHead({
    title: `${route.meta.title} | Ines Alvergne`,
    meta: [
      { name: 'description', content: `${route.meta.title}` },
      { property: 'og:title', content: 'Ines Alvergne' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://inesalvergne.com/og-image.png' },
    ]
  })
</script>
