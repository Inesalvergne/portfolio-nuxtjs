<template>
  <div class="laptop:w-1/3 shadow-sm rounded-lg p-10 bg-white">
    <h3 class="text-brick text-[20px] font-bold mb-5">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String
    }
  }
</script>
