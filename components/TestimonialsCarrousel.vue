<template>
  <div>
    <swiper-container ref="swiperInstance" class="" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        class="card-small bg-white h-auto">
        <div class="h-3/4">
          <p>{{ slide.quote }}</p>
        </div>

        <div class="mt-3">
          <p class="font-semibold">{{ slide.name }}</p>
          <p class="text-grey">{{ slide.role }}</p>
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

  const slides = [
    {
      quote: "Ines is a real pleasure to work with. Always relevant and motivated, she allowed us to double our velocity.\
              A strong UI/UX designer, she helped us greatly improve the visual aspect of the platform. And yet, it was on\
              the back-end that she shipped the most. Put simply, there's nothing she can't do",
      name: 'Gabriel Ibanez',
      role: 'CTO at Wally'
    },
    {
      quote: "What makes her stand out is her ability to understand our needs,\
              work in a team and offer her own creative ideas to improve the project.\
              Ines also has a strong sense for usability and design, which adds real value to her work",
      name: 'Sabrina Trachsler',
      role: 'Co-Founder at Karma Lama'
    },
    {
      quote: "Having worked with Ines for a few years, I can say that she has a lot of strong skills:\
              Very good at design; has a critical eye for colour schemes, UI, UX; is very efficient with Figma.\
              Great at front-end implementation.\
              Very good in back-end logic and implementation.",
      name: "Stéphane Lafontaine",
      role: "Back-End Web Developer at Petal"
    },
    {
      quote: "A very demanding designer. I learned so much from Ines about the UI/UX side of a problem. She has a vision\
            for sites that puts transparency and usability first and does not sacrifice aesthetics. She was very easy to\
            work with, and I'm happy to say she pushed my team to find the best solution to various design issues.",
      name: 'Student',
      role: 'Le Wagon bootcamp'
    },
    {
      quote: "Ines gave my favourite lectures and livecodes of the bootcamp - they were interactive and she encouraged people\
            to speak in a way that felt supportive and equitable. She seems like a real expert in the topic,\
            but nothing ever felt like a stupid question.",
      name: 'Student',
      role: 'Le Wagon bootcamp'
    }
  ]
</script>
