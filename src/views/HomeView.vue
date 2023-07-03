<script setup lang="ts">
import { publicData } from "@/composables/useData";
</script>

<template>
  <div class="text-xl p-2">
    <h1>首页</h1>
    <h2 class="base-text">scss</h2>
    <div class="flex flex-col relative p-2 b-1">
      <span class="absolute right-2 top-2 text-base text-red font-bold">px转换为rem会有像素差，<br/>但是px转换为vw没有像素差</span>
      <div class="flex items-center justify-center w-100 h-25 border 
    border-solid border-cool-gray-400">
        使用unocss后自动转换为rem
      </div>
      <div
        style="width: 200px;height: 50px;line-height: 50px;box-sizing: border-box;border: 1px solid green;margin-bottom: 2px;margin-top: 2px;">
        内联style不转化rem(200x50)</div>
      <div class="div-box" style="border: 1px solid red;">class自动转换为rem:(199.9x49.9)</div>
    </div>
    <Hello></Hello>
    <router-link to="/about">跳转到关于</router-link>
    <button class="button" @click="publicData += 1">{{ publicData }} >>>+1</button>
  </div>
</template>

<style lang="scss" scoped>
.div-box {
  width: 400px;
  height: 100px;
  text-align: left;
  line-height: 100px;
}

div {
  h1 {
    color: red;
  }

  .base-text {
    color: blue;
  }
}
</style>
