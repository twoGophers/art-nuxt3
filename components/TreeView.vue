<template>
    <div>
      <div class="max-full flex mt-2 flex-wrap">
        <div v-for="(item, index) in treeData" :key="index" class="p-1 w-full relative">
          <NuxtLink :to="`${item.locale?.[language]?.cg_slug}`"
              class="cursor-pointer flex items-center justify-center h-24 bg-red-100 overflow-hidden rounded-xl"
            >
              <img
                v-if="item.category_image"
                :src="item.category_image"
                :alt="item.category_image"
                class="w-full h-full object-cover"
              />
              <span class="text-lg font-semibold absolute left-4">
                {{ item.locale?.[language]?.cg_name }}
              </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, onMounted, onBeforeUnmount, watch } from 'vue'
  
  const props = defineProps({
    treeData: {
      type: Array,
      required: true,
    },
  })
  
  const language = ref('')
    
  // Инициализация компонента
  onMounted(() => {
    // Устанавливаем язык при монтировании компонента
    language.value = localStorage.getItem('language') || 'ru'
  })
  

  </script>
  