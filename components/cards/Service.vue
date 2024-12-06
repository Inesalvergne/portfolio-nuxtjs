<template>
  <div :class="['mx-auto mb-10 rounded-lg', bgColor]" v-motion-pop-visible-once>
    <div class="px-10 pt-10 pb-5">
      <component v-bind:is="illustration" class="mb-10" />
      <h2 class="text-[26px] tablet:text-[30px] laptop:text-[34px] leading-8 laptop:leading-10 font-bold font-title text-brick mb-5">{{ title }}</h2>
      <p class="text-[16px] tablet:text-[18px] laptop:text-[20px] mb-2">{{ description }}</p>
    </div>

    <div :class="['mix-blend-darken px-10 py-3 rounded-b-lg', bgColor]">
      <p class="text-pink font-bold mb-4">TOOLS</p>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
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
