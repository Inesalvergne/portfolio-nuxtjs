<template>
  <div>
    <h1>Transitions in Vue.js</h1>

    <FadeSlideTransition>
      <button @click="toggleText">Display / Hide </button>
    </FadeSlideTransition>
    <FadeSlideTransition>
      <p v-if="showText" class="test">Salut c cool</p>
    </FadeSlideTransition>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const showText = ref(false)

  const toggleText = () => {
    showText.value = !showText.value
  }
</script>
