<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <Navbar />
        <div class="w-11/12 laptop:w-9/12 desktop:w-7/12 mx-auto">
          <NuxtPage />
        </div>
      </div>
    </div>
    <Footer />
  </NuxtLayout>
</template>
