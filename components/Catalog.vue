<template>
    <div v-if="catalog">
      <Breadcrumbs :catalog="catalog" />
      <img :src="catalog.category_image" alt="Category Image" />
      <div v-for="(item, index) in catalog.childs" :key="index">
        <NuxtLink :to="`${catalog.locale.ru.cg_slug}/${item.locale.ru.cg_slug}`">
          {{ item.locale.ru.cg_name }}
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps({
    catalog: {
      type: Object,
      required: false,
      default: null
    }
  })
  </script>
  