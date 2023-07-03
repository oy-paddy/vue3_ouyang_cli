<script lang="ts" setup>
import { useElementBounding, useWindowSize, useDebounceFn, useEventListener } from '@vueuse/core'

const el1 = ref<HTMLElement>()
const el2 = ref<HTMLElement>()
const el3 = ref<HTMLElement>()
const el4 = ref<HTMLElement>()


let el1Rect = useElementBounding(el1)
let el2Rect = useElementBounding(el2)
let el3Rect = useElementBounding(el3)
let el4Rect = useElementBounding(el4)

const { width, height } = useWindowSize()


onMounted(() => {
})

// const debouncedFn = useDebounceFn(() => {
//   console.log('长宽变化：', width.value, height.value)
//   el1Rect = useElementBounding(el1)
//   el2Rect = useElementBounding(el2)
//   el3Rect = useElementBounding(el3)
// }, 500)

// useEventListener(window, 'resize', debouncedFn)



</script>

<template>
  <div class="flex flex-col relative text-base">
    <div class="flex flex-col relative m-2 p-2 border">
      <div>{{ width }}:{{ height }}</div>
      <span class="absolute right-2 top-2 text-base text-red">px转换为rem会有像素差，<br />但是px转换为vw没有像素差</span>
      <div ref="el1" class="w-100 h-25 border
    border-solid border-cool-gray-400">
        {{ `unocss原子类转换为rem/vw(${el1Rect.width.value}x${el1Rect.height.value})` }}
      </div>
      <div ref="el2"
        style="width: 200px;height: 50px;text-align: center;line-height: 50px;font-size: 13px;line-height: 50px;box-sizing: border-box;border: 1px solid green;margin-bottom: 2px;margin-top: 2px;">
        内联style不转化rem/vw(200x50)</div>
      <div ref="el3" class="div-box" style="border: 1px solid red;">
        {{ `class自动转换为rem/vw:(${el3Rect.width.value}x${el3Rect.height.value})` }}</div>
      <div ref="el4" class="w-[375px] h-[100px] bg-orange-300 mt-1">一半：{{ `${el4Rect.width.value}x${el4Rect.height.value}` }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.div-box {
  width: 400px;
  height: 100px;
}
</style>
