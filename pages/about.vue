<template>
  <main>
    <Header
      :title= "$t('about.header.title')"
      :description= "$t('about.header.description')"
    />

    <CardsInfoWithImage
      :image_link=headshot
      image_alt="ines alvergne profile picture"
      :title="$t('about.presentation.title')"
      :description= "$t('about.presentation.description')"
    />

    <div class="mx-auto laptop:flex justify-between mt-10 gap-5">
      <CardsKpi
        v-for="(kpi, index) in tm('about.kpis')"
        :key="index"
        :value=rt(kpi.value)
        :description=rt(kpi.description)
        :bgColor=rt(kpi.bgColor)
      />
    </div>

    <div class="mt-10">
      <div class="mx-auto pt-10">
        <div class="laptop:flex justify-between px-10 laptop:p-0 ">
          <div>
            <h2 class="text-brick">{{ t('about.work_experience.title') }}</h2>
            <ExperienceItem
              v-for="(item, index) in tm('about.work_experience.items')"
              :key="index"
              :company=rt(item.company)
              :role=rt(item.role)
              :location=rt(item.location)
              :period=rt(item.period)
            />
          </div>

          <div>
            <h2 class="text-brick">{{ t('about.education.title') }}</h2>
            <ExperienceItem
              v-for="(item, index) in tm('about.education.items')"
              :key="index"
              :company=rt(item.company)
              :role=rt(item.role)
              :location=rt(item.location)
              :period=rt(item.period)
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import headshot from '@/assets/images/headshot.png';
  import { useI18n } from 'vue-i18n';

  const { t, tm, rt } = useI18n();

  definePageMeta({
    title: "About me",
    description: "Discover why I’m the right choice for your next web project. With expertise in Ruby on Rails and a marketing background, I deliver results-driven, user-focused web solutions."
  })
</script>
