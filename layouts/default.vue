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
