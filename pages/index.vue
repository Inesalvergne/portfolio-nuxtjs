<template>
  <main>
    <section class="laptop:flex items-center gap-20 py-16 laptop:py-24 mt-0" v-motion-pop-visible-once>
      <img src="@/assets/images/illustrations/strategy.svg" alt="drawing of a woman" class="w-[220px] laptop:w-[350px]">

      <div>
        <div class="tag bg-white  flex items-center gap-2 rounded-lg py-3 px-5 shadow-sm w-fit mt-10 laptop:mt-0">
          <img src="@/assets/images/green-dot.png" alt="green dot" width="20" class="animate-pulse">
          {{ t('home.header.available') }}
        </div>

        <h1 v-html="t('home.header.title')" class="my-5 ml-0 text-brick text-[30px] leading-[40px] font-semibold laptop:leading-[50px] laptop:text-[40px]"></h1>
        <p class="text-xl my-8" v-html="t('home.header.description')"></p>
        <NuxtLink to="/services" class="btn-primary mt-5">
          {{ t('home.header.cta') }}
        </NuxtLink>
      </div>
    </section>

    <section class="laptop:mt-18">
      <h2>{{ t('home.strengths.title') }}</h2>

      <img src="@/assets/images/illustrations/team.svg" alt="team illustration" class="mx-auto" width="150">
      <div class="w-full relative">
        <IconsShapesLine class="hidden laptop:block absolute -z-10 bottom-[50%]"/>
        <div class="flex flex-col laptop:flex-row gap-12">
          <CardsInfo
            v-for="(card, index) in tm('home.strengths.cards')"
            :key="index"
            :title=rt(card.title)
            :description=rt(card.description)
          />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ t('home.clients.title') }}</h2>

      <div class="flex flex-wrap gap-x-20 gap-y-10 items-center justify-center">
        <img src="@/assets/images/client_logos/karma_lama.png" alt="karma lama logo" class="h-auto max-h-16 max-w-25" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/wally.webp" alt="wally logo" class="h-auto max-h-16 max-w-25" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/lewagon.svg" alt="le wagon logo" class="h-auto max-h-12 max-w-22" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/k_yoga.png" alt="k-yoga logo" class="h-auto max-h-16 max-w-25" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/totem.webp" alt="totem logo" class="h-auto max-h-16 max-w-25" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/rails_foundation.png" alt="ruby on rails foundation logo" class="h-auto max-h-20 max-w-28" v-motion-pop-visible-once>
        <img src="@/assets/images/client_logos/follower_products.png" alt="follower products logo" class="h-auto max-h-22 max-w-28" v-motion-pop-visible-once>
      </div>
    </section>

    <section>
      <h2>{{ t('home.testimonials.title') }}</h2>
      <TestimonialsCarrousel />
    </section>
  </main>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t, tm, rt } = useI18n();

  definePageMeta({
    title: "Home",
    description: "Hire a developer who combines technical expertise with marketing insights. I can help you turn ideas into web products that drive traffic. Let’s work together!"
  })
</script>
