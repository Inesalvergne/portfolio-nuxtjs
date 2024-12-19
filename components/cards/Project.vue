<template>
  <div class="laptop:flex laptop:h-[400px] shadow-sm rounded-lg" v-motion-slide-visible-once-bottom>
    <div :class="['laptop:w-2/4 bg-transparent-pastel-3 rounded-l-lg flex', imageContainerClass]">
      <img :src="image" alt="mobile mockup of karmalama" :class="imageClass">
    </div>

    <div class="laptop:w-2/4 bg-white rounded-r-lg p-12 flex flex-col justify-center">
      <h2 class="mb-5 text-[26px] tablet:text-[30px] leading-8 laptop:leading-10 font-bold">{{ title }}</h2>
      <p class="mb-5">{{ description }}</p>
      <div class="flex flex-col laptop:flex-row gap-5 text-[12px]">
          <div  v-for="(tag, index) in tags"
                :key="index"
                class="w-fit border border-brick text-brick rounded-sm p-2">
            {{ tag }}
        </div>
      </div>
      <div class="flex flex-col gap-5 laptop:flex-row laptop:justify-between border-t border-t-brick mt-10 pt-5">
        <p><span class="font-bold">Role:</span> {{ role }}</p>
        <a :href="websiteLink" target="_blank" class="text-brick">{{ $t("projects.cta") }} →</a>
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
      imageClass: String,
      imageContainerClass: String,
      tags: Array,
      websiteLink: String
    }
  }
</script>
