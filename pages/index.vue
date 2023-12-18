<script setup lang="ts">
import { useIndexVideo } from "~/composeable/useIndexVideo"
const imgContainer = ref<HTMLElement>();
const { list: imageList } = useIndexVideo()
console.log(imageList.value);

const isLoad = ref(false);
const imageMap = ref(new Map());
const currentKey = ref(0);
const interval = ref<NodeJS.Timeout>();
const playLoad = () => { 
 interval.value =  setInterval(() => { 
    if (currentKey.value === 799) { 
      currentKey.value = 0;
    } else { 
      currentKey.value += 1;
    }
    imgContainer.value!.innerHTML = '';
    imgContainer.value?.appendChild(imageMap.value.get(currentKey.value));
  }, 100)
}
onBeforeUnmount(() => { 
  interval.value && clearInterval(interval.value!);
})
onMounted(() => {
  imageList.value.forEach((v, i) => {
    const img = new Image();
    img.className = 'object-cover w-full h-full';
    img.src = v;
    img.onload = () => {
      imageMap.value.set(i, img);
      if (i === 99) {
        isLoad.value = true;
        playLoad();
      }
    }
    imageMap.value.set(i, img);
  })
})
</script>

<template>
  <section class="flex items-center justify-center flex-1 bg-white dark:bg-gray-900 relative h-[100%]">
    <div ref='imgContainer' class="absolute w-full h-full">
      <img src="https://cdn.izhong.xyz/zcy1.webp" alt="郑梓妍！！！！！"  class="object-cover w-full h-full" />
    </div>
    <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12 z-10">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">完蛋，</span>我被钟晨瑶包围啦</h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">抖音：@战斗天使ZCY</p>
    </div>
  </section>
</template>
