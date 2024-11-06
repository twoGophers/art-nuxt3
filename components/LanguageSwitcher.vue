<template>
    <div class="w-full flex justify-end">
      <select v-model="language" class="m-4" @change="saveLanguage">
        <option value="ru">Russian</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const language = ref('')
  
  onMounted(() => {
    // Set language from localStorage or default to 'ru'
    const storedLanguage = localStorage.getItem('language')
    language.value = storedLanguage ? storedLanguage : 'ru'
  })
  
  const saveLanguage = () => {
    localStorage.setItem('language', language.value)
  }
  </script>
  