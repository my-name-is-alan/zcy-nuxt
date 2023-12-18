<script setup lang="ts">
const { data } = await useFetch('http://111.230.249.159:8882/all')
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
  <div class="p-4 overflow-auto h-full" ref="el">
    <UiGallery ref="gallery" :image-list="imageList"></UiGallery>
  </div>
</template>
