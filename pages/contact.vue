<template>
  <main>
    <Header
      :title="$t('contact.header.title')"
      :description="$t('contact.header.description')"
    />
    <ContactForm />
  </main>
</template>

<script setup>
  definePageMeta({
    title: "Contact",
    description: "I'd be happy to discuss your project and your challenges. Get in toch and let's work together. "
  })
</script>
