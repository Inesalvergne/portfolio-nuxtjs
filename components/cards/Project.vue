<template>
  <div class="flex h-[400px]">
    <div :class="['w-2/4 bg-transparent-pastel-1 rounded-l-lg flex', imageContainerClass]">
      <img :src="image" alt="mobile mockup of karmalama"  :width="imageWidth">
    </div>

    <div class="w-2/4 bg-white rounded-r-lg p-12 flex flex-col justify-center">
      <h2 class="mb-5">{{ title }}</h2>
      <p class="mb-5">{{ description }}</p>
      <div class="flex gap-5 text-[12px]">
        <div  v-for="(tag, index) in tags"
              :key="index"
              class="border border-brick text-brick rounded-sm p-2">
          {{ tag }}
        </div>
      </div>
      <div class="flex justify-between border-t border-t-brick mt-10 pt-5">
        <p><span class="font-bold">Role:</span> {{ role }}</p>
        <a :href="websiteLink" target="_blank" class="text-brick">Visit website →</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      role: String,
      image: String,
      imageWidth: String,
      imageContainerClass: String,
      tags: Array,
      websiteLink: String
    }
  }
</script>
