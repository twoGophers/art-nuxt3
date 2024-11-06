<template>
  <div>
    <TreeView :treeData="treeData" :locale="language" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TreeView from '~/components/TreeView.vue'

const language = ref('en')
const treeData = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/api/getThree')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    treeData.value = await response.json()
  } catch (error) {
    console.error('Error fetching tree data:', error)
  }
})
</script>
