<template>
  <div class="text-[20px]">
    <select
      class="px-2 bg-transparent"
      role="button"
      :value="locale"
      @change="$router.push(switchLocalePath($event.target.value))"
    >
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
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
  ]
</script>
