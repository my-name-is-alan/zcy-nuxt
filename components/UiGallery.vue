<script setup lang="ts">
import { initFlowbite } from 'flowbite'

const props = withDefaults(defineProps<{
  imageList: string[];
}>(), {
  imageList: ()=>[]
})
const pageNo = ref(1);
const pageSize = ref(4);
const total = computed(() => { 
  return Math.ceil(props.imageList.length / pageSize.value);
})
const newList = computed(() => { 
  const arr = [];
  for (let i = 0; i < props.imageList.length; i += 3) { 
    arr.push(props.imageList.slice(i, i + 3));
  }
  return arr;
})
const currentList = computed(() => { 
  return newList.value.slice(0, pageNo.value*pageSize.value)
})
const tempSrc = ref('');
const show = (src:string) => { 
 
  tempSrc.value = src
}
function load() { 
  if (pageNo.value < total.value) { 
      pageNo.value += 1;
  }
  nextTick(() => { 
    initFlowbite()
  })
}
defineExpose({ load })
</script>

<template>
  <UploadImage></UploadImage>
  <div id="static-modal" data-modal-backdrop="static" tabIndex='-1' aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0">
      <div class="image-preview">
          <img class="h-[100vh] object-scale-down" data-modal-target="static-modal" data-modal-hide="static-modal" :src="tempSrc"  alt="这是大图大图" sizes="" srcset="" />
      </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
     <div class="grid gap-4 items-stretch" v-for="(item,index) in currentList" :key="index">
         <img @click="()=>tempSrc = img" data-modal-target="static-modal" data-modal-toggle="static-modal"  :src="img" class="h-auto max-w-full rounded-lg" alt="钟晨瑶啦" v-for="img in item" :key="img" />
     </div>
  </div>
</template>
