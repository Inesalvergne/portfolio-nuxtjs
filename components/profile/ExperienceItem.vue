<template>
    <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
      <div>
        <p class="text-brick font-medium">{{ company }}</p>
        <p>{{ role }}</p>
      </div>
      <p class="italic">{{ period }}</p>
    </div>
</template>

<script>
export default {
  props: {
    company: String,
    role: String,
    period: String
  },
};
</script>
