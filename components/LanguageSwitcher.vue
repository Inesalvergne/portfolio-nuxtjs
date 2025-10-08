<template>
  <div class="text-[20px]">
    <select
      class="px-2 bg-transparent"
      role="button"
      :value="locale"
      :options="options"
      v-model="selectedLocale"
      @update:model-value="handleLocaleChange">
      <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
        {{ locale.code === 'fr' ? '🇫🇷' : '🇬🇧' }}
      </option>
    </select>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

  const availableLocales = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' }
  ]
  const options = availableLocales.map(l => ({ label: l.name, value: l.code }))
  const selectedLocale = ref(locale.value)

  const handleLocaleChange = (newLocale) => {
    if (newLocale !== locale.value) {
      window.location.href = switchLocalePath(newLocale)
    }
  }
</script>
