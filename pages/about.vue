<template>
  <main>
    <Header
      :title= "$t('about.title')"
      description= "I’m a Freelance Web Developer with 7 years of experience in the tech industry,
                    including 2 years specializing in Ruby on Rails projects. Learn about my journey getting here."
    />

    <CardsInfoWithImage
      :image_link=headshot
      image_alt="ines alvergne profile picture"
      title="My diverse career path adds a twist to my work"
      description=
        "I graduated in Political Science, then moved into marketing, and eventually discovered my passion for web products and coding.
        This unique blend of technical skills and business insights helps me create solutions that connect with your audience, meet user needs, and achieve business goals.
        I'll bring a unique perspective, curiosity, and drive to your projects. Let’s talk!"
    />

    <div class="mx-auto laptop:flex justify-between mt-10 gap-5">
      <CardsKpi
        v-for="(kpi, index) in kpis"
        :key="index"
        :value="kpi.value"
        :description="kpi.description"
        :bgColor="kpi.bgColor"
      />
    </div>

    <div class="mt-10">
      <div class="mx-auto pt-10">
        <div class="laptop:flex justify-between px-10 laptop:p-0 ">
          <div>
            <h2 class="text-brick">Work Experience</h2>
            <ExperienceItem
              v-for="(item, index) in workItems"
              :key="index"
              :company="item.company"
              :role="item.role"
              :period="item.period"
            />
          </div>

          <div>
            <h2 class="text-brick">Education</h2>
            <ExperienceItem
              v-for="(item, index) in educationItems"
              :key="index"
              :company="item.company"
              :role="item.role"
              :period="item.period"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import headshot from '@/assets/images/headshot.png';

  definePageMeta({
    title: "About me",
    description: "Discover why I’m the right choice for your next web project. With expertise in Ruby on Rails and a marketing background, I deliver results-driven, user-focused web solutions."
  })

  const kpis = [
    { value: '7+', description: 'years of experience in the tech industry', bgColor: 'bg-transparent-pastel-1' },
    { value: '6', description: 'happy clients with Rails apps in production', bgColor: 'bg-transparent-pastel-2' },
    { value: '3', description: "languages I'm fluent in: FR 🇫🇷, EN 🇬🇧, ES 🇪🇸", bgColor: 'bg-transparent-pastel-3' },
  ]

  const workItems = [
    { company: 'Self-Employed', role: 'Freelance Web Developer', period: '2022 - now' },
    { company: 'Le Wagon', role: 'Teacher in Web Development', period: '2022 - now' },
    { company: 'Le Wagon', role: 'Marketing Lead', period: '2021 - 2023' },
    { company: 'Keela', role: 'Content Marketing Specialist', period: '2019 - 2020' },
    { company: 'La Pieza', role: 'Communications Coordinator', period: '2018 - 2019' },
  ]

  const educationItems = [
    { company: 'Le Wagon', role: 'Full-Stack Web Development bootcamp', period: '2022' },
    { company: 'McGill University', role: 'Master of Arts in Political Science', period: '2016 - 2018' },
    { company: 'European School of Political Science', role: 'Bachelor in European Studies', period: '2013 - 2016' },
  ]
</script>
