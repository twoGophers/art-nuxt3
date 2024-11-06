<template>
    <nav v-if="breadcrumbs.length" class="mb-2">
      <ul class="breadcrumbs">
        <li> <NuxtLink to="/">Назад /</NuxtLink></li>
        <li v-for="(item, index) in breadcrumbs" :key="item.id">
          <NuxtLink :to="`/${item.link}`">{{ item.name }}</NuxtLink>
          <span v-if="index < breadcrumbs.length - 1"> > </span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
  const props = defineProps({
    catalog: {
      type: Object,
      required: true
    }
  })
  
  const breadcrumbs = computed(() => {
    if (!props.catalog || !props.catalog.locale) return []
  
    const crumbs = []
  
    props.catalog.path_to_top.forEach(parentId => {
      const category = findCategoryById(props.catalog, parentId)
      if (category) {
        crumbs.push({
          id: category.id,
          name: category.locale.ru.cg_name,
          link: category.locale.ru.link
        })
      }
    })
  
    if (props.catalog.locale.ru) {
      crumbs.push({
        id: props.catalog.id,
        name: props.catalog.locale.ru.cg_name,
        link: props.catalog.locale.ru.link
      })
    }
  
    return crumbs
  })
  
  function findCategoryById(catalog, id) {
    if (catalog.id === id) return catalog
  
    if (catalog.childs && catalog.childs.length) {
      for (const child of catalog.childs) {
        const result = findCategoryById(child, id)
        if (result) return result
      }
    }
    return null
  }
  </script>
  
  <style scoped>
  .breadcrumbs {
    list-style-type: none;
    display: flex;
    padding: 0;
  }
  .breadcrumbs li {
    margin-right: 5px;
  }
  </style>
  