
<script setup lang="ts">
import { initFlowbite } from 'flowbite'
const onFileChange = () => { }
onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <div id="upload-modal" tabIndex='-1' aria-hidden="true"
    class="hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative p-4 md:p-5 bg-white rounded-lg shadow dark:bg-gray-700">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">一次可选多个文件</label>
        <input @change="" class="block w-full text-sm text-gray-900 border border-gray-300
        rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
        <div class="mt-4 flex justify-center">
          <button disabled type="button"
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
            上传
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="default-modal" tabIndex='-1' aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            注意！
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">关闭弹窗</span>
          </button>
        </div>
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            本协议是用户（以下简称“您”）与我们网站（以下简称“本网站”）之间关于上传并分享图片的法律协议。在上传任何文件之前，请您仔细阅读并理解本协议的所有内容。通过上传文件，您表示您已阅读、理解并同意接受本协议的条款和条件，且您保证您有权上传该文件并不会侵犯任何第三方的合法权益。
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            您同意不会上传任何违法违规的图片或内容，包括但不限于以下类型：
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            - 侵犯版权、商标、专利或其他知识产权的内容；
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            - 含有色情、裸露、暴力或其他不当内容；
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            - 含有诽谤、侮辱、威胁、骚扰内容；
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            - 含有病毒、木马、恶意代码等可能危害本网站或他人权益的内容；
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            - 其他违反国家法律法规或国际公约的内容。
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            本网站将对用户上传的文件进行审核，以确保内容符合国家法律法规及本协议的要求。我们有权但无义务对用户上传的内容进行监控和审查，并有权在不通知用户的情况下移除任何违规内容。
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            本网站对用户上传的图片仅提供存储和分享服务，不会将图片用于商业运作。未经您明确授权，我们不会将您的图片用于任何商业目的。
          </p>
        </div>
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-target="upload-modal" data-modal-show="upload-modal" data-modal-hide="default-modal"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">接受</button>
        <button data-modal-hide="default-modal" type="button"
          class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">拒绝</button>
      </div>
    </div>
  </div>
</div>
<div data-modal-target="default-modal" data-modal-show="default-modal"
  class="fixed cursor-pointer pl-4 pr-2 h-[40px] flex items-center justify-center right-0 bottom-60 md:bottom-80 rounded-l-full bg-blue-600">
  <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
  </svg>
</div></template>
