<script lang="ts" setup>
import { listData } from "../composables/useData"
import { useRouter } from 'vue-router'
import { showToast } from 'vant';

const router = useRouter()
let selectIndex = ref(0)
let navTitles = ref(['首页', '动画', '番剧', '国创', '音乐', '舞蹈', '游戏', '科技', '数码', '生活', '鬼畜', '时尚', '广告', '娱乐', '影视', '纪录片', '电影', '电视剧'])
let scrollTitle = ref()

let scrollWidth = computed(() => {
  return (scrollTitle.value && scrollTitle.value.scrollLeft) || 0
})

function toAbout() {
  router.push('/about')
}

function toIndex(e: any, index: number) {
  selectIndex.value = index
  // scrollTitle.value.scrollLeft = e.target.offsetLeft - scrollTitle.value.offsetWidth / 2 + e.target.offsetWidth / 2
  scrollTitle.value.scrollLeft = e.target.offsetLeft - e.target.offsetWidth * 3
}

function coverCount(count: number) {
  if (count > 10000) {
    return (count / 10000).toFixed(1) + '万'
  } else {
    return count
  }
}

function toWatch() {
  showToast({
    message: '还没有实现~',
    position: 'bottom',
  });
}

</script>

<template>
  <div class="bilibili text-xl">
    <!-- 顶部导航栏 -->
    <div @click="toAbout"
      class="w-full h-[88px] fixed top-0 left-0 z-50 bg-white pl-[36px] pr-[36px] flex flex-row items-center justify-between">
      <img src="../assets/BILIBILI_LOGO.png" class="h-[56px] w-auto" alt="">
      <!-- 右侧 -->
      <div class="flex flex-row flex-nowrap items-center">
        <span class="i-uiw:search mr-10 text-[40px]" color="gray"></span>
        <img src="../assets/head.jpeg" class="w-[48px] h-[48px] rounded-full mr-10" alt="">
        <button class="p-4 rounded-xl text-white bg-red-700">下载App</button>
      </div>
    </div>

    <!-- 横向滚动 -->
    <div class="w-full border-b fixed top-[88px] left-0 z-20 bg-white">
      <div ref="scrollTitle" class="p-x-5 w-full flex flex-row flex-nowrap overflow-x-scroll">
        <span @click="toIndex($event, idx)" :class="['pl-3 pr-3 h-15 text-3xl  leading-15 whitespace-nowrap',
          selectIndex == idx ?
            'border-b-4 border-red-500 text-red transition duration-300' :
            'text-[#808080] ']" v-for="i, idx in navTitles" :key="idx">{{ i }}</span>
      </div>
    </div>

    <!-- 视频区域 -->
    <div class="flex flex-row flex-wrap justify-evenly p-x-5 mt-40">
      <div class="flex flex-col w-86 pt-4 pb-4 shadow-lg rounded" @click="toWatch()" v-for="video_ in listData"
        :key="video_.aid">
        <div class="w-full relative">
          <img class="w-full h-[194px] rounded" :src="video_.pic" referrerPolicy="no-referrer" alt="" />

          <div
            class="absolute w-full bg-gray-800:20 filter left-0 bottom-0 p-2 text-white flex flex-row items-center justify-between">
            <div class="font-normal flex items-center">
              <span class="i-uiw:play-circle-o mr-2" color="white" style=""></span>
              <span>{{ coverCount(video_.stat.view) }}</span>
            </div>

            <div class="font-normal flex items-center">
              <span class="i-uiw-menu mr-2" color="white"></span>
              <span>{{ coverCount(video_.stat.share) }}</span>
            </div>
          </div>
        </div>
        <span class="mt-3 text-dark-50 text-2xl m-x-2">{{ video_.title }}</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
