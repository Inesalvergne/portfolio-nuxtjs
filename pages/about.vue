<template>
  <main>
    <div class="page-head">
      <h1>Hi, I'm Ines</h1>
      <p>
        I’m a Freelance Web Developer with 7 years of experience in the tech industry, including 2 years specializing in Ruby on Rails projects.
        Learn about my journey getting here.
      </p>
    </div>

    <div class="laptop:flex gap-10 items-center  mx-auto bg-light-pink p-10 rounded-lg" v-motion-pop-visible-once>
      <img src="@/assets/images/profile-picture-shapes.png" alt="ines alvergne profile picture" width="250" class="mb-10 lapuntop:m-0">

      <div>
        <p class="text-brick font-semibold font-title text-[22px] mb-5">
          My diverse career path has shaped the way I approach web development today.
        </p>
        <p class="mb-5">
          I graduated in Political Science, then moved into marketing, and eventually discovered my passion for web products and coding.
          This unique blend of technical skills and business insights helps me craft solutions that connect with their audience, meet user needs, and achieve business goals.
        </p>
        <p>
          I'll bring adaptability, curiosity, and a creative problem-solving approach to your projects. Let’s talk!
        </p>
      </div>
    </div>

    <div class="mx-auto laptop:flex justify-between mt-10 gap-5">
      <ProfileStatisticCard
        v-for="(stat, index) in statistics"
        :key="index"
        :value="stat.value"
        :description="stat.description"
        :bgColor="stat.bgColor"
      />
    </div>

    <div class="mt-10">
      <div class="mx-auto pt-10">
        <div class="laptop:flex justify-between px-10 laptop:p-0 ">
          <div>
            <h2 class="text-brick">Work Experience</h2>
            <ProfileExperienceItem
              v-for="(item, index) in workItems"
              :key="index"
              :company="item.company"
              :role="item.role"
              :period="item.period"
            />
          </div>

          <div>
            <h2 class="text-brick">Education</h2>
            <ProfileExperienceItem
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
  definePageMeta({
    title: "About me",
    description: "Discover why I’m the right choice for your next web project. With expertise in Ruby on Rails and a marketing background, I deliver results-driven, user-focused web solutions."
  })

  const statistics = [
    { value: '7+', description: 'years of experience in the tech industry', bgColor: 'bg-transparent-pastel-1' },
    { value: '6', description: 'happy clients with Rails apps in production', bgColor: 'bg-transparent-pastel-2' },
    { value: '3', description: 'languages I can work with 🇫🇷 🇬🇧 🇪🇸', bgColor: 'bg-transparent-pastel-3' },
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
