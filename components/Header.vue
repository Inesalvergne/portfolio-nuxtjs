<template>
  <div class="text-center px-6 mx-auto my-10">
    <h1>{{ title }}</h1>
    <p class="text-[18px] font-medium">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
    }
  }
</script>
