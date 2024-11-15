<template>
  <div :class="['w-1/4 rounded-sm p-5', bgColor]" v-motion-pop-visible-once>
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
