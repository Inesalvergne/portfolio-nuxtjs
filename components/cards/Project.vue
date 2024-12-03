<template>
  <div class="flex">
    <div class="w-2/5 bg-transparent-pastel-1 rounded-l-lg p-10">
      <img :src="image" alt="mobile mockup of karmalama" width="350" class="m-auto">
    </div>

    <div class="w-3/5 bg-white rounded-r-lg p-12 flex flex-col justify-center">
      <h2 class="mb-5">{{ title }}</h2>
      <p class="mb-5">{{ description }}</p>
      <div class="flex gap-5 text-[14px]">
        <div class="border border-brick text-brick rounded-sm p-2">
          Full-Stack
        </div>
        <div class="border border-brick text-brick rounded-sm p-2">
          UI design
        </div>
        <div class="border border-brick text-brick rounded-sm p-2">
          Email design & development
        </div>
        <div class="border border-brick text-brick rounded-sm p-2">
          Admin dashboard
        </div>
      </div>
      <div class="flex justify-between border-t border-t-brick mt-10 pt-5">
        <p><span class="font-bold">Role:</span> {{ role }}</p>
        <p>View details →</p>
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
      image: String
    }
  }
</script>
