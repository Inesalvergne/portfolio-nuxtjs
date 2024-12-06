<template>
  <div class="laptop:flex gap-10 items-center mx-auto bg-light-pink shadow-sm p-10 rounded-lg" v-motion-slide-visible-once-bottom>
    <img :src="image_link" :alt="image_alt" width="250" class="mb-10 laptop:m-0">

    <div>
      <h2 class="font-semibold text-[24px] mb-5">{{ title }}</h2>
      <p class="mb-5">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image_link: String,
      image_alt: String,
      title: String,
      description: String
    }
  }
</script>
