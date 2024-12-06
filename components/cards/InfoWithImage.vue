<template>
  <div class="laptop:flex gap-10 items-center mx-auto bg-light-pink p-10 rounded-lg" v-motion-pop-visible-once>
    <img :src="image_link" :alt="image_alt" width="250" class="mb-10 laptop:m-0">

    <div>
      <p class="text-brick font-semibold font-title text-[22px] mb-5">{{ title }}</p>
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
