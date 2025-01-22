<template>
  <div>
    <swiper-container ref="swiperInstance" class="" :init="false">
      <swiper-slide
        v-for="(slide, index) in tm('home.testimonials.slides')"
        :key="index"
        class="laptop:w-1/3 shadow-sm rounded-lg p-10 bg-white h-auto">
        <div class="h-3/4">
          <p>{{ rt(slide.quote) }}</p>
        </div>

        <div class="mt-6 flex items-center gap-4">
          <img :src= "`avatars/${ rt(slide.avatar)}`" alt="avatar" class="w-14 h-14" style="border-radius:50%;">
          <div>
            <p class="font-semibold text-brick">{{ rt(slide.name) }}</p>
            <p class="text-pink">{{ rt(slide.role) }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="flex justify-end gap-5 mt-3">
      <button class="prev">
        <IconsArrowLeft />
      </button>
      <button class="next">
        <IconsArrowRight />
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, tm, rt } = useI18n();

  const swiperInstance = ref(null);

  const swiper = useSwiper(swiperInstance, {
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 2
      }
    }
  });
</script>
