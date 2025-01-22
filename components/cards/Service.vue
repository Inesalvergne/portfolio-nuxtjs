<template>
  <div :class="['mx-auto mb-10 rounded-lg', bgColor]" v-motion-slide-visible-once-bottom>
    <div class="px-10 pt-10 pb-5">
      <component v-bind:is="illustration" class="mb-10" />
      <h2 class="text-[26px] tablet:text-[30px] leading-8 laptop:leading-10 font-bold mb-5">{{ title }}</h2>
      <p class="text-[16px] tablet:text-[18px] my-4">{{ description }}</p>
    </div>

    <div :class="['mix-blend-darken px-10 py-8 rounded-b-lg', bgColor]">
      <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
        <component
          v-for="(icon, index) in icons"
          :is="icon"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      bgColor: String,
      illustration: Object,
      title: String,
      description: String,
      icons: Array
    }
  }
</script>
