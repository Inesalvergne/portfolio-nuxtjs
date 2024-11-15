<template>
  <div :class="['w-3/4 mx-auto rounded-sm p-5 mb-10 laptop:w-1/4 laptop:m-0', bgColor]" v-motion-pop-visible-once>
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
