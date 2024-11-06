<template>
  <div>
    <Catalog :catalog="catalog" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const items = ref<any[]>([])
const catalog = ref<any>(null)

// Загружаем данные
onMounted(async () => {
  try {
    const response = await fetch(`/api/getThree/`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    if (Array.isArray(data)) {
      items.value = data 
    } else {
      console.error('Expected an array but received:', data)
    }
  } catch (error) {
    console.error('Error fetching item data:', error)
  }
})

watchEffect(() => {
  const catalogSlug = route.params.catalog // Получаем параметр каталога из URL
  const cardSlug = route.params.card // Получаем параметр карточки из URL

  const matchedCatalog = items.value.find((item) => item.locale.ru.cg_slug === catalogSlug)

  if (matchedCatalog) {
    catalog.value = matchedCatalog
    console.log('Found catalog:', matchedCatalog)

    if (cardSlug) {
      const matchedCard = matchedCatalog.childs.find((child) => child.locale.ru.cg_slug === cardSlug)
      console.log('Found card:', matchedCard)
    }
  }
})
</script>
