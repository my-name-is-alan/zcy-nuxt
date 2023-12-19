<script setup lang="ts">
import { useGallery } from "~/composeable/useGallery"
const { list:data } = useGallery()
const imageList = ref<string[]>([])
imageList.value = data.value as string[]
const el = ref<HTMLElement>()
const gallery = ref()
const { arrivedState } = useScroll(el)
watchEffect(() => { 
  if (arrivedState.bottom) { 
    gallery.value?.load()
  }
})
</script>

<template>
  <div class="p-4 overflow-auto h-full bg-white dark:bg-gray-900" ref="el">
    <UiGallery ref="gallery" :image-list="imageList"></UiGallery>
  </div>
</template>
