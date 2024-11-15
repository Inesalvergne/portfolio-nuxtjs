<template>
  <section>
    <div class="page-head">
      <h1>Hi, I'm Ines</h1>
      <p>
        I’m a Freelance Web Developer with 7 years of experience in the tech industry, including 2 years specializing in Ruby on Rails projects.
        Learn about my journey getting here.
      </p>
    </div>

    <div class="laptop:flex gap-10 items-center w-3/4 desktop:w-2/4 mx-auto bg-light-pink p-10 rounded-lg" v-motion-pop-visible-once>
      <img src="@/assets/images/profile-picture-shapes.png" alt="ines alvergne profile picture" width="250">
      <div>
        <p class="text-brick font-semibold font-title mb-5">
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

    <div class="w-3/4 desktop:w-2/4 mx-auto flex justify-between mt-10 gap-5">
      <div class="w-1/4 bg-transparent-pastel-1 rounded-sm p-5" v-motion-pop-visible-once>
        <p class="text-[34px] font-title text-brick">7+</p>
        <p>years of experience in the tech industry</p>
      </div>
      <div class="w-1/4 bg-transparent-pastel-2 rounded-sm p-5" v-motion-pop-visible-once>
        <p class="text-[34px] font-title text-brick">6</p>
        <p>happy clients with Rails apps in production</p>
      </div>
      <div class="w-1/4 bg-transparent-pastel-3 rounded-sm p-5" v-motion-pop-visible-once>
        <p class="text-[34px] font-title text-brick">3</p>
        <p>languages I can work with 🇫🇷 🇬🇧 🇪🇸</p>
      </div>
    </div>

    <div class="bg-transparent-pastel-2 w-full mt-10">
      <div class="w-3/4 desktop:w-2/4 mx-auto pt-10">
        <div class="flex justify-between">
          <div>
            <h2 class="text-brick">Work Experience</h2>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">Self-Employed</p>
                <p>Freelance Web Developer</p>
              </div>
              <p class="italic">2022 - now</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">Le Wagon</p>
                <p>Teacher in Web Development</p>
              </div>
              <p class="italic">2022 - now</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">Le Wagon</p>
                <p>Marketing Lead</p>
              </div>
              <p class="italic">2021 - 2023</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">Keela</p>
                <p>Content Marketing Specialist</p>
              </div>
              <p class="italic">2019 - 2020</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">La Pieza</p>
                <p>Communications Coordinator</p>
              </div>
              <p class="italic">2018 - 2019</p>
            </div>
          </div>

          <div>
            <h2 class="text-brick">Education</h2>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">Le Wagon</p>
                <p>Full-Stack Web Development bootcamp</p>
              </div>
              <p class="italic">2022</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">McGill University</p>
                <p>Master of Arts in Political Science</p>
              </div>
              <p class="italic">2016 - 2018</p>
            </div>

            <div class="flex justify-between gap-20 my-8 pb-4 border-b-2 border-pink">
              <div>
                <p class="text-brick font-medium">European School of Political Science</p>
                <p>Bachelor in European Studies</p>
              </div>
              <p class="italic">2013 - 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
