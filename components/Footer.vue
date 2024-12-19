<template>
  <div class="w-full laptop:w-9/12 desktop:w-7/12 mx-auto">
    <div class="bg-light-pink laptop:rounded-lg shadow-sm mt-20 laptop:mb-10 px-6 laptop:px-10">
      <div class="h-[180px] py-10">
        <div class="flex justify-between items-start">
          <div>
            <img src="@/assets/images/logo_ines.png" alt="logo ines alvergne" width="100">
            <p class="mt-5 text-pink">{{ year }} Ines Alvergne EI </p>
          </div>
          <div>
            <div class="flex items-center justify-end gap-3 mb-5">
              <a href="mailto:i.alvergne@gmail.com" target="_blank">
                <IconsLogosEmailSquare />
              </a>
              <a href="https://github.com/Inesalvergne" target="_blank">
                <IconsLogosGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/ines-alvergne/" target="_blank">
                <IconsLogosLinkedinSquare />
              </a>
            </div>
            <!-- <CarbonBadge /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>
