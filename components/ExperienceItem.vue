<template>
    <div class="flex justify-between laptop:gap-20 my-8 pb-4 border-b-2 border-pink">
      <div class="flex-1">
        <p class="text-brick font-medium">{{ company }}</p>
        <p>{{ role }}</p>
        <p class="italic">{{ location }}</p>
      </div>
      <p class="italic">{{ period }}</p>
    </div>
</template>

<script>
export default {
  props: {
    company: String,
    role: String,
    period: String,
    location: String
  },
};
</script>
