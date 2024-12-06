<template>
  <div :class="['mx-auto rounded-sm p-5 mb-10 laptop:w-1/4 laptop:m-0', bgColor]" v-motion-slide-visible-once-bottom>
    <p class="text-[34px] font-title text-brick">{{ value }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      value: String,
      description: String,
      bgColor: String,
    },
  };
</script>
